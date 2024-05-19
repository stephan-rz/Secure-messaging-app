"use client"

import { useCurrentUser } from "@/hooks/use-current-user";
import { cn } from "@/lib/utils";
import { FullMessageType } from "@/types"
import { Avatar } from "@nextui-org/react";
import { format } from "date-fns";
import Image from "next/image";

interface MessageBoxProps {
    data: FullMessageType;
    isLast?: boolean;
}

const MessageBox = ({
    data,
    isLast
}: MessageBoxProps) => {
    const session = useCurrentUser();

    const isOwn = session?.email === data.sender.email;
    const seenList = (data.seen || [])
        .filter((user) => user.email !== data.sender.email)
        .map((user) => user.name)
        .join(', ');

    const container = cn(
        "flex gap-3 p-4",
        isOwn && "justify-end"
    );

    const avatar = cn(isOwn && "order-2")

    const body = cn(
        "flex flex-col gap-2",
        isOwn && "items-end"
    )

    const message = cn(
        "text-sm w-fit overflow-hidden",
        isOwn ? "bg-primary text-white" : "bg-zinc-800 text-white",
        data.image ? "rounded-md p-0" : "rounded-full py-2 px-3"
    )

    return (
        <div className={container}>
            <div className={avatar}>
                <div className="relative">
                    <Avatar src={data?.sender.image as string} alt="avatar" showFallback />
                    <span className="absolute block rounded-full bg-green-500 ring-2 ring-white top-[2px] right-[2px] h-2 w-2 md:h-2 md:w-2" />
                </div>
            </div>
            <div className={body}>
                <div className="flex items-center gap-2">
                    <div className="text-sm truncate max-w-[150px] text-white/80">
                        {data.sender.name}
                    </div>
                    <div className="text-sm text-white/50">
                        {format(new Date(data.createdAt), 'p')}
                    </div>
                </div>
                <div className={message}>
                    {data.image ? (
                        <Image
                            alt="image"
                            height={288}
                            width={288}
                            src={data.image}
                            className="object-cover cursor-pointer hover:scale-110 transition translate"
                        />
                    ): (
                        <div>
                            {data.body}
                        </div>
                    )}
                </div>
                {isLast && isOwn && seenList.length > 0 && (
                    <div className="text-xs font-light truncate text-white/30">
                        {`Seen by ${seenList}`}
                    </div>
                )}
            </div>
        </div>
    )
}

export default MessageBox