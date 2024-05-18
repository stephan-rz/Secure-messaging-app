"use client"

import * as z from "zod";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { SignUpSchema } from "@/schemas";
import { Button, Checkbox, Input } from "@nextui-org/react";
import React, { FC } from "react";
import { Icons } from "@/components/Icons";
import Link from "next/link";
import { FormError } from "../form/form-error";
import { FormSuccess } from "../form/form-success";
import { SignUp } from "@/actions/signup";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";


interface SignUpFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export const SignUpForm: FC<SignUpFormProps> = ({ className, ...props }) => {
    const searchParams = useSearchParams();
    const urlError = searchParams.get("error") === "OAuthAccountNotLinked" 
        ? "Email already in use with different provider!"
        : "";


    const [isVisible, setIsVisible] = React.useState(false);
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const toggleVisibility = () => setIsVisible(!isVisible);

    const form = useForm<z.infer<typeof SignUpSchema>>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
            name: ""
        }
    })

    const onSubmit = (values: z.infer<typeof SignUpSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            SignUp(values)
                .then((data) => {
                    setError(data.error);
                    setSuccess(data.success);
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
                    {...form.register("name")}
                    placeholder="Enter your name"
                    label="Name"
                    variant="underlined"
                    disabled={isPending}
                    errorMessage={form.formState.errors.name?.message}
                />
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
                <Input
                    {...form.register("confirmPassword")}
                    placeholder="Confirm your password"
                    variant="underlined"
                    label="Confirm Password"
                    disabled={isPending}
                    type={isVisible ? "text" : "password"}
                    errorMessage={form.formState.errors.confirmPassword?.message}
                />
                <div className="flex justify-between text-sm">
                    <Checkbox size="sm" disabled={isPending} defaultSelected>I agree with the Terms and Privacy Policy</Checkbox>
                </div>
                <FormError message={error || urlError} />
                <FormSuccess message={success} />
                <Button type="submit" color="primary" disabled={isPending}>
                    {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                    Sign Up
                </Button>
                <p className="text-sm text-center">Already have an account? <Link href="/login" className="hover:text-primary">Log in</Link></p>
            </form>
        </div>
    )
}