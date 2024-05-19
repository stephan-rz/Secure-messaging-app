"use server"

import { db } from "@/lib/db"
import { getUserByEmail } from "@/data/user"
import { getVerificationTokenByToken } from "@/data/verification-token"
import { Ratelimit } from '@upstash/ratelimit';
import { redis } from '@/lib/upstash';
import { headers } from 'next/headers';

const rateLimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, "120s")
})


export const EmailVerification = async (token: string) => {
    const ip = headers().get('x-forwarded-for');
    const { success: limitReached } = await rateLimit.limit(ip!);

    if (!limitReached) return { error: 'Too Many Attempts' };

    const existingToken = await getVerificationTokenByToken(token);

    if (!existingToken) {
        return { error: "Token does not exist!" }
    }

    const hasExpired = new Date(existingToken.expires) < new Date();

    if (hasExpired) {
        return { error: "Token has expired!" }
    }

    const existingUser = await getUserByEmail(existingToken.email);

    if (!existingUser) {
        return { error: "Email does not exist!" }
    }

    await db.user.update({
        where: {
            id: existingUser.id
        },
        data: {
            emailVerified: new Date(),
            email: existingToken.email
        }
    })

    await db.verificationToken.delete({
        where: {
            id: existingToken.id
        }
    });

    return { success: "Email Verified!" }

}