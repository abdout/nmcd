'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Icon } from "@iconify/react";
import React from 'react';

const PostA = () => {
    return (
        <div className="flex gap-4">


            <Avatar>
                <AvatarImage className="w-14 h-14 rounded-full" src="/friend/نورين.jpg" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className='flex flex-col'>
                <p className="text-gray-500 text-[12px]"><strong className='text-sm text-black'>محمد نورين</strong> • 12 س</p>


                <p className="mt-2 leading-normal w-64">
                    لا تحاول فهم الحل بشكل كامل، ولا تحاول فهم المشكلة بشكل كامل أيضاً. حاول فقط فهم ما تحتاجه من الحل.
                </p>


                <div className="flex justify-between text-gray-500 items-center w-48 pt-3">
                    <div className="flex gap-1 items-center">
                        <Icon icon={"iconamoon:comment-thin"} height="14" />
                        <p className='text-gray-500 text-[10px]'>28</p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <Icon icon={"system-uicons:retweet"} height="14" />
                        <p className='text-gray-500 text-[10px]'>5</p>
                    </div>
                   
                    <Icon icon={"circum:heart"} height="17" />
                    <Icon icon={"material-symbols-light:upload"} height="17" />
                </div>
            </div>



        </div>
    );
};

export default PostA;
