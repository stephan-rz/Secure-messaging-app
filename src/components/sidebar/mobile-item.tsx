"use client"

import { cn } from "@/lib/utils";
import Link from "next/link";

interface MobileItemProps {
    label: string;
    href: string;
    icon: any;
    active?: boolean;
    onClick?: () => void;
}


const MobileItem = ({
    label,
    href,
    icon: Icon,
    active,
    onClick
}: MobileItemProps) => {
    const handleClick = () => {
        if (onClick) {
            return onClick();
        }
    }

    return (
        <Link 
        href={href}
        onClick={handleClick}
        className={cn("group flex items-center justify-center w-full p-4 text-gray-100 rounded-md hover:bg-primary", active && "bg-primary text-white")}
        >
            <Icon />
        </Link>
    );
}

export default MobileItem;