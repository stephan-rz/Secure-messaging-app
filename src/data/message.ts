import { currentUser } from "@/lib/current-user"
import { db } from "@/lib/db";
import { decryptMessage } from '@/lib/encryption';

export const getMessages = async (conversationId: string) => {
    const user = await currentUser();
    if (!user?.id) return null;

    try {
        const messages = await db.message.findMany({
            orderBy: {
                createdAt: "asc"
            },
            where: {
                conversationId
            },
            include: {
                sender: true,
                seen: true
            }
        });

        const decryptedMessages = messages.map(message => ({
            ...message,
            content: decryptMessage(message.body)
        }));

        return decryptedMessages;

    } catch (error) {
        return [];
    }
}