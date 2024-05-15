"use client"

import * as z from 'zod'
import * as React from 'react'
import { FC, useState } from "react"
import { cn } from "@/lib/utils"
import { Button, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTransition } from 'react'

import { FormError } from '@/components/form/form-error'
import { FormSuccess } from '@/components/form/form-success'

import { NewPasswordSchema } from '@/schemas'
import { newPassword } from '@/actions/new-password'
import Link from 'next/link'
import { Loader2 } from 'lucide-react'


interface NewPasswordFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export const NewPasswordForm: FC<NewPasswordFormProps> = ({ className, ...props }) => {

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTranstion] = useTransition();

    const form = useForm<z.infer<typeof NewPasswordSchema>>({
        resolver: zodResolver(NewPasswordSchema),
        defaultValues: {
            password: "",
        }
    });

    const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
        setError("");
        setSuccess("");

        startTranstion(() => {
            newPassword(values)
                .then((response) => {
                    setError(response?.error);
                    setSuccess(response?.success);
                });
        });

    }


    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <form
                className="flex gap-4 flex-col text-gray-400"
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <Input
                    {...form.register("password")}
                    placeholder="**********"
                    label="Password"
                    variant="underlined"
                    disabled={isPending}
                    errorMessage={form.formState.errors.password?.message}
                />
                
                <FormError message={error} />
                <FormSuccess message={success} />
                <Button type="submit" color="primary" disabled={isPending}>
                    {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                    Change Password
                </Button>
                <p className='text-center'>Return to <Link href="/login" className="text-sm text-center text-primary hover:underline">Login</Link></p>
            </form>
     
        </div>
    )
}