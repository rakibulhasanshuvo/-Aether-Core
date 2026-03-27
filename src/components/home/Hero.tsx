'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SleekStagger, SleekItem, TextScramble, EASE, DURATION_FLUID } from '@/components/ui/MotionEffects';

export default function Hero() {
  return (
    <header className="pt-20 pb-12 px-8">
      <SleekStagger delay={0.4} stagger={0.1}>
        <div className="flex flex-col gap-6">
          {/* Status Badge */}
          <SleekItem>
            <div className="flex items-center gap-4">
              <motion.span 
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-2 rounded-full bg-primary-container"
              />
              <span className="font-headline text-primary-container tracking-[0.3em] text-[10px] uppercase">
                Neural_Framework // Live_Session
              </span>
            </div>
          </SleekItem>

          {/* Main Title */}
          <SleekItem>
            <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-on-surface leading-[0.85] overflow-hidden">
              <div className="opacity-40">THE</div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#00F0FF] to-[#8A2BE2] filter drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                <TextScramble text="ARCHITECT" delay={0.8} />
              </div>
            </h1>
          </SleekItem>

          {/* Subtext */}
          <SleekItem>
            <p className="max-w-xl text-on-surface-variant text-lg mt-4 leading-relaxed font-body">
              Engineering the intersection of code, design, and dimensional computing. 
              Building systems that transcend the boundary between logic and experience.
            </p>
          </SleekItem>

          {/* Meta Info / Badges */}
          <SleekItem>
            <div className="flex flex-wrap gap-4 mt-6">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-5 py-2 rounded-full border border-primary-container/20 bg-primary-container/5 backdrop-blur-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
                <span className="font-headline text-[10px] tracking-widest uppercase text-primary-container">Available_For_Contracts</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-5 py-2 rounded-full border border-outline/20 bg-surface-container/30 backdrop-blur-sm"
              >
                <span className="font-headline text-[10px] tracking-widest uppercase text-on-surface-variant">Based: Digital_Void</span>
              </motion.div>
            </div>
          </SleekItem>
        </div>
      </SleekStagger>
    </header>
  );
}
