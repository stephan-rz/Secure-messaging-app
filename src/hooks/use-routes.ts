import { useMemo } from "react";
import { usePathname } from "next/navigation";

import { signOut } from "next-auth/react";

import useConversation from "@/hooks/use-conversation";
import { LogOutIcon, MessageSquareIcon, UsersIcon } from "lucide-react";

const useRoutes = () => {
    const pathname = usePathname();
    const { conversationId } = useConversation();

    const routes = useMemo(() => [
        {
            label: 'Chat',
            href: '/conversations',
            icon: MessageSquareIcon,
            active: pathname === '/conversations' || !!conversationId
        },
        {
            label: 'Users',
            href: '/users',
            icon: UsersIcon,
            active: pathname === '/users'
        },
        {
            label: 'Sign Out',
            href: '',
            onClick: () => signOut(),
            icon: LogOutIcon
        }
    ], [pathname, conversationId])

    return routes;
}

export default useRoutes;