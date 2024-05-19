"use client"

import React, { Fragment } from "react";
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { BeatLoader, MoonLoader } from "react-spinners"

const LoadingModal = () => {
    return (
        <Transition show={true} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 z-50" onClose={() => { }}>
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-zinc-900 bg-opacity-70 transition-opacity" />
                </TransitionChild>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <DialogPanel >
                            <BeatLoader size={30} color="white" />
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default LoadingModal