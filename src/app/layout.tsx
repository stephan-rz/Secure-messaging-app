import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NextProvider from "@/components/providers/NextUIProvider";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700"], subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Secure Messaging App",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SessionProvider >
          <NextProvider>
              {children}
              <Toaster
                toastOptions={{
                  style: {
                    background: '#333',
                    color: '#fff',
                    fontSize: '0.8rem',
                  }
                }} />
          </NextProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
