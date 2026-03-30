'use client';

import React from 'react';
import Link from 'next/link';
import Hero from '@/components/home/Hero';
import ProcessTimeline from '@/components/home/ProcessTimeline';
import PageTransition from '@/components/ui/PageTransition';
import { SleekStagger, SleekItem, HolographicCard, TextScramble } from '@/components/ui/MotionEffects';
import { motion } from 'framer-motion';

const quickNodes = [
  {
    href: '/capabilities',
    icon: 'account_tree',
    title: 'Core Capabilities',
    desc: 'Architecture blueprints & technical matrix',
    accent: '#00F2FF',
  },
  {
    href: '/transmissions',
    icon: 'history_edu',
    title: 'Transmissions',
    desc: 'Chronological archive of milestones',
    accent: '#8A2BE2',
  },
  {
    href: '/terminal',
    icon: 'terminal',
    title: 'Terminal.logs',
    desc: 'Decrypted data fragments from the void',
    accent: '#00dbe7',
  },
  {
    href: '/network',
    icon: 'hub',
    title: 'Network Access',
    desc: 'Initialize a secure signal handshake',
    accent: '#00F2FF',
  },
];

const stats = [
  { label: 'Systems Built', value: '48+' },
  { label: 'Uptime Record', value: '99.99%' },
  { label: 'Avg. Latency', value: '0.04ms' },
  { label: 'Active Nodes', value: '12' },
];

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col flex-grow">
        <Hero />
        
        <main className="px-8 space-y-20 pb-32 flex-grow">

          {/* Stats Bar */}
          <SleekStagger className="grid grid-cols-2 md:grid-cols-4 gap-4" delay={0.6}>
            {stats.map((stat) => (
              <SleekItem key={stat.label}>
                <div className="glass-card p-6 rounded-xl text-center group hover:bg-white/[0.02] transition-colors duration-500">
                  <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.8 }}
                    className="text-3xl font-headline font-black text-primary-container mb-1"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-[10px] font-headline uppercase tracking-widest text-on-surface-variant/60 group-hover:text-on-surface-variant transition-colors">
                    {stat.label}
                  </div>
                </div>
              </SleekItem>
            ))}
          </SleekStagger>

          {/* Quick Navigation Nodes */}
          <section>
            <SleekStagger delay={0.8}>
              <SleekItem className="flex items-center gap-3 mb-12">
                <div className="w-1 h-6 bg-primary-container rounded-full"></div>
                <h2 className="font-headline text-xs tracking-[0.3em] uppercase text-on-surface-variant">
                  <TextScramble text="SYSTEM_NODES" delay={1.2} />
                </h2>
              </SleekItem>
            </SleekStagger>
            
            <SleekStagger className="grid grid-cols-1 md:grid-cols-2 gap-8" stagger={0.1}>
              {quickNodes.map((node) => (
                <SleekItem key={node.href}>
                  <HolographicCard>
                    <Link
                      href={node.href}
                      className="group p-8 rounded-xl transition-all duration-500 relative overflow-hidden block cursor-pointer"
                    >
                      <div className="flex items-start gap-8">
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_var(--accent-color)]"
                          style={{ 
                            backgroundColor: `${node.accent}10`, 
                            color: node.accent,
                            // @ts-ignore
                            '--accent-color': `${node.accent}40`
                          } as any}
                        >
                          <span className="material-symbols-outlined text-2xl" translate="no" aria-hidden="true">{node.icon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-headline text-xl font-bold text-on-surface uppercase tracking-tight mb-2 group-hover:text-primary-container transition-colors">
                            {node.title}
                          </h3>
                          <p className="text-sm text-on-surface-variant/70 leading-relaxed group-hover:text-on-surface-variant transition-colors">
                            {node.desc}
                          </p>
                        </div>
                        <motion.span 
                          whileHover={{ x: 5 }}
                          className="material-symbols-outlined text-on-surface-variant/30 group-hover:text-primary-container transition-colors flex-shrink-0 mt-2"
                          aria-hidden="true"
                        >
                          arrow_forward_ios
                        </motion.span>
                      </div>
                    </Link>
                  </HolographicCard>
                </SleekItem>
              ))}
            </SleekStagger>
          </section>

          {/* Featured Terminal Block */}
          <SleekStagger delay={0.2}>
            <SleekItem>
              <section className="glass-card rounded-xl overflow-hidden group">
              <div className="bg-[#1c1b1b] border-b border-outline/10 px-6 py-3 flex items-center gap-3 group-hover:bg-[#252424] transition-colors">
                <span className="w-2 h-2 rounded-full bg-error"></span>
                <span className="w-2 h-2 rounded-full bg-[#FFB800]"></span>
                <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                <span className="ml-4 font-headline text-[10px] tracking-widest text-on-surface-variant/40 uppercase">
                  system_monitor.sh — pid: 4096
                </span>
              </div>
              <div className="p-8 font-mono text-sm space-y-3 text-on-surface-variant/60 leading-relaxed bg-black/40">
                <div className="flex gap-3">
                  <span className="text-primary-container">ARCHITECT@VOID:~$</span>
                  <span className="text-on-surface">system --status</span>
                </div>
                <div className="pl-4 border-l border-white/5 space-y-1">
                  <p>Scanning all nodes...</p>
                  <p><span className="text-primary-container">[OK]</span> Frontend_Synthesis .................. <span className="text-on-surface">OPERATIONAL</span></p>
                  <p><span className="text-primary-container">[OK]</span> Backend_Logic ...................... <span className="text-on-surface">OPERATIONAL</span></p>
                  <p><span className="text-primary-container">[OK]</span> Neural_Interface ................... <span className="text-on-surface">OPERATIONAL</span></p>
                  <p><span className="text-[#FFB800]">[~~]</span> Spline_3D_Core ..................... <span className="text-[#FFB800]">STANDBY</span></p>
                </div>
                <div className="flex gap-3 pt-2">
                  <span className="text-primary-container">ARCHITECT@VOID:~$</span>
                  <motion.span 
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="w-2 h-4 bg-primary-container inline-block"
                  />
                </div>
              </div>
              </section>
            </SleekItem>
          </SleekStagger>

          {/* Process Timeline Section */}
          <ProcessTimeline />

          {/* CTA Section */}
          <section className="text-center pt-12 pb-24 relative">
            {/* Glow Decorative */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-container/5 filter blur-[100px] pointer-events-none"></div>
            
            <SleekStagger delay={0.2} className="relative z-10 flex flex-col items-center">
              <SleekItem>
                <div className="inline-block px-4 py-1 rounded-full border border-primary-container/20 bg-primary-container/10 mb-8">
                  <span className="font-headline text-[10px] tracking-[0.3em] uppercase text-primary-container">Secure_Channel</span>
                </div>
              </SleekItem>
              <SleekItem>
                <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-6 max-w-2xl text-on-surface">
                  Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-secondary-container">Initialize</span>?
                </h2>
              </SleekItem>
              <SleekItem>
                <p className="text-on-surface-variant/60 mb-10 max-w-md text-lg leading-relaxed">
                  Open a secure channel to discuss collaboration protocols for your next system architectural leap.
                </p>
              </SleekItem>
              <SleekItem>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/network"
                    className="group relative px-12 py-5 bg-primary-container text-[#050505] rounded-full font-headline font-black uppercase tracking-widest text-sm overflow-hidden"
                  >
                    <span className="relative z-10">INITIALIZE SIGNAL</span>
                    <motion.div 
                      className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                    />
                  </Link>
                </motion.div>
              </SleekItem>
            </SleekStagger>
          </section>

        </main>
      </div>
    </PageTransition>
  );
}
