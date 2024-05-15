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

import { ResetSchema } from '@/schemas'
import { reset } from '@/actions/reset-password'
import Link from 'next/link'
import { Loader2 } from 'lucide-react'


interface ResetFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export const ResetForm: FC<ResetFormProps> = ({ className, ...props }) => {

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTranstion] = useTransition();

    const form = useForm<z.infer<typeof ResetSchema>>({
        resolver: zodResolver(ResetSchema),
        defaultValues: {
            email: "",
        }
    });

    const onSubmit = (values: z.infer<typeof ResetSchema>) => {
        setError("");
        setSuccess("");

        startTranstion(() => {
            reset(values)
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
                    {...form.register("email")}
                    placeholder="Enter your email"
                    label="Email"
                    variant="underlined"
                    disabled={isPending}
                    errorMessage={form.formState.errors.email?.message}
                />
                
                <FormError message={error} />
                <FormSuccess message={success} />
                <Button type="submit" color="primary" disabled={isPending}>
                    {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                    Send reset email
                </Button>
                <p className='text-center'>Return to <Link href="/login" className="text-sm text-center text-primary hover:underline">Login</Link></p>
            </form>
     
        </div>
    )
}