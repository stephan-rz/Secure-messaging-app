import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface IParams {
    conversationId?: string;
}


export async function POST(
    request: Request,
    { params }: { params: IParams }
) {
    const user = await currentUser();

    if (!user) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    try {
        const { conversationId } = params;

        const conversation = await db.conversation.findUnique({
            where: {
                id: conversationId
            },
            include: {
                messages: {
                    include: {
                        seen: true
                    }
                },
                users: true
            }
        });

        if(!conversation) {
            return new NextResponse("Invalid ID", { status: 400 });
        }

        const lastMessage = conversation.messages[conversation.messages.length - 1];

        if(!lastMessage) {
            return NextResponse.json(conversation);
        }

        const updatedMessage = await db.message.update({
            where: {
                id: lastMessage.id
            },
            include: {
                sender: true,
                seen: true
            },
            data: {
                seen: {
                    connect: {
                        id: user.id
                    }
                }
            }
        });

        return NextResponse.json(updatedMessage);

    } catch (error) {
        console.log(error, 'ERROR_MESSAGES_SEEN');
        return new NextResponse("Internal Error", { status: 500 })
    }
}