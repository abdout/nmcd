'use client';
import React, { MouseEvent, useRef } from "react";
import Image from "next/image";
import Unread from "./Unread";
import Menu from "./Menu";
// import TweetText from "@/components/sharing/TweetText";
// import { cn, customDatePost } from "@/lib/utils";



const PostNotification = () => {
  const menuFeed = useRef<HTMLDivElement | null>(null);

  return (
    <div
     
    //   className={cn("notifications__component")}
    >
      <div className="flex justify-center items-center w-[40px] h-[40px]">
        <Image
          src="/images/notifications/post.png"
          alt="Activity Icon"
          width={20}
          height={20}
        />
      </div>
      <div className="notifications__component-body">
        <div className="flex flex-col space-y-2 flex-1">
          <Image
            src="/images/notifications/post.png"
            alt="Activity Icon"
            width={40}
            height={40}
            className="object-cover rounded-full w-[40px] h-[40px]"
          />

          <div className="flex justify-start items-start flex-wrap gap-x-2">
            <h5
              
              className="font-bold tracking-wide"
            >
              abdout
            </h5>
            <p>abdout</p>∙
            <p className="font-normal text-gray-200">
              21h
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            <p className="font-normal text-gray-200">
              {/* <TweetText content={postText} /> */}
            </p>
            
              <Image
                src='/images/notifications/post.png'
                alt=''
                width={300}
                height={300}
                className="object-cover w-[50px] h-[50px]"
              />
          
          </div>
        </div>
        <div ref={menuFeed} className="flex justify-end items-start">
         
          {/* <Menu isRead={isRead} /> */}
        </div>
      </div>
    </div>
  );
};

export default PostNotification;
