"use client"

import { User } from "@prisma/client"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useCallback, useState } from "react"
import { Avatar } from "@nextui-org/avatar";

interface UserBoxProps {
    data: User
}

const UserBox = ({ data }: UserBoxProps) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = useCallback(() => {
        setIsLoading(true);
        axios.post('/api/conversations', {
            userId: data.id
        })
            .then((data) => {
                router.push(`/conversations/${data.data.id}`);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [data, router])

    return (
        <button onClick={handleClick} className="w-full relative flex items-center space-x-3 bg-zinc-900 p-3 hover:bg-zinc-800 rounded-lg transition cursor-pointer">
            <div className="relative">
                <Avatar src={data?.image as string} alt="avatar" showFallback/>
                <span className="absolute block rounded-full bg-green-500 ring-2 ring-white top-[2px] right-[2px] h-2 w-2 md:h-2 md:w-2"/>
            </div>
            <div className="min-w-0 flex-1">
                <div className="focus:outline-none">
                    <div className="flex justify-between items-center mb-1">
                        <p className="text-sm font-medium text-white/80">{data?.name}</p>
                    </div>
                </div>
            </div>
        </button>

    )
}

export default UserBox