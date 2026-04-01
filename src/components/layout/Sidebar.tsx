'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { EASE, DURATION_BASE, SleekStagger, SleekItem } from '@/components/ui/MotionEffects';

const navItems = [
  { href: '/', label: 'Home', icon: 'home' },
  { href: '/capabilities', label: 'Capabilities', icon: 'account_tree' },
  { href: '/transmissions', label: 'Transmissions', icon: 'history_edu' },
  { href: '/terminal', label: 'Terminal', icon: 'terminal' },
  { href: '/network', label: 'Network', icon: 'hub' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.aside 
      initial={false}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{ 
        width: isHovered ? 256 : 80,
      }}
      transition={{ duration: 0.5, ease: EASE }}
      className="fixed left-0 top-0 h-full z-[60] border-r border-white/10 bg-[#0E0E0E] flex flex-col py-8 overflow-hidden shadow-[20px_0_40px_rgba(0,0,0,0.5)]"
    >
      {/* Brand Header */}
      <div className="px-6 mb-12 flex items-center gap-4 flex-shrink-0">
        <motion.div 
          animate={{ rotate: isHovered ? 180 : 0 }}
          className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary-container to-secondary-container flex-shrink-0" 
        />
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="whitespace-nowrap"
            >
              <div className="font-headline font-black text-[#00F2FF] text-xs">ARCHITECT_OS</div>
              <div className="font-headline text-[8px] tracking-widest text-on-surface-variant uppercase">SYSTEM_STATUS: ACTIVE</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <nav className="flex-grow overflow-y-auto overflow-x-hidden scrollbar-none" aria-label="Main navigation">
        <ul className="space-y-2" role="list">
          <SleekStagger delay={0.2} stagger={0.05}>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href} className="relative group/nav overflow-hidden">
                  <SleekItem>
                    <Link
                      href={item.href}
                      aria-label={item.label}
                      aria-current={isActive ? 'page' : undefined}
                      className={`flex items-center px-6 py-4 transition-colors relative z-10 ${
                        isActive
                          ? 'text-[#00F2FF]'
                          : 'text-[#393939] hover:text-[#B9CACB] hover:bg-[#201F1F]'
                      }`}
                    >
                      <span className="material-symbols-outlined flex-shrink-0 relative z-20" translate="no" aria-hidden="true">
                        {item.icon}
                      </span>
                      
                      <AnimatePresence>
                        {isHovered && (
                          <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2 }}
                            className="font-headline text-xs tracking-widest uppercase whitespace-nowrap ml-6 flex-1"
                          >
                            {item.label}
                          </motion.span>
                        )}
                      </AnimatePresence>

                      {/* Active Indicator Background */}
                      {isActive && (
                        <motion.div
                          layoutId="sidebar-active"
                          className="absolute inset-0 bg-gradient-to-r from-[#00F2FF]/10 to-transparent border-l-4 border-[#00F2FF] z-0"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>
                  </SleekItem>
                </li>
              );
            })}
          </SleekStagger>
        </ul>
      </nav>

      {/* Footer / CTA */}
      <div className="px-4 mt-auto flex-shrink-0">
        <Link 
          href="/network" 
          aria-label="Initialize Signal — Contact" 
          className="w-full bg-primary-container/10 hover:bg-primary-container/20 border border-primary-container/20 py-3 rounded text-[#00F2FF] flex items-center justify-center group/btn transition-colors cursor-pointer overflow-hidden"
        >
          <motion.span 
            animate={{ x: isHovered ? 0 : 0 }}
            className="material-symbols-outlined flex-shrink-0"  aria-hidden="true"
            translate="no"
          >
            send
          </motion.span>
          <AnimatePresence mode="wait">
            {isHovered && (
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 'auto', opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="font-headline text-[10px] tracking-widest uppercase ml-2 whitespace-nowrap"
              >
                Initialize Signal
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
      </div>
    </motion.aside>
  );
}
