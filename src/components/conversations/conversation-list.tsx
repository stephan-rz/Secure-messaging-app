"use client"

import useConversation from "@/hooks/use-conversation";
import { cn } from "@/lib/utils";
import { FullConversationType } from "@/types";
import { Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import ConversationBox from "./conversation-box";
import { useCurrentUser } from "@/hooks/use-current-user";
import { pusherClient } from "@/lib/pusher";
import { find } from "lodash";

interface ConversationListProps {
    initialItems: FullConversationType[]
}


const ConversationList = ({
    initialItems
}: ConversationListProps) => {
    const session = useCurrentUser();
    const [items, setItems] = useState<FullConversationType[]>(initialItems)

    const router = useRouter();

    const { conversationId, isOpen } = useConversation();

    const pusherKey = useMemo(() => {
        return session?.email
    }, [session?.email])

    useEffect(() => {
        if (!pusherKey) return;

        pusherClient.subscribe(pusherKey);

        const newHandler = (conversation: FullConversationType) => {
            setItems((current) => {
                if (find(current, { id: conversation.id })) return current;

                return [conversation, ...current];
            })
        };

        const updateHandler = (conversation: FullConversationType) => {
            setItems((current) => current.map((currentConversation) => {
                if (currentConversation.id === conversation.id) {
                    return {
                        ...currentConversation,
                        message: conversation.messages
                    }
                }

                return currentConversation;
            }))
        }

        const removeHandler = (conversation: FullConversationType) => {
            setItems((current) => {
                return [...current.filter((convo) => convo.id !== conversation.id)]
            })

            if (conversationId === conversation.id) {
                router.push("/conversations");
            }
        };

        pusherClient.bind('conversation:new', newHandler);
        pusherClient.bind('conversation:update', updateHandler);
        pusherClient.bind('conversation:remove', removeHandler)

        return () => {
            pusherClient.unsubscribe(pusherKey);
            pusherClient.unbind('conversation:new', newHandler);
            pusherClient.unbind('conversation:update', updateHandler);
            pusherClient.unbind('conversation:remove', removeHandler);
        }

    }, [pusherKey, conversationId, router])

    return (
        <aside className={cn("fixed hidden inset-y-0 pb-20 lg:pb-0 lg:left-20 lg:w-80 lg:block overflow-y-auto border-r border-zinc-800", isOpen ? "hiden" : "block w-full left-0")}>
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