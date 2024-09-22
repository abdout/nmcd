"use client";
import React from 'react';
import { Icon } from "@iconify/react";
import { useMediaQuery } from'react-responsive';

type TitleProps = {
    icon: string;
    placeholder: string;
    big?: boolean; // Optional prop
};



const Title = ({ icon, placeholder }: TitleProps) => {
  const isSmScreen = useMediaQuery({ query: '(min-width: 640px)' });
  const isMdScreen = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <div className="flex gap-1 sm:gap-2 items-center">
      <Icon
        icon={icon}
        width={isMdScreen? 35 : isSmScreen? 32 : 28}
      />
      <h4 className="sm:text-lg md:text-2xl">
        {placeholder}
      </h4>
    </div>
  );
};

export default Title;
