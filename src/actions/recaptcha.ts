"use server"

import axios from "axios";

import { Ratelimit } from '@upstash/ratelimit';
import { redis } from '@/lib/upstash';
import { headers } from 'next/headers';

const rateLimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, "120s")
})

const secretKey = process.env.RECAPTCHA_SECRET_KEY;

export const Recaptcha = async (token: string) => {

    const ip = headers().get('x-forwarded-for');
    const { success: limitReached } = await rateLimit.limit(ip!);

    if (!limitReached) return { error: 'Too many attempts, please try again later.' };

    
    const formData = `secret=${secretKey}&response=${token}`;

    let response;

    try {
        response = await axios.post(
            `https://www.google.com/recaptcha/api/siteverify?${formData}`,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                }
            }
        )

    } catch (error) {
        return { error: "Failed to verify recaptcha!" }
    }

    if (response?.data?.success && response?.data?.score > 0.5) {
        return { success: "Recaptcha verified!", score: response.data.score }
    } else {
        return { error: "Recaptcha verification failed!" }
    }
}