"use server"

import * as z from 'zod';
import bcryptjs from "bcryptjs"

import { signIn } from "@/auth"
import { LoginSchema } from '@/schemas';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { AuthError } from 'next-auth';
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

export const Login = async (values: z.infer<typeof LoginSchema>) => {

    const ip = headers().get('x-forwarded-for');
    const { success: limitReached } = await rateLimit.limit(ip!);

    if (!limitReached) return { error: 'Too Many Login Attempts' };

    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid fields!" };
    }

    const { email, password } = validatedFields.data;

    const existingUser = await getUserByEmail(email);

    if (!existingUser || !existingUser.email || !existingUser.password) {
        return { error: "Email does not exist!" }
    }

    const hashedPassword = await bcryptjs.compare(password, existingUser.password);

    if (!hashedPassword) {
        return { error: "Invalid password!" }
    }

    if (!existingUser.emailVerified) {
        const verificationToken = await generateVerificationToken(existingUser.email)

        await sendVerificationEmail(
            verificationToken.email,
            verificationToken.token
        )

        return { success: "Confirmation email sent!" };
    };

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        })
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid credentials!" }
                default:
                    return { error: "Something went wrong!" }

            }
        }

        throw error;
    }
};