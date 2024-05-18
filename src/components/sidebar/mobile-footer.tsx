"use client"

import useConversation from "@/hooks/use-conversation";
import useRoutes from "@/hooks/use-routes"
import MobileItem from "@/components/sidebar/mobile-item";

const MobileFooter = () => {
    const routes = useRoutes();
    const { isOpen } = useConversation();

    if (isOpen) {
        return null;
    }

    return (
        <div className="fixed
        justify-between
        w-full
        bottom-0
        z-40
        flex
        items-center
        bg-zinc-800
        border-t-[lpx]
        lg:hidden"
        >
            {routes.map((route) => (
                <MobileItem
                    key={route.label}
                    label={route.label}
                    href={route.href}
                    active={route.active}
                    icon={route.icon}
                    onClick={route.onClick}
                />
            ))}
        </div>
    )
}

export default MobileFooter