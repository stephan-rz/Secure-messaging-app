"use client"

import useConversation from "@/hooks/use-conversation"
import { FullMessageType } from "@/types"
import { useEffect, useRef, useState } from "react"
import MessageBox from "./message-box"
import axios from "axios"
import { pusherClient } from "@/lib/pusher"
import { find } from "lodash"

interface ChatBodyProps {
    initialMessages: FullMessageType[] | null
}

const ChatBody = ({ initialMessages }: ChatBodyProps) => {
    const [messages, setMessages] = useState(initialMessages);
    const bottomRef = useRef<HTMLDivElement>(null);

    const { conversationId } = useConversation();

    useEffect(() => {
        axios.post(`/api/conversations/${conversationId}/seen`)
    }, [conversationId]);

    useEffect(() => {
        pusherClient.subscribe(conversationId as string);
        bottomRef?.current?.scrollIntoView();

        const messageHandler = (message: FullMessageType) => {
            axios.post(`/api/conversations/${conversationId}/seen`)

            setMessages((current: any) => {
                if (find(current, { id: message.id })) {
                    return current;
                }

                return [...current, message]
            })

            bottomRef?.current?.scrollIntoView();

        }

        pusherClient.bind('messages:new', messageHandler);

        return () => {
            pusherClient.unsubscribe(conversationId as string);
            pusherClient.unbind('messages:new', messageHandler);
        }
    }, [conversationId]);

    return (
        <div className="flex-1 overflow-y-auto">
            {messages?.map((message, i) => (
                <MessageBox
                    isLast={i === messages.length - 1}
                    key={message.id}
                    data={message}
                />
            ))}
            <div ref={bottomRef} className="pt-24" />
        </div>
    )
}

export default ChatBody