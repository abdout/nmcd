'use client';
import React from 'react';
import { Icon } from "@iconify/react";

interface SidebarItemProps {
    label: string
    icon?: string
    href?: string
    onClick?: () => void
}
const SidebarItems: React.FC<SidebarItemProps> = ({ label, icon, href, onClick }) => {

    return (
        <div className="flex flex-row items-center">
            <div className='relative rounded-full h-14 w-14 flex items-center justify-center p-4 cursor-pointer lg:hidden'>
                <Icon icon='icon' height="24" />
            </div>
            <div className="relative hidden lg:flex items-row gap-4 p-4 rounded-full cursor-pointer ">
                <Icon icon='icon' height="24" />
                <p className='hidden lg:block text-xl'>
                    {label}
                </p>
            </div>
        </div>
    )

}

export default SidebarItems