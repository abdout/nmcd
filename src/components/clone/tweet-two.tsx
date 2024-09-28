'use client';
import React from 'react'
import { Icon } from "@iconify/react";
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Button } from '@/components/ui/button';

const TweetTwo = () => {
    return (
        <div className='w-[598px] h-[118px] px-[15px] py-[10px]'>
            <div className='flex gap-4 items-top'>
                <Avatar>
                    <AvatarImage className="w-12 h-12 rounded-full" src="/friend/abdout.jpg" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className='flex flex-col gap-8'>
                    <p className='text-sm text-[#5B7083] font-medium' >
                        بتفكر في شنو؟
                    </p>
                    <div className='flex gap-6 items-center '>
                        <Icon icon={"fluent:image-24-regular"} height="28" className='reveal' />
                        <Icon icon={"mage:gif"} height="29" className='reveal' />
                        <Icon icon={"cil:smile"} height="26" className='reveal' />
                        <Icon icon={"formkit:datetime"} height="26" className='reveal' />
                    </div>

                </div>
                <Button className='relative top-[6.2rem] right-[11rem] w-[77px] h-[39px] rounded-[9999px] text-[#fcfcfc] text-[15px] font-bold -mt-10'>
                    نشر
                </Button>
            </div>

        </div>
    )
}

export default TweetTwo