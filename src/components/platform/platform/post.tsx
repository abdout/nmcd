'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Icon } from "@iconify/react";
import React from 'react';

const Post = () => {
    return (
        <div className="max-w-[300px] mx-auto">
            <div className='flex items-center gap-2 px-12 py-2'>
            <Icon icon={"system-uicons:retweet"} height="13" />
            <p className='text-gray-500 font-light text-[11px]'>محمد مازن اعاد التغريد</p>
            </div>
            <div className="flex items-center gap-3">
                <Avatar>
                    <AvatarImage className="w-14 h-14 rounded-full" src="/friend/نورين.jpg" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className='flex flex-col'>
                    <strong>نورين</strong>
                    <p className="text-gray-500">norain@</p>
                </div>
            </div>
            <p className="mt-5 leading-normal">
                لا تحاول فهم الحل بشكل كامل، ولا تحاول فهم المشكلة بشكل كامل أيضاً. حاول فقط فهم ما تحتاجه من الحل.
            </p>
            <div className='space-y-2 mt-7'>

            
            <p className="text-gray-500 text-[11px]">09:28 • 2/21/20</p>
            <hr className="border-t-[0.1px] border-gray-200" />
            <p className='text-gray-500 text-[12px]'><strong className="font-extrabold text-black">6</strong>  إعادة تغريد</p>
            <hr className="border-t-[0.1px] border-gray-200" />
            <div className="flex justify-between text-gray-500 items-center px-4">
                <Icon icon={"iconamoon:comment-thin"} height="20" />
                <Icon icon={"system-uicons:retweet"} height="22" />
                <Icon icon={"circum:heart"} height="24" />
                <Icon icon={"material-symbols-light:upload"} height="24" />    
            </div>
            </div>



        </div>
    );
};

export default Post;
