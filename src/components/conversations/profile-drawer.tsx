"use client"

import useOtherUser from "@/hooks/use-other-user";
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { Avatar } from "@nextui-org/react";
import { Conversation, User } from "@prisma/client";
import { format } from "date-fns";
import { Trash2, X } from "lucide-react";
import { useMemo, Fragment, useState } from "react";
import Modal from "../modal";
import DeleteConfirmModal from "../modals/conversation-delete-confirm-modal";
import { UserAvatar } from "../avatar";


interface ProfileDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    data: Conversation & {
        users: User[]
    }
}

const ProfileDrawer = ({
    data,
    isOpen,
    onClose
}: ProfileDrawerProps) => {
    const otherUser = useOtherUser(data);
    const [confirmOpen, setConfirmOpen] = useState(false);

    const joinedDate = useMemo(() => {
        return format(new Date(otherUser.createdAt), 'PP')
    }, [otherUser.createdAt]);

    const title = useMemo(() => {
        return data.name || otherUser.name;
    }, [data.name, otherUser.name]);

    const statusText = useMemo(() => {
        if (data.isGroup) {
            return `${data.users.length} members`;
        }

        return 'Active';
    }, [data])

    return (
        <>
            <DeleteConfirmModal
                isOpen={confirmOpen}
                onClose={() => setConfirmOpen(false)}
            />
            <Transition show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={onClose}>
                    <TransitionChild as={Fragment} enter="ease-out duration-500" enterTo="opacity-100" leave="ease-in duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black bg-opacity-40" />
                    </TransitionChild>
                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <TransitionChild as={Fragment} enter="transform transition ease-in-out duration-500" enterFrom="translate-x-full" enterTo="translate-x-0" leave="transfrom transition ease-in-out duration-500" leaveTo="translate-x-full">
                                    <DialogPanel className="pointer-events-auto w-screen max-w-md">
                                        <div className="flex h-full flex-col overflow-y-scroll bg-zinc-800 py-6 shadow-xl">
                                            <div className="px-4 sm:px-6">
                                                <div className="flex items-start justify-end">
                                                    <div className="ml-3 flex h-7 items-center">
                                                        <button onClick={onClose} type="button" className="rounded-md text-white focus:outline-none focus:ring-2">
                                                            <span className="sr-only">Close Panel</span>
                                                            <X className="h-6 w-6 text-white hover:text-primary" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                                <div className="flex flex-col items-center">
                                                    <div className="mb-2">
                                                        <UserAvatar user={otherUser} />
                                                    </div>
                                                    <div>
                                                        {title}
                                                    </div>
                                                    <div className="text-sm text-white/50">
                                                        {statusText}
                                                    </div>
                                                    <div className="flex gap-10 my-8">
                                                        <button onClick={() => setConfirmOpen(true)} className="flex flex-col gap-3 items-center cursor-pointer hover:opacity-75">
                                                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                                                <Trash2 />
                                                            </div>
                                                            <span className="text-sm">Delete</span>
                                                        </button>
                                                    </div>
                                                    <div className="w-full pb-5 pt-5 sm:px-0 sm:pt-0">
                                                        <dl className="space-y-8 px-4 sm:space-y-6 sm:px-6">
                                                            {!data.isGroup && (
                                                                <div>
                                                                    <dt className="text-sm font-medium text-white">Email</dt>
                                                                    <dd className="text-sm text-white/50">{otherUser.email}</dd>
                                                                </div>

                                                            )}
                                                            {!data.isGroup && (
                                                                <div>
                                                                    <dt className="text-sm font-medium text-white">Joined</dt>
                                                                    <dd className="text-sm text-white/50"><time dateTime={joinedDate}>{joinedDate}</time></dd>
                                                                </div>
                                                            )}
                                                        </dl>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </DialogPanel>
                                </TransitionChild>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default ProfileDrawer;