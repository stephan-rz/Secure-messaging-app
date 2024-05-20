"use client"

import useConversation from "@/hooks/use-conversation"
import { MessageSchema } from "@/schemas/message";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import axios from "axios";
import { Image as ImageIcon, SendHorizonal } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ChatForm = () => {
    const { conversationId } = useConversation();

    const form = useForm<MessageSchema>({
        resolver: zodResolver(MessageSchema),
        defaultValues: {
            message: ''
        }
    })

    const onSubmit = (values: MessageSchema) => {
        form.reset()
        axios.post('/api/messages', {
            ...values,
            conversationId
        }).then((response) => {
            if(response?.data.spam) {
                toast.error(
                    response?.data.message,
                    { duration: 5000 }
                )
            }
        })
    }

    return (
        <div className="p-4 bg-zinc-800 border-t border-zinc-800 flex items-center gap-2 lg:gap-4 w-full">
            <ImageIcon size={24} />
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex items-center gap-2 text-sm">
                <Input
                    {...form.register("message")}
                    placeholder="Write a message"
                    required
                    variant="faded"
                    size="lg"
                    classNames={{
                        input: [  
                            "text-white",
                            "placeholder:text-white-700/50",
                            "text-sm"
                          ],
                    }}
                />
                <Button type="submit" isIconOnly className="bg-transparent hover:bg-primary">
                    <SendHorizonal/>
                </Button>
            </form>
        </div>
    )
}

export default ChatForm