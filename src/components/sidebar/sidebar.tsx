import { currentUser } from "@/lib/auth";
import DesktopSidebar from "./desktop-sidebar";
import MobileFooter from "./mobile-footer";

interface SidebarProps {
    children: React.ReactNode
}

async function Sidebar({ children }: Readonly<SidebarProps>) {
    const user = await currentUser();

    return (
        <div className="h-full">
            <DesktopSidebar user={user as any} />
            <MobileFooter />
            <main className="lg:pl-20 h-full">
                {children}
            </main>
        </div>
    );
}

export default Sidebar;