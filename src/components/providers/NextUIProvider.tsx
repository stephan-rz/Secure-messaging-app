"use client"

import * as React from "react";

import { NextUIProvider } from "@nextui-org/react";

interface ProviderProps {
    children: React.ReactNode;
}

export default function NextProvider({ children }: Readonly<ProviderProps>) {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    );
}