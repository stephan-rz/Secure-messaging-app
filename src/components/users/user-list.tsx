"use client"

import { User } from "@prisma/client"
import UserBox from "@/components/users/user-box"

interface UserListProps {
    items: User[]
}


const UserList = ({ items }: UserListProps) => {
    return (
        <aside className="fixed inset-y-0 pb-20 lg:pb-0 lg:left-24 lg:w-80 lg:block overflow-y-auto block w-full left-0">
            <div className="px-5">
                <div className="text-2xl font-bold text-white py-4">
                    People
                </div>
            </div>
            {items.map((item) => (
                <UserBox 
                    key={item.id}
                    data={item}
                />
            ))}
        </aside>
    )
}

export default UserList