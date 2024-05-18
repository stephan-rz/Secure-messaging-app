"use client"

import useConversation from "@/hooks/use-conversation"
import { FullMessageType } from "@/types"
import { useEffect, useRef, useState } from "react"
import MessageBox from "./message-box"
import axios from "axios"

interface ChatBodyProps {
    initialMessages: FullMessageType[] | null
}

const ChatBody = ({ initialMessages }: ChatBodyProps) => {
    const [messages, setMessages] = useState(initialMessages);
    const bottomRef = useRef<HTMLDivElement>(null);

    const { conversationId } = useConversation();

    useEffect(() => {
        axios.post(`/api/conversations/${conversationId}/seen`)
    }, [conversationId])

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