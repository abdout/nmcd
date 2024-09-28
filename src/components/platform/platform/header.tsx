'use client';
import React from 'react';
import { Icon } from "@iconify/react"; // Import the Iconify library

const ProfileHeader = () => {
  return (
    <div>
      <div className=' h-[138px] bg-[#1F1F1F] text-[#DEDEDE] flex items-center justify-start px-6'>
        <div className="flex items-center w-[17.5rem] justify-between ">
          <Icon icon="iconamoon:arrow-right-2-thin" height="28" /> {/* Add your preferred icon */}
          <span className='text-[20px] font-bold '>زول هاكس</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
