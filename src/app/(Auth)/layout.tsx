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
            <main className='min-h-[calc(100vh-100px)] flex items-center justify-center'>{children}</main>
        </MaxWidthWrapper>

    </>
}

export default layout