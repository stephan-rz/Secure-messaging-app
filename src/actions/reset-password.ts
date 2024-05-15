"use server"

import * as z from 'zod'

import { ResetSchema } from "@/schemas"
import { getUserByEmail } from "@/data/user"
import { sendPasswordResetEmail } from '@/lib/mail'
import { generatePasswordResetToken } from '@/lib/tokens'

export const reset = async (values: z.infer<typeof ResetSchema>) => {
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