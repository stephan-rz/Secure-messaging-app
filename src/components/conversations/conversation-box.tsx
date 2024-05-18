"use client"

import { useCallback, useMemo } from "react"
import { useRouter } from "next/navigation"
import { Conversation, Message, User } from "@prisma/client"
import { format } from "date-fns"
import { FullConversationType } from "@/types"
import useOtherUser from "@/hooks/use-other-user"
import { useCurrentUser } from "@/hooks/use-current-user"
import { cn } from "@/lib/utils"
import { Avatar } from "@nextui-org/react"

interface ConversationBoxProps {
    data: FullConversationType,
    selected?: boolean
}

const ConversationBox = ({
    data,
    selected
}: ConversationBoxProps) => {
    const otherUser = useOtherUser(data);
    const session = useCurrentUser();
    const router = useRouter();

    const handleClick = useCallback(() => {
        router.push(`/conversations/${data.id}`)
    }, [data.id, router]);

    const lastMessage = useMemo(() => {
        const messages = data.messages || [];

        return messages[messages.length - 1]
    }, [data.messages]);

    const userEmail = useMemo(() => {
        return session?.email;
    }, [session?.email]);

    const hasSeen = useMemo(() => {
        if (!lastMessage) return false;
        const seenArray = lastMessage.seen || [];

        if (!userEmail) return false;

        return seenArray.filter((user) => user.email === userEmail).length !== 0;
    }, [lastMessage, userEmail]);

    const lastMessageText = useMemo(() => {
        if (lastMessage?.image) {
            return 'Sent an image'
        }

        if (lastMessage?.body) {
            return lastMessage.body
        }

        return "No Messages"
    }, [lastMessage]);

    return (
        <button onClick={handleClick} className={cn("w-full relative flex items-center space-x-3 p-3 hover:bg-zinc-700 rounded-lg transition cursor-pointer", selected ? "bg-zinc-900" : "bg-zinc-800")}>
            <div className="relative">
                <Avatar src={otherUser?.image as string} alt="avatar" showFallback/>
                <span className="absolute block rounded-full bg-green-500 ring-2 ring-white top-[2px] right-[2px] h-2 w-2 md:h-2 md:w-2"/>
            </div>
        </button>
    )
}

export default ConversationBox