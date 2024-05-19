"use client"

import useOtherUser from "@/hooks/use-other-user";
import { Avatar } from "@nextui-org/react";
import { Conversation, User } from "@prisma/client";
import { ArrowLeft, Ellipsis } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import ProfileDrawer from "./profile-drawer";

interface ChatHeaderProps {
    conversation: Conversation & {
        users: User[]
    }
}

const ChatHeader = ({ conversation }: ChatHeaderProps) => {
    const otherUser = useOtherUser(conversation);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const statusText = useMemo(() => {
        if (conversation.isGroup) {
            return `${conversation.users.length} members`;
        }

        return 'Active';
    }, [conversation])

    return (
        <>
            <ProfileDrawer
                data={conversation}
                isOpen={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            />
            <div className="bg-zinc-800 w-full flex border-b-[1px] border-zinc-700 sm:px-4 py-3 px-4 lg:px-6 justify-between items-center shadow-sm">
                <div className="flex gap-3 items-center">
                    <Link href="/conversations" className="lg:hidden block text-white hover:text-primary transition cursor-pointer">
                        <ArrowLeft size={24} />
                    </Link>
                    <div className="relative">
                        <Avatar src={otherUser?.image as string} alt="avatar" showFallback />
                        <span className="absolute block rounded-full bg-green-500 ring-2 ring-white top-[2px] right-[2px] h-2 w-2 md:h-2 md:w-2" />
                    </div>
                    <div className="flex flex-col">
                        <div className="truncate">
                            {conversation.name || otherUser.name}
                        </div>
                        <div className="text-sm font-light text-white/80">
                            {statusText}
                        </div>
                    </div>
                </div>
                <Ellipsis size={24} onClick={() => setDrawerOpen(true)} className="text-white cursor-pointer hover:text-primary transition" />
            </div>
        </>
    )
}

export default ChatHeader;