import * as z from 'zod';

export const MessageSchema = z.object({
    message: z.string().min(1, {
        message: 'Message is required'
    })
});

export type MessageSchema = z.infer<typeof MessageSchema>;