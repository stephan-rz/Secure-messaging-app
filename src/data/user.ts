import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
    try {
        const user = await db.user.findUnique({
            where: {
                email
            }
        });

        return user;
    } catch {
        return null;
    }
}


export const getUserById = async (id: string) => {
    try {
        const user = await db.user.findUnique({
            where: {
                id
            }
        });

        return user;
    } catch {
        return null;
    }
}


export const getUsers = async (userId: string) => {

    try {
        const users = await db.user.findMany({
            orderBy: {
                createdAt: "desc"
            },
            where: {
                NOT: {
                    id: userId
                }
            }
        });
        
        return users;
    } catch (error){
        return [];
    }
}