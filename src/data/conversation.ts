import { currentUser } from "@/lib/current-user"
import { db } from "@/lib/db";
import { decryptMessage } from "@/lib/encryption";

export const getConversations = async () => {
    const user = await currentUser();
    if (!user?.id) return [];

    try {
        const conversations = await db.conversation.findMany({
            orderBy: {
                lastMessageAt: "desc"
            },
            where: {
                userIds: {
                    has: user.id
                }
            },
            include: {
                users: true,
                messages: {
                    include: {
                        sender: true,
                        seen: true
                    }
                }
            }
        })

        const decryptedConversations = conversations.map(conversation => ({
            ...conversation,
            messages: conversation.messages.map(message => ({
                ...message,
                content: decryptMessage(message.body) 
            }))
        }));

        return decryptedConversations;

    } catch (error) {
        return []
    }
}


export const getConversationById = async (conversationId: string) => {
    const user = await currentUser();
    if (!user?.id) return null;

    try {

        const conversation = await db.conversation.findUnique({
            where: {
                id: conversationId
            },
            include: {
                users: true,
            }
        });

        return conversation;

    } catch (error) {
        return null;
    }
}