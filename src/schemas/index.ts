import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.string().email({
        message: 'Email is required'
    }),
    password: z.string().min(1,{
        message: 'Password is required'
    })
});

export const SignUpSchema = z.object({
    email: z.string().email({
        message: 'Email is required'
    }),
    password: z.string().min(8,{
        message: 'Minimum 8 characters required'
    }),
    confirmPassword: z.string(),
    name: z.string().min(1,{
        message: 'Name is required'
    })
})
.refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
})
;


export const ResetSchema = z.object ({
    email: z.string().email({
        message: "Email is required."
    })
});


export const NewPasswordSchema = z.object ({
    password: z.string().min(8,{
        message: 'Minimum 8 characters required'
    })
});