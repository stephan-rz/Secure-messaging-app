"use client"

import * as z from "zod";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoginSchema } from "@/schemas";
import { Button, Checkbox, Input } from "@nextui-org/react";
import React, { FC } from "react";
import { Icons } from "@/components/Icons";
import Link from "next/link";
import { FormError } from "../form/form-error";
import { FormSuccess } from "../form/form-success";
import { Login } from "@/actions/login";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";

interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export const LoginForm: FC<LoginFormProps> = ({ className, ...props }) => {
    const searchParams = useSearchParams();
    const urlError = searchParams.get("error") === "OAuthAccountNotLinked" 
        ? "Email already in use with different provider!"
        : "";

    const [isVisible, setIsVisible] = React.useState(false);
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const toggleVisibility = () => setIsVisible(!isVisible);

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            Login(values)
                .then((data: any) => {
                    setSuccess(data?.success);
                    setError(data?.error);

                    // TODO: add hen we add 2FA
                })
        })
    }

    return (
        <div className={className} {...props}>
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
                <Input
                    {...form.register("password")}
                    placeholder="Enter your password"
                    variant="underlined"
                    label="Password"
                    disabled={isPending}
                    endContent={
                        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                            {isVisible ? (
                                <Icons.EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            ) : (
                                <Icons.EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            )}
                        </button>
                    }
                    type={isVisible ? "text" : "password"}
                    errorMessage={form.formState.errors.password?.message}
                />
                <div className="flex justify-between text-sm">
                    <Checkbox size="sm" defaultSelected disabled={isPending}>Remember me</Checkbox>
                    <Link href="/reset-password" className="hover:text-primary">Forgot Password?</Link>

                </div>
                <FormError message={error || urlError} />
                <FormSuccess message={success} />
                <Button type="submit" color="primary" disabled={isPending}>
                    {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                    Log In
                </Button>
                <p className="text-sm text-center">Not registered? <Link href="/signup" className="hover:text-primary">Crete an account!</Link></p>
            </form>
        </div>
    )
}