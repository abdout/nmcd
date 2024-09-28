'use client';
import React from 'react'
import { Icon } from "@iconify/react";
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Button } from '@/components/ui/button';

const Tweet = () => {
    return (
        <div className='w-[598px] h-[118px] px-[15px] py-[10px]'>
            <div className='flex gap-4 items-top'>
                <Avatar>
                    <AvatarImage className="w-12 h-12 rounded-full" src="/friend/نورين.jpg" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className='flex flex-col gap-8'>
                    <p className='text-lg text-[#5B7083] font-medium' >
                        بتفكر في شنو؟
                    </p>
                    <div className='flex gap-4 items-center '>
                        <Icon icon={"fluent:image-24-regular"} height="30" className='reveal-less' />
                        <Icon icon={"mage:gif"} height="31" className='reveal-less' />
                        <Icon icon={"cil:smile"} height="29" className='reveal-less' />
                        <Icon icon={"formkit:datetime"} height="28" className='reveal-less' />
                    </div>
                   
                </div>
                <Button className='relative top-[6.2rem] right-[18rem] w-[77px] h-[39px] rounded-[9999px] text-[#fcfcfc] text-[15px] font-bold -mt-10'>
                        نشر
                    </Button>
            </div>

        </div>
    )
}

export default Tweet