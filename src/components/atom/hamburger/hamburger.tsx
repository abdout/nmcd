"use client";
import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import hamburger from "./constant";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { UserButton } from "@/components/auth/user-button";
import Toggle from "@/components/theme/toggle";

interface HamburgerMenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ open, setOpen }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside on md screens
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    // Only add the event listener on md screens and above
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }
    };

    handleResize(); // Check the initial window size
    window.addEventListener("resize", handleResize); // Add resize listener

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [open, setOpen]);

  return (
    <div className="" dir="rtl">
      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            // Full screen width on small screens and specific width for larger screens
            className="fixed inset-0 md:left-[750px] right-0 top-0 bottom-0 shadow-4xl bg-[#FCFCFC] dark:bg-gray-950 dark:text-[#fcfcfc] z-40 w-screen md:w-auto h-screen pt-20"
          >
            {/* UserButton and Toggle rendered at the top, in a row */}
            <div className="flex gap-4 items-center px-10 mb-10 opacity-70 hover:opacity-100 md:hidden">
              <UserButton />
              <div className="mt-2">
                <Toggle />
              </div>
            </div>

            {/* Render items in two columns on small screens */}
            <ul className="grid gap-2 px-8 grid-cols-2 md:grid-cols-1">
              {hamburger.map((route, idx) => {
                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={route.title}
                    className="w-full p-[0.08rem]"
                  >
                    <Link
                      onClick={() => setOpen((prev) => !prev)}
                      className="flex items-center w-full gap-4 p-2"
                      href={route.path}
                    >
                      {route.icon && (
                        <Icon icon={route.icon} width={25} className="flex-shrink-0" />
                      )}
                      <span className="flex gap-1 text-lg">{route.title}</span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
