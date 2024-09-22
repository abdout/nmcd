"use client";
import { useModal } from "@/components/atom/modal/context";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';

// Custom hook for managing body scroll (unchanged)
function useBodyScroll(isOpen: boolean) {
  // ... (keep the existing implementation)
}

interface Props {
  content: React.ReactNode;
  sm?: boolean;
}

function Modal({ content, sm = false }: Props) {
  const { modal, closeModal } = useModal();
  useBodyScroll(modal.open);

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: 'easeIn'
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <AnimatePresence>
      {modal.open && (
        <>
          <motion.div
            className="fixed inset-0 w-full h-screen bg-black bg-opacity-70"
            onClick={closeModal}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={backdropVariants}
          />
          <div className="fixed inset-0 w-full h-screen z-50 flex justify-center items-center">
            <motion.div 
              className={`relative z-50 bg-background overflow-auto ${
                sm 
                  ? 'm-4 p-8 max-w-2xl w-[24rem] h-[29rem] sm:text-sm' 
                  : 'w-full h-full p-4 sm:p-8'
              }`}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
            >
              {!sm && (
                <Button 
                  size='icon' 
                  variant='outline' 
                  className="rounded-full absolute top-4 right-4"
                  onClick={closeModal}
                >
                  <Icon icon='ic:twotone-close' width={25} />
                </Button>
              )}
              {content}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Modal;