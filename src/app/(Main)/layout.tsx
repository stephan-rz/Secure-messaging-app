import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { FC, ReactNode } from 'react'

interface LayoutProps {
    children: ReactNode
}

const layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
    return (
        <MaxWidthWrapper>
            <main>{children}</main>
        </MaxWidthWrapper>
    )
}

export default layout