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
        <div className='w-[100px] px-4'>
            <div className='flex flex-col items-end'>
                <div className=''>
                    {items.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="flex gap-2 items-center  h-[40px] cursor-pointer "
                        >

                            <Icon icon={item.icon} width="25" height="25" />

                            <p className='text-sm font-semibold'>
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