"use client"

import useConversation from "@/hooks/use-conversation";
import { cn } from "@/lib/utils";
import { FullConversationType } from "@/types";
import { Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ConversationBox from "./conversation-box";

interface ConversationListProps {
    initialItems: FullConversationType[]
}


const ConversationList = ({
    initialItems
}: ConversationListProps) => {
    const [items, setItems] = useState<FullConversationType[]>(initialItems)

    const router = useRouter();

    const { conversationId, isOpen } = useConversation();

    return (
        <aside className={cn("fixed inset-y-0 pb-20 lg:pb-0 lg:left-20 lg:w-80 lg:block overflow-y-auto border-r border-zinc-800", isOpen ? "hiden" : "block w-full left-0")}>
            <div className="px-5">
                <div className="flex justify-between mb-4 pt-4">
                    <div className="text-2xl font-bold ">
                        Messages
                    </div>
                    <div className="p-1 cursor-pointer hover:opacity-75 transition">
                        <Users />
                    </div>
                </div>
                {items.map((item) => (
                    <ConversationBox 
                        key={item.id}
                        data={item}
                        selected={conversationId === item.id}
                    />
                ))}
            </div>
        </aside>
    )

}

export default ConversationList;