import { Resend } from 'resend';
import PasswordResetEmail from './email-templates/password-reset-email';
import VerificationEmail from './email-templates/email-verification-email';

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.NEXT_PUBLIC_SITE_URL;

export const sendPasswordResetEmail = async (email: string, token: string) => {
    const resetLink = `${domain}/new-password?token=${token}`;
    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Reset your password",
        html: PasswordResetEmail({resetLink})
    })
}


export const sendVerificationEmail = async (email: string, token: string) => {
    const confirmLink = `${domain}/verify-email?token=${token}`;

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Verify your email address",
        html: VerificationEmail({confirmLink})
    })
}