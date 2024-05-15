"use client"

import { signIn } from 'next-auth/react'
import { Icons } from '../Icons'
import { Button } from '@nextui-org/react'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'

export const SocialLoginButtons = () => {
    const onClick = (provider: "google" | "github" ) => {
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT,
        })
    }

    return (
        <>
            <Button variant='bordered' startContent={<Icons.googleIcon />} className='w-full' onClick={() => onClick("google")}>Continue with Google</Button>
            <Button variant='bordered' startContent={<Icons.githubIcon />} className='w-full' onClick={() => onClick("github")}>Continue with Github</Button>
        </>
    )
}

export default SocialLoginButtons