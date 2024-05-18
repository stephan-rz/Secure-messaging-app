import { currentUser } from "@/lib/current-user";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(
    request: Request
) {
    const user = await currentUser();
    if (!user) return new NextResponse('Unauthorized', { status: 401 })

    try {
        const body = await request.json();
        const { message, image, conversationId } = body;

        const newMessage = await db.message.create({
            data: {
                body: message,
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


        return NextResponse.json(newMessage)
    } catch (error) {
        console.log(error, 'ERROR_MESSAGES');
        return new NextResponse('Internal Error', { status: 500 })
    }
}