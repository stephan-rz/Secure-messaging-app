'use client'

import { cn } from "@/lib/utils";
import Link from "next/link";

interface DesktopItemProps {
    label: string;
    href: string;
    icon: any;
    active?: boolean;
    onClick?: () => void;
}

const DesktopItem = ({
    label,
    href,
    icon: Icon,
    active,
    onClick
}: DesktopItemProps) => {
    const handleClick = () => {
        if (onClick) {
            return onClick();
        }
    };

    return (
        <li onClick={handleClick}>
            <Link href={href} className={cn("group flex gap-x-3 p-3 text-sm leading-6 font-semibold text-gray-100 rounded-md hover:bg-primary", active && "bg-primary text-white")}>
                <Icon className="h-6 w-6 shrink-0"/>
                <span className="sr-only">{label}</span>
            </Link>
        </li>
    );
}
export default DesktopItem;