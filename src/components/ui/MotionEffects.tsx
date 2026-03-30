'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// --- Cyber-Luxury Tokens ---
export const EASE = [0.22, 1, 0.36, 1] as const; // Quart Out - Sleek/Premium
export const DURATION_BASE = 0.4;
export const DURATION_FLUID = 0.7;

// --- Components ---

/**
 * TextScramble: A high-frequency text reveal effect.
 * Animates text from random characters to final value.
 */
export function TextScramble({ 
  text, 
  className = '', 
  delay = 0 
}: { 
  text: string; 
  className?: string; 
  delay?: number 
}) {
  const [displayText, setDisplayText] = useState('');
  const chars = '!<>-_\\/[]{}—=+*^?#________';
  
  useEffect(() => {
    let iteration = 0;
    let interval: ReturnType<typeof setInterval>;
    
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((char, index) => {
              if (index < iteration) return char;
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }
        
        iteration += 1 / 3;
      }, 30);
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay]);

  return <span className={className}>{displayText}</span>;
}

/**
 * SleekStagger: Optimized container for staggered children.
 */
export function SleekStagger({ 
  children, 
  className = '', 
  stagger = 0.08, 
  delay = 0.1 
}: { 
  children: ReactNode; 
  className?: string; 
  stagger?: number; 
  delay?: number 
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * SleekItem: Smooth entrance for staggered elements.
 */
export function SleekItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
        visible: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration: DURATION_BASE, ease: EASE },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * HolographicCard: Glassmorphism card with reactive light tilt.
 */
export function HolographicCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Soft springs for tilt
  const rotateX = useSpring(useTransform(mouseY, [-200, 200], [5, -5]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-5, 5]), { stiffness: 100, damping: 30 });

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave(_e: React.MouseEvent<HTMLElement>) {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={`relative group ${className}`}
    >
      {/* Dynamic Glow */}
      <motion.div
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            (latest) => {
              const [x, y] = latest as [number, number];
              return `radial-gradient(circle at ${50 + (x / 4)}% ${50 + (y / 4)}%, rgba(0, 242, 255, 0.15) 0%, transparent 70%)`;
            }
          ),
        }}
      />
      
      <div className="relative z-10 glass-card rounded-xl p-1 border-white/10 group-hover:border-primary-container/30 transition-colors duration-500">
        {children}
      </div>
    </motion.div>
  );
}

/**
 * AetherAura: Morphing mesh background for "Cyber-Luxury" mood.
 */
export function AetherAura() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#050505]">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-[20%] -left-[10%] w-[140%] h-[140%] bg-[radial-gradient(circle_at_30%_50%,_rgba(0,242,255,0.08)_0%,_transparent_50%),_radial-gradient(circle_at_70%_50%,_rgba(138,43,226,0.08)_0%,_transparent_50%)] filter blur-[80px]"
      />
    </div>
  );
}

/**
 * Legacy Components (for backward compatibility during migration)
 */
export function StaggerContainer({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <SleekStagger className={className}>{children}</SleekStagger>;
}

export function StaggerItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <SleekItem className={className}>{children}</SleekItem>;
}

export function HoverCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.02, transition: { type: 'spring', stiffness: 400, damping: 17 } }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
}
