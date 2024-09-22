import React from 'react'
import { Button } from '@/components/ui/button'
import { Icon } from "@iconify/react";
import { useModal } from '@/components/atom/modal/context';

const CreateButton = () => {
    const { openModal } = useModal();
    return (
        <Button
            size='icon'
            className="fixed bottom-8 right-8 rounded-full bg-black reveal-less shadow-lg w-14 h-14 dark:bg-gray-200 dark:text-black"
            onClick={() => openModal("")}
        >
            <Icon icon="ic:sharp-plus" width={40} />
        </Button>
    )
}

export default CreateButton