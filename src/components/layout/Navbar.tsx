'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { EASE, DURATION_FLUID, TextScramble } from '@/components/ui/MotionEffects';

const navLinks = [
  { href: '/capabilities', label: 'Capabilities' },
  { href: '/transmissions', label: 'Transmissions' },
  { href: '/terminal', label: 'Terminal' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: DURATION_FLUID, ease: EASE }}
      className="fixed top-0 left-20 right-0 z-50 overflow-hidden"
    >
      {/* Gradient fade background for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E0E] via-[#0E0E0E]/80 to-transparent pointer-events-none"></div>

      <div className="relative flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        {/* Left: Brand + System Status */}
        <div className="flex items-center gap-6">
          <Link href="/" className="group flex items-center gap-3">
            <motion.div 
              animate={{ opacity: [1, 0.4, 1] }} 
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-primary-container"
            />
            <span className="font-headline text-lg font-bold tracking-[-0.04em] text-on-surface group-hover:text-primary-container transition-colors">
              <TextScramble text="THE ARCHITECT" />
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-2 pl-6 border-l border-white/10">
            <span className="font-headline text-[8px] tracking-[0.2em] uppercase text-on-surface-variant/40">SYS_V.04</span>
            <span className="w-1 h-1 rounded-full bg-primary-container/40"></span>
            <span className="font-headline text-[8px] tracking-[0.2em] uppercase text-primary-container/50">ONLINE</span>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden lg:flex items-center">
          <div className="flex items-center gap-1 p-1 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-xl relative">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-5 py-2 rounded-full font-headline text-[10px] tracking-[0.15em] uppercase transition-colors relative z-10 ${
                    isActive
                      ? 'text-primary-container'
                      : 'text-on-surface-variant/50 hover:text-on-surface-variant'
                  }`}
                >
                  <span className="relative z-20">{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-primary-container/15 rounded-full border border-primary-container/20 shadow-[0_0_12px_rgba(0,242,255,0.15)] z-0"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right: CTA */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            href="/network"
            className="group relative overflow-hidden px-8 py-2.5 rounded-full font-headline uppercase text-[10px] tracking-[0.2em] font-bold transition-all duration-300 block"
          >
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-full p-[1px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-container via-secondary-container to-primary-container"></div>
              <div className="absolute inset-[1px] rounded-full bg-[#0E0E0E] group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
            <span className="relative z-10 text-primary-container group-hover:text-[#002022] transition-colors duration-300">
              Network Access
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-20 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"></div>
    </motion.nav>
  );
}
