import ChatBody from "@/components/conversations/chat-body";
import ChatForm from "@/components/conversations/chat-form";
import ChatHeader from "@/components/conversations/chat-header";
import EmptyState from "@/components/empty-state";
import { getConversationById } from "@/data/conversation";
import { getMessages } from "@/data/message";

interface IParams {
    conversationId: string;
}

const ConversationId = async ({params}: {params: IParams}) => {
    const conversation = await getConversationById(params.conversationId);
    const messages = await getMessages(params.conversationId);

    if (!conversation) return (
        <div className="lg:pl-80 h-full">
            <div className="h-full flex flex-col">
                <EmptyState />
            </div>
        </div>
    );

    return (
        <div className="lg:pl-80 h-full">
            <div className="h-full flex flex-col">
                <ChatHeader conversation={conversation}/>
                <ChatBody initialMessages={messages}/>
                <ChatForm />
            </div>
        </div>
    )
}

export default ConversationId;