import { Avatar } from "@nextui-org/react"

export const UserAvatar = (image: string) => {
    return (
        <div className="relative">
            <Avatar src={image} alt="avatar" showFallback />
            <span className="absolute block rounded-full bg-green-500 ring-2 ring-white top-[2px] right-[2px] h-2 w-2 md:h-2 md:w-2" />
        </div>
    )
}