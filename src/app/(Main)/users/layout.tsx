import Sidebar from "@/components/sidebar/sidebar"
import UserList from "@/components/users/user-list"

interface LayoutProps {
    children: React.ReactNode
}

const layout = ({ children }: LayoutProps) => {
    return (
        <Sidebar>
            <div className='h-full'>
                <UserList />
                {children}
            </div>
        </Sidebar>
    )
}

export default layout