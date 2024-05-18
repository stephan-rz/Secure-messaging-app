import ConversationList from "@/components/conversations/conversation-list"
import Sidebar from "@/components/sidebar/sidebar"
import { getConversations } from "@/data/conversation"

export default async function ConversationsLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {

    const conversations = await getConversations();

    return (
        <Sidebar>
            <div className="h-full">
                <ConversationList initialItems={conversations}/>
                {children}
            </div>
        </Sidebar>
    )
}