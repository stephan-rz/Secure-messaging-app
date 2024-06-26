'use client'

import useRoutes from "@/hooks/use-routes";
import { useState } from "react";
import DesktopItem from "./desktop-item";
import { Session } from "@/types";
import { Avatar } from "@nextui-org/avatar";

interface DesktopSidebarProps {
    user: Session | null;
}

const DesktopSidebar = ({ user }: DesktopSidebarProps) => {
    const routes = useRoutes();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="hidden h-full lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:w-20 xl:px-6 lg:overflow-y-auto lg:bg-zinc-900 lg:border-r-[lpx] lg:pb-4 lg:flex lg:flex-col justify-between"
        >
            <nav className="mt-4 flex flex-col justify-between">
                <ul className="flex flex-col items-center gap-3">
                    {routes.map((item) => (
                        <DesktopItem
                            key={item.label}
                            href={item.href}
                            label={item.label}
                            icon={item.icon}
                            active={item.active}
                            onClick={item.onClick}
                        />
                    ))}
                </ul>
            </nav>

            <nav className="mb-4 flex flex-col justify-between items-center">
                <button
                    onClick={() => setIsOpen(true)}
                    className="cursor-pointer hover:opacity-75 transition relative"
                >
                    <Avatar isBordered color="primary" src={user?.image} alt="avatar" showFallback name={user?.name}/>
                    <span className="absolute block rounded-full bg-green-500 ring-2 ring-white top-[2px] right-[2px] h-2 w-2 md:h-2 md:w-2"/>
                </button>
            </nav>
        </div>
    )
}

export default DesktopSidebar;