"use server"

import * as z from 'zod'

import { ResetSchema } from "@/schemas"
import { getUserByEmail } from "@/data/user"
import { sendPasswordResetEmail } from '@/lib/mail'
import { generatePasswordResetToken } from '@/lib/tokens'

import { Ratelimit } from '@upstash/ratelimit';
import { redis } from '@/lib/upstash';
import { headers } from 'next/headers';

const rateLimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, "120s")
})

export const reset = async (values: z.infer<typeof ResetSchema>) => {
    const ip = headers().get('x-forwarded-for');
    const { success: limitReached } = await rateLimit.limit(ip!);

    if (!limitReached) return { error: 'Too many attempts, please try again later.' };


    const validatedFileds = ResetSchema.safeParse(values);

    if (!validatedFileds.success) {
        return {
            error: "Invalid email!"
        }
    }

    const { email } = validatedFileds.data;

    const existingUser = await getUserByEmail(email);

    if (!existingUser) {
        return {
            error: "Email not found!"
        }
    }

    const passwordResetToken = await generatePasswordResetToken(email);
    await sendPasswordResetEmail(
        passwordResetToken.email,
        passwordResetToken.token
    );

    return {
        success: "Reset email sent!"
    }


}