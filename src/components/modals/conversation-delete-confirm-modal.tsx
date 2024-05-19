"use client"

import useConversation from "@/hooks/use-conversation";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import Modal from "../modal";
import { AlertTriangle, Loader2 } from "lucide-react";
import { DialogTitle } from "@headlessui/react";
import { Button } from "@nextui-org/react";
import toast from "react-hot-toast";

interface DeleteConfirmModalProps {
    isOpen?: boolean;
    onClose: () => void;
}

const DeleteConfirmModal = ({ onClose, isOpen }: DeleteConfirmModalProps) => {
    const router = useRouter();
    const { conversationId } = useConversation();
    const [isLoading, setIsLoading] = useState(false);

    const onDelete = useCallback(() => {
        setIsLoading(true);

        axios.delete(`/api/conversations/${conversationId}`)
            .then(() => {
                onClose();
                router.push('/conversations');
                router.refresh();
            })
            .catch(() => {
                toast.error('Failed to delete conversation');
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [conversationId, onClose, router])

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <AlertTriangle className="h-6 w-6 text-red-500" />
                </div>
                <div className="mt-3 text-left sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle as="h3" className="text-lg leading-6 font-medium text-white">
                        Delete conversation
                    </DialogTitle>
                    <div className="mt-2">
                        <p className="text-sm text-gray-300">
                            Are you sure you want to delete this conversation? This action cannot be undone.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-5 sm:mt-4 sm:flex gap-3 sm:flex-row-reverse">
                <Button color="danger" disabled={isLoading} onClick={onDelete}>
                    {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                    Delete
                </Button>
                <Button variant="ghost" disabled={isLoading} onClick={onClose}>Cancel</Button>
            </div>
        </Modal>
    )
}

export default DeleteConfirmModal