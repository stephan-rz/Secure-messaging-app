"use server"

import * as z from "zod"
import { NewPasswordSchema } from "@/schemas"
import { getPasswordResetTokenByToken } from "@/data/password-reset-token"
import { getUserByEmail } from "@/data/user"

import bcryptjs from "bcryptjs"
import { db } from "@/lib/db"
import { Ratelimit } from '@upstash/ratelimit';
import { redis } from '@/lib/upstash';
import { headers } from 'next/headers';

const rateLimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, "120s")
})

export const newPassword = async (
    values: z.infer<typeof NewPasswordSchema>,
    token?: string | null
) => {
    const ip = headers().get('x-forwarded-for');
    const { success: limitReached } = await rateLimit.limit(ip!);

    if (!limitReached) return { error: 'Too Many Attempts' };

    if(!token) {
        return { error: "Missing token!" }
    }

    const validatedFields = NewPasswordSchema.safeParse(values);

    if (!validatedFields.success) {
        return {
            error: "Invalid password!"
        }
    }

    const { password } = validatedFields.data;

    const existingToken = await getPasswordResetTokenByToken(token);

    if (!existingToken) {
        return {
            error: "Invalid token!"
        }
    }

    const hasExpired = new Date(existingToken.expires) < new Date();

    if (hasExpired) {
        return {
            error: "Token has expired!"
        }
    }

    const existingUser = await getUserByEmail(existingToken.email);

    if (!existingUser) {
        return {
            error: "User not found!"
        }
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    await db.user.update({
        where: {
            id: existingUser.id
        },
        data: {
            password: hashedPassword
        }
    });

    await db.passwordResetToken.delete({
        where: {
            id: existingToken.id
        }
    });

    return {
        success: "Password updated!"
    }
}