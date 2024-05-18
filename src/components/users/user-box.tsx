"use client"

import { User } from "@prisma/client"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface UserBoxProps {
    data: User
}

const UserBox = ({ data }: UserBoxProps) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    

    return (
        <div>
            user box
        </div>

    )
}

export default UserBox