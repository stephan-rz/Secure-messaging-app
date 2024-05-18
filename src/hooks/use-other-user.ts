import { FullConversationType } from "@/types";
import { User } from "@prisma/client";
import { useCurrentUser } from "./use-current-user";
import { useMemo } from "react";


const useOtherUser = (conversation: FullConversationType | {
    users: User[]
}) => {
    const session = useCurrentUser();

    const otherUser = useMemo(() => {
        const currentUserEmail = session?.email;

        const otherUser = conversation.users.filter((user) => user.email !== currentUserEmail);

        return otherUser;
    }, [session?.email, conversation.users])

    return otherUser[0];
    
}

export default useOtherUser;