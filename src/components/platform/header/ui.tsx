"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Squash as Hamburger } from 'hamburger-react';
import HamburgerMenu from "@/components/atom/hamburger/hamburger";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { hamburger, header } from "./constant";
import Toggle from "@/components/theme/toggle";
import Link from "next/link";
import { UserButton } from "@/components/auth/user-button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="h-20 flex justify-center items-center"
      dir="ltr"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <ul className="hidden md:flex space-x-7">
        {header.map((link) => (
          <li
            key={link.key}
            className={
              link.href === '/' ? (pathname === '/' ? 'hover:opacity-100' : 'opacity-50 hover:opacity-100') : (pathname.startsWith(link.href) ? 'hover:opacity-100' : 'opacity-50 hover:opacity-100')
            }
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={link.href} className="text-sm group relative flex justify-center">
                    <Icon icon={link.icon} width={33} className="flex-shrink-0" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  {link.label}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        ))}
        <li className="opacity-50 hover:opacity-100">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="text-lg relative flex justify-center pt-1">
                  <Toggle />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                ثيم
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
        <li className="opacity-50 hover:opacity-100 pt-[4.5px]">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <UserButton />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                المستخدم
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
        <li className="opacity-50 hover:opacity-100 z-50">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="text-lg relative flex justify-center -ml-2 -mt-[6.5px]">
                  <Hamburger size={20} distance="lg" toggled={open} toggle={setOpen} />
                </div>
              </TooltipTrigger>
              <TooltipContent className="-mt-2">
                قائمة
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
      </ul>
      <ul className="md:hidden flex space-x-8">
        {header.filter((link, index) => [0, 4, 5].includes(index)).map((link) => (
          <li
            key={link.key}
            className={
              link.href === '/' ? (pathname === '/' ? 'hover:opacity-100' : 'opacity-50 hover:opacity-100') : (pathname.startsWith(link.href) ? 'hover:opacity-100' : 'opacity-50 hover:opacity-100')
            }
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={link.href} className="text-sm group relative flex justify-center">
                    <Icon icon={link.icon} width={30} className="flex-shrink-0" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  {link.label}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        ))}
        <li className="opacity-50 hover:opacity-100 z-50">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="text-lg relative flex justify-center -ml-2 -mt-[7px]">
                  <div className="cursor-pointer" onClick={() => setOpen(!open)}>
                    <Hamburger size={20} toggled={open} toggle={setOpen} />
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                قائمة
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
      </ul>
      <HamburgerMenu open={open} setOpen={setOpen} routes={hamburger}/>
    </motion.div>
  );
};

export default Header;