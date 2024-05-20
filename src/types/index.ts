import { Conversation, Message, User } from "@prisma/client";

export type FullMessageType = Message & {
    sender: User,
    seen: User[]
} & {
    content?: string
};

export type FullConversationType = Conversation & {
    users: User[],
    messages: FullMessageType[]
};

export interface Session {
    id: string;
    name: string;
    email: string;
    image: string;
}

