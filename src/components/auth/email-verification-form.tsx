"use client"

import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { EmailVerification } from "@/actions/email-verification";

import { FormError } from "@/components/form/form-error";
import { FormSuccess } from "@/components/form/form-success";
import Link from "next/link";

export const EmailVerificationForm = () => {
    const [error, setError ] = useState<string | undefined>();
    const [success, setsuccess ] = useState<string | undefined>();

    const searchParams = useSearchParams();

    const token = searchParams?.get("token");

    const onSubmit = useCallback(() => {
        if(!token) {
            setError("Missing Token!");
            return;
        }

        EmailVerification(token)
        .then((data) => {
            setsuccess(data.success);
            setError(data.error);
        })
        .catch(() => {
            setError("Something went wrong!")
        })
    }, [token]);

    useEffect(() => {
        onSubmit();
    }, [onSubmit]);

    return (
        <div className="flex flex-col gap-4 py-7 px-10 shadow-md rounded-md">
            <h1 className="text-2xl font-semibold">Confirm your email!</h1>
            <div className="flex justify-center">
                {!success && !error && (
                    <BeatLoader color="white"/>
                )}
                <FormSuccess message={success}/>
                <FormError message={error}/>
            </div>
            <p className='text-center'>Return to <Link href="/login" className="text-sm text-center text-primary hover:underline">Login</Link></p>     
        </div>
    )
}