'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { EASE, DURATION_FLUID } from './MotionEffects';

interface PageTransitionProps {
  children: ReactNode;
}

const variants = {
  hidden: { 
    opacity: 0, 
    y: 15,
    filter: 'blur(8px)',
    scale: 0.99 
  },
  enter: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    scale: 1,
    transition: {
      duration: DURATION_FLUID,
      ease: EASE as any,
      staggerChildren: 0.1,
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    filter: 'blur(4px)',
    scale: 0.99,
    transition: {
      duration: 0.3,
      ease: EASE as any
    }
  },
};

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      className="flex flex-col flex-grow w-full"
    >
      {children}
    </motion.div>
  );
}
