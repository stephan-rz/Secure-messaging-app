import { currentUser } from "@/lib/auth";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { pusherServer } from "@/lib/pusher";

import { Ratelimit } from '@upstash/ratelimit';
import { redis } from '@/lib/upstash';
import { headers } from 'next/headers';

const rateLimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, "120s")
})

export async function POST(
    request: Request
) {
    try {
        const ip = headers().get('x-forwarded-for');
        const { success: limitReached } = await rateLimit.limit(ip!);

        if (!limitReached) return new NextResponse('Too Many Attempts', { status: 429 });

        const user = await currentUser();
        const body = await request.json();
        const {
            userId,
            isGroup,
            members,
            name
        } = body;

        if (!user) {
            return new NextResponse('Unauthorized', { status: 401 })
        }

        if (isGroup && (!members || members.length < 2 || !name)) {
            return new NextResponse('Invalid data', { status: 400 })
        }

        if (isGroup) {
            const newConversation = await db.conversation.create({
                data: {
                    name,
                    isGroup,
                    users: {
                        connect: [
                            ...members.map((member: { value: string }) => ({
                                id: member.value
                            })),
                            {
                                id: user.id
                            }
                        ]
                    }
                },
                include: {
                    users: true
                }
            })

            return NextResponse.json(newConversation)
        }

        const existingConversations = await db.conversation.findMany({
            where: {
                OR: [
                    {
                        userIds: {
                            equals: [user.id, userId]
                        }
                    },
                    {
                        userIds: {
                            equals: [userId, user.id]
                        }
                    }
                ]
            }
        });

        const singleConversation = existingConversations[0];

        if (singleConversation) {
            return NextResponse.json(singleConversation)
        }

        const newConversation = await db.conversation.create({
            data: {
                users: {
                    connect: [
                        {
                            id: user.id
                        },
                        {
                            id: userId
                        }
                    ]
                }
            },
            include: {
                users: true
            }
        })

        newConversation.users.map((user) => {
            if (user.email) {
                pusherServer.trigger(user.email, 'conversation:new', newConversation)
            }
        })

        return NextResponse.json(newConversation)

    } catch (error) {
        return new NextResponse('Internal Error', { status: 500 })
    }
}