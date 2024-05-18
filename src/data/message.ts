import { currentUser } from "@/lib/current-user"
import { db } from "@/lib/db";

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

        return messages;

    } catch (error) {
        return [];
    }
}