"use client"

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"
import * as React from "react";

export default function GoogleCaptchaProvider({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    const repactchaKey: string | undefined =
        process?.env?.NEXT_PUBLIC_RECAPTCHA_KEY;

    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={repactchaKey ?? ""}>
            {children}
        </GoogleReCaptchaProvider>
    )
}