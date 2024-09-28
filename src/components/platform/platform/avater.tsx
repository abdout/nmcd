'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'

const ProfileAvater = () => {
    return (
        <div>
            <Avatar>
                <AvatarImage className="w-[80px] h-[80px] -mt-6 mx-6 border-[#fcfcfc] border-[4.35px] rounded-full" src="/friend/نورين.jpg" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    )
}

export default ProfileAvater