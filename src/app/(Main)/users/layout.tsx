import Sidebar from "@/components/sidebar/sidebar"

interface LayoutProps {
    children: React.ReactNode
}

const layout = ({ children }: LayoutProps) => {
    return (
        <Sidebar>
            <div className='h-full'>
                Hello
                {children}
            </div>
        </Sidebar>
    )
}

export default layout