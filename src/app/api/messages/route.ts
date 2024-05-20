import { currentUser } from "@/lib/current-user";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { pusherServer } from "@/lib/pusher";
import { Ratelimit } from '@upstash/ratelimit';
import { redis } from '@/lib/upstash';
import { headers } from 'next/headers';
import { encryptMessage } from "@/lib/encryption";

const rateLimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(15, "60s")
})

export async function POST(
    request: Request
) {
    const user: any = await currentUser();
    if (!user) return new NextResponse('Unauthorized', { status: 401 })

    try {
        const ip = headers().get('x-forwarded-for');
        const { success: limitReached } = await rateLimit.limit(ip!);

        if (!limitReached) return new NextResponse('Too many attempts, please try again later.', { status: 429 });

        const body = await request.json();
        const { message, image, conversationId } = body;
        const encryptedMessage = encryptMessage(message);

        const newMessage = await db.message.create({
            data: {
                body: encryptedMessage,
                image,
                conversation: {
                    connect: {
                        id: conversationId
                    }
                },
                sender: {
                    connect: {
                        id: user.id
                    }
                },
                seen: {
                    connect: {
                        id: user.id
                    }
                }
            },
            include: {
                seen: true,
                sender: true
            }
        })

        const updatedConversation = await db.conversation.update({
            where: {
                id: conversationId
            },
            data: {
                lastMessageAt: new Date(),
                messages: {
                    connect: {
                        id: newMessage.id
                    }
                }
            },
            include: {
                users: true,
                messages: {
                    include: {
                        seen: true
                    }
                }
            }
        });

        await pusherServer.trigger(conversationId, 'messages:new', {
            ...newMessage,
            content: message
        });

        const lastMessage = updatedConversation.messages[updatedConversation.messages.length - 1];

        updatedConversation.users.map((user) => {
            pusherServer.trigger(user.email!, 'conversation:update', {
                id: conversationId,
                message: [lastMessage],
                content: message
            })
        })

        return NextResponse.json(newMessage)
    } catch (error) {
        console.log(error, 'ERROR_MESSAGES');
        return new NextResponse('Internal Error', { status: 500 })
    }
}