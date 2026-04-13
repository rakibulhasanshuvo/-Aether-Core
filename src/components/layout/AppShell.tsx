'use client';

import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { AetherAura } from '@/components/ui/MotionEffects';
import { motion } from 'framer-motion';

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen selection:bg-primary-container/30 selection:text-primary-container">
      {/* Dynamic Background */}
      <AetherAura />
      
      {/* Technical Grid Overlay */}
      <div className="tech-grid fixed inset-0 z-0 pointer-events-none opacity-40" />
      
      {/* Sidebar - Fixed Left */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex flex-col min-h-screen pl-20 overflow-x-hidden">
        {/* Navbar - Fixed Top (Left compensated in Navbar) */}
        <Navbar />
        
        {/* Page Content */}
        <motion.main 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-grow pt-24 px-8 pb-12 max-w-7xl mx-auto w-full relative z-10"
        >
          {children}
        </motion.main>
        
        <Footer />
      </div>
    </div>
  );
}
