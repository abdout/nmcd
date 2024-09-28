'use client';
import React from 'react';
import { Icon } from "@iconify/react";
import Link from 'next/link';

const Sidebar = () => {
    const items = [
        {
            label: "الاشعارات",
            icon: "carbon:notification",
            href: "/",
        },
        {
            label: "الرسائل",
            icon: "lets-icons:message-light",
            href: "/",
        },
        // {
        //     label: "العلامات",
        //     icon: "fluent:bookmark-32-regular",
        //     href: "/",
        // },
        {
            label: "الدليل",
            icon: "ph:book",
            href: "/",
        },
        {
            label: "المساعدة",
            icon: "ph:headset",
            href: "/",
        }
    ];

    return (
        <div className='col-span-1 h-full pt-4 md:pt-6'>
            <div className='flex flex-col items-end'>
                <div className=''>
                    {items.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="flex gap-2 items-center w-[255px] h-[60px] cursor-pointer "
                        >

                            <Icon icon={item.icon} width="30" height="30" />

                            <p className='text-[16px] font-semibold ml-8'>
                                {item.label}
                            </p>

                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;