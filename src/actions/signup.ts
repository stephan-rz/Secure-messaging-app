"use server"

import * as z from 'zod';
import bcrypt from "bcryptjs"

import { db } from '@/lib/db';
import { SignUpSchema } from '@/schemas';
import { getUserByEmail } from '@/data/user';
import { generateVerificationToken } from '@/lib/tokens';
import { sendVerificationEmail } from '@/lib/mail';
import { Ratelimit } from '@upstash/ratelimit';
import { redis } from '@/lib/upstash';
import { headers } from 'next/headers';

const rateLimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, "120s")
})


export const SignUp = async (values: z.infer<typeof SignUpSchema>) => {
    const ip = headers().get('x-forwarded-for');
    const { success: limitReached } = await rateLimit.limit(ip!);

    if (!limitReached) return { error: 'Too many attempts, please try again later.' };

    const validatedFields = SignUpSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid fields!" };
    }

    const { email, password, name } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return { error: "User already exists!" };
    }

    await db.user.create({
        data: {
            email,
            password: hashedPassword,
            name
        }
    });

    const verificationToken = await generateVerificationToken(email);
    await sendVerificationEmail(verificationToken.email, verificationToken.token);

    return { success: "Email verification sent! Please check inbox." };
};