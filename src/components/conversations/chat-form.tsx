"use client"

import useConversation from "@/hooks/use-conversation"
import { MessageSchema } from "@/schemas/message";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@nextui-org/react";
import { Image as ImageIcon } from "lucide-react";
import { useForm } from "react-hook-form";

const ChatForm = () => {
    const { conversationId } = useConversation();

    const form = useForm<MessageSchema>({
        resolver: zodResolver(MessageSchema),
        defaultValues: {
            message: ''
        }
    })

    const onSubmit = (values: MessageSchema) => {
        console.log(values)
        form.reset()
    }

    return (
        <div className="p-4 bg-zinc-800 border-t border-zinc-800 flex items-center gap-2 lg:gap-4 w-full">
            <ImageIcon size={24} />
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <Input
                    {...form.register("message")}
                    placeholder="Write a message"
                    required
                />
            </form>
        </div>
    )
}

export default ChatForm