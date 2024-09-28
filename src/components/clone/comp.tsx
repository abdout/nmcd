import Image from "next/image";
import { Icon } from "@iconify/react";

// components/Divider.tsx
export const Divider = () => (
  <div className="w-full h-px bg-[#ebeef0]" />
);

// components/Header.tsx
// components/Header.tsx
export const Header = () => (
  <div className="w-[598px] h-[53px] relative">
    <div className="absolute left-[15px] top-[15px] text-[#0f1419] text-[19px] font-bold font-[&#39;SF Compact Display&#39;]">
      Home
    </div>
    <div className="absolute w-full bottom-0">
      <Divider />
    </div>
  </div>
);


// components/Avatar.tsx
interface AvatarProps {
  src: string;
  size?: number;
}

export const Avatar = ({ src, size = 48 }: AvatarProps) => (
  <div className={`w-[${size}px] h-[${size}px] rounded-full`}>
    <Image src={src} alt="Avatar" width={size} height={size} className="w-full h-full rounded-full " />
  </div>
);

// components/TweetInput.tsx
interface TweetInputProps {
  avatarSrc: string;
}

export const TweetInput = ({ avatarSrc }: TweetInputProps) => (
  <div className="flex gap-4 px-[15px] py-2.5">
    <Avatar src={avatarSrc} />
    <div className="flex-grow">
      <div className="text-[#5b7083] text-xl font-medium">What is happening?</div>
      <div className="flex gap-2 mt-4">
        {/* Icon buttons can be added here */}
        <div className="w-6 h-6">Icon1</div>
        <div className="w-6 h-6">Icon2</div>
        <div className="w-6 h-6">Icon3</div>
      </div>
    </div>
    <div className="ml-auto">
      <button className="px-4 py-2 bg-[#1da1f2] text-white rounded-full opacity-50">Tweet</button>
    </div>
  </div>
);

// components/Tweet.tsx
interface TweetProps {
  avatarSrc: string;
  name: string;
  username: string;
  time: string;
  content: string;
  imageUrl?: string;
}

export const Tweet = ({ avatarSrc, name, username, time, content, imageUrl }: TweetProps) => (
  <div className="flex gap-4 px-[15px] py-2.5">
    <Avatar src={avatarSrc} size={50} />
    <div className="flex-grow">
      <div className="flex gap-2 items-center">
        <span className="font-bold text-[#0f1419]">{name}</span>
        <span className="text-[#5b7083]">@{username}</span>
        <span className="text-[#5b7083]">· {time}</span>
      </div>
      <div className="text-[#0f1419] mt-1 w-[400px]">{content}</div>
      {imageUrl && (
        <div className="mt-4">
          <Image className="w-full h-[247px] object-cover rounded-2xl" src={imageUrl} alt="Tweet Image" width={598} height={247} />
        </div>
      )}
      {/* Action buttons/icons */}
      <div className="flex justify-between text-gray-500 items-center w-[320px] h-[24px] pt-6">
        <div className="flex gap-1 items-center ">
          <Icon icon={"iconamoon:comment-thin"} height="20" />
          <p className='text-gray-500 text-[14px]'>28</p>
        </div>
        <div className="flex gap-1 items-center">
          <Icon icon={"system-uicons:retweet"} height="20" />
          <p className='text-gray-500 text-[14px]'>5</p>
        </div>
        <Icon icon={"circum:heart"} height="23" />
        <Icon icon={"material-symbols-light:upload"} height="24" />
      </div>
    </div>
  </div>
);

// components/ActionIcons.tsx
export const ActionIcons = () => (
  <div className="flex gap-2">
    <div className="w-6 h-6">Icon1</div>
    <div className="w-6 h-6">Icon2</div>
    <div className="w-6 h-6">Icon3</div>
  </div>
);