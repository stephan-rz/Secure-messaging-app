import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { pusherServer } from "@/lib/pusher";
import { NextResponse } from "next/server";

interface IParams {
    conversationId?: string;
}

export async function DELETE(
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
                users: true
            }
        });

        if(!conversation) {
            return new NextResponse("Invalid ID", { status: 400 });
        }

        await db.conversation.deleteMany({
            where: {
                id: conversationId,
                userIds: {
                    hasSome: [user?.id!]
                }
            }
        });

        conversation.users.forEach((user) => {
            if (user.email) {
                pusherServer.trigger(user.email, 'conversation:remove', conversation)
            }
        })

        return new NextResponse("Conversation deleted", { status: 200 });

    } catch (error) {
        console.log(error, "ERROR_CONVERSATION_DELETE");
        return new NextResponse("Internal server error", { status: 500 });
    }
}