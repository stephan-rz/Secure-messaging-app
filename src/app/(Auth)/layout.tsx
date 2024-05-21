import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import GoogleCaptchaProvider from '@/components/providers/GoogleCaptchaProvider'
import { FC, ReactNode } from 'react'

interface LayoutProps {
    children: ReactNode
}

const layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
    return (
        <MaxWidthWrapper>
            <main className='min-h-[calc(100vh-100px)] flex items-center justify-center'>
                <GoogleCaptchaProvider>
                    {children}
                </GoogleCaptchaProvider>
            </main>
        </MaxWidthWrapper>
    )
}

export default layout