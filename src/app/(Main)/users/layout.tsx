import Sidebar from "@/components/sidebar/sidebar"
import UserList from "@/components/users/user-list"
import { getUsers } from "@/data/user"
import { currentUser } from "@/lib/auth"

interface LayoutProps {
    children: React.ReactNode
}

const layout = async ({ children }: LayoutProps) => {
    const user = await currentUser();

    const users = await getUsers(user?.id as string)   

    return (
        <Sidebar>
            <div className='h-full'>
                <UserList items={users}/>
                {children}
            </div>
        </Sidebar>
    )
}

export default layout