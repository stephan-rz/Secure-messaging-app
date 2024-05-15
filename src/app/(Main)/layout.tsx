import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import NavBar from '@/components/NavBar'
import { FC, ReactNode } from 'react'

interface layoutProps {
    children: ReactNode
}

const layout: FC<layoutProps> = ({ children }: layoutProps) => {
    return <>
        <NavBar />
        <MaxWidthWrapper>
            <main>{children}</main>
        </MaxWidthWrapper>

    </>
}

export default layout