'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/ui/PageTransition';
import { SleekStagger, SleekItem, HolographicCard, TextScramble, EASE } from '@/components/ui/MotionEffects';

const logs = [
  {
    id: 1,
    title: 'Reconstructing Neural Architectures in Low-Light Environments',
    text: 'The initial transmission was garbled, lost in the static of the outer rim. We\'ve managed to stabilize the carrier signal. Preliminary analysis suggests that the ghost-circuits are self-healing...',
    subText: 'Memory consumption remains within expected parameters. We are seeing a 14% increase in recursive feedback loops during the isolation phase.',
    stamp: '2024.08.12',
    author: 'ARCHITECT_01',
    code: 'NEURAL_DYNAMICS',
    level: 'OMEGA',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB35gvrNU0gcGozbdGWCWS9TJGyY2yO41XqVNvcIbNs3vpXbPYSAdCl7BHT-Fd6QskMkxbXWDnNYZmbCxlrYEN8IOLrCWuHj_RFCKvUlfcLcPxLyTKCmv_whL_Ak2MSsjbNqSkfFGbiVgIpoJCXFCUONAgrQtvqx9kdUsR7WXmPWLh22Fv7KbLn_nRhSxkEk3v0RqAfHTHBSsWbED5A1mVDsatwWGwc-h1614o3ZIhV6UBXTgDIaGzfN64ePLUkXVygMUTDUMOsBbY'
  },
  {
    id: 2,
    title: 'The Physics of Liquid Logic: Cooling the Singularity',
    text: 'Traditional silicon reached its threshold years ago. We are now exploring the transition to sub-atomic fluidic gates. The pressure in the main chamber has exceeded 40,000 atmospheres.',
    subText: 'The fluid behaves like a non-Newtonian intelligence, adapting its viscosity to the flow of incoming data packets.',
    stamp: '2024.07.30',
    author: 'CORE_NODE',
    code: 'HARDWARE_SYSTOLE',
    level: 'ALPHA',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAP7FZMCFOvBg4jMaiEMSC6bCVWWlXb5azYCifSZsbXfyv8c2gc5w-cE_CKZzM1p-clp8blHW0i9h0ho8FQfCsIFuHeYxxAg1ILitXmOPA81Ej-w_lriYkAZUhIisOw4OCvvfGuP97FfWVKJiFQqAyIy4TKdqCHRLsUPS22cGI1eMQMmzyNJhLb1IIuEbHr0q22yYfHNEQ1rq_xGYlfBGrVpiAOq3S8La4bx57IDNxOi9l7BZMLc_9U_HWgAQfYaTtZbUK3xoY3pYc'
  },
  {
    id: 3,
    title: 'Protocol 404: The Vanishing Points of Decentralized Identity',
    text: 'Who owns a thought once it has been distributed across ten thousand nodes? We are witnessing the birth of the first truly ego-less consensus. No anchors. No central authority.',
    stamp: '2024.07.15',
    author: 'ARCHITECT_01',
    code: 'GLOBAL_MESH',
    level: 'LEVEL: I',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNldvgXKm5-oglznbF-VV6gXyzJWLZw9D3VY71vFYyzlyaucKr4FSzxmeXG4DD4ANePnZkmeGteGIOYUREuJ2ecTMH1kHp54LhblgBVMMihEjdSw_MgFrirauJk-6hqmbxs7HZC53yUNXnZZdH9cI16C7o5rSpBV9Zd7N6ocm93vo4bnKQq_bZ2JxscwSadWLrxzBs7Pwxvw7GfAZ5KWNat_WPiNpxKnnVsuOH_wbLZO19wFWtobTh8l8DF1SjvAxom3tdtFJ6sOo'
  }
];

import { useState } from 'react';

export default function TerminalPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <PageTransition>
      <div className="relative flex flex-col flex-grow w-full max-w-7xl mx-auto pt-20 pb-32 px-6 md:px-12">
        
        {/* Absolute fixed layer for the scanline styling */}
        <motion.div 
          animate={{ y: ['0%', '100%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none fixed inset-0 z-[100] h-[2px] w-full bg-primary-container/[0.08] shadow-[0_0_15px_rgba(0,242,255,0.2)]"
        />

        {/* Terminal Header Section */}
        <header className="mb-24">
          <SleekStagger delay={0.2}>
            <SleekItem className="flex items-center gap-4 mb-6">
              <motion.span 
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-3 h-3 rounded-full bg-error"
              />
              <span className="font-headline text-[10px] tracking-[0.3em] text-[#00dbe7] uppercase">SYSTEM_STATUS: SECURE_CHANNEL_ACTIVE</span>
            </SleekItem>
            <SleekItem>
              <h1 className="font-headline text-5xl md:text-8xl font-black tracking-tighter text-on-surface mb-8 uppercase">
                TERMINAL<span className="text-primary-container opacity-40">.</span><TextScramble text="LOGS" delay={0.8} />
              </h1>
            </SleekItem>
            <SleekItem>
              <p className="max-w-2xl text-on-surface-variant font-body text-lg leading-relaxed border-l-2 border-primary-container/20 pl-8 py-3 bg-white/[0.02] rounded-r-lg">
                Decrypted data fragments from the void. Accessing architectural blueprints, transmission history, and neural network updates. Proceed with caution.
              </p>
            </SleekItem>
          </SleekStagger>
        </header>

        {/* Search / Filter Command Line */}
        <SleekItem className="mb-24">
          <div className="group relative">
            <div className="flex items-center gap-6 bg-[#131313] p-5 rounded-2xl border border-white/5 focus-within:border-primary-container/30 focus-within:bg-[#0a0a0a] transition-all duration-500 shadow-2xl">
              <span className="font-mono text-primary-container font-black whitespace-nowrap text-sm tracking-tighter">ARCHITECT@VOID:~$</span>
              <input
                className="bg-transparent border-none focus:outline-none focus:ring-0 text-primary-container font-mono w-full placeholder:text-white/10 text-base"
                placeholder="grep --topic 'neural' ..."
                type="text"
                aria-label="Search terminal logs"
              />
              <span className="material-symbols-outlined text-white/20 group-focus-within:text-primary-container transition-colors" translate="no" aria-hidden="true">terminal</span>
            </div>
            {/* Absolute accent line */}
            <motion.div 
              layoutId="terminal-accent"
              className="absolute -bottom-[1px] left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-primary-container/30 to-transparent"
            />
          </div>
        </SleekItem>

        {/* Encrypted Logs Feed */}
        <SleekStagger className="space-y-40" stagger={0.2}>
          {logs.map((log) => (
            <SleekItem key={log.id}>
              <article className="relative grid md:grid-cols-12 gap-16 items-start group">
                {/* Meta / Image Node */}
                <div className="md:col-span-12 lg:col-span-5 sticky top-32">
                  <HolographicCard>
                    <div className="relative aspect-video rounded-xl overflow-hidden border border-white/5 bg-black">
                      <motion.img 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.8 }}
                        className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                        alt={log.title} 
                        src={log.image}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    </div>
                  </HolographicCard>
                  <div className="mt-8 font-headline text-[10px] text-on-surface-variant/40 flex gap-8 uppercase tracking-widest px-2">
                    <span className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary-container" /> STAMP: {log.stamp}
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-secondary-container" /> BY: {log.author}
                    </span>
                  </div>
                </div>
                
                {/* Content Node */}
                <div className="md:col-span-12 lg:col-span-7 space-y-8">
                  <div className="flex gap-3 flex-wrap">
                    <span className="px-4 py-1.5 bg-secondary-container/10 border border-secondary-container/20 text-[#dcb8ff] text-[9px] font-headline uppercase tracking-widest rounded-full">
                      CODE: {log.code}
                    </span>
                    <span className="px-4 py-1.5 bg-primary-container/10 border border-primary-container/20 text-primary-container text-[9px] font-headline uppercase tracking-widest rounded-full">
                      {log.level}
                    </span>
                  </div>
                  
                  <h2 className="font-headline text-4xl md:text-5xl text-on-surface font-bold tracking-tighter group-hover:text-primary-container transition-colors leading-[0.95] uppercase">
                    {log.title}
                  </h2>
                  
                  <div className="font-body text-on-surface-variant/70 leading-relaxed space-y-6 text-xl">
                    <p>{log.text}</p>
                    {log.subText && (
                      <p className="hidden md:block opacity-40 text-lg border-l border-white/10 pl-6 italic font-light">
                        {log.subText}
                      </p>
                    )}
                  </div>
                  
                  <div className="pt-8">
                    <motion.a 
                      whileHover={{ x: 10 }}
                      className="inline-flex items-center gap-4 text-primary-container font-headline text-xs tracking-[0.2em] uppercase group/link cursor-pointer" 
                      href="#"
                    >
                      <span className="relative">
                        [ Execute Deep Read ]
                        <motion.div 
                          className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary-container origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform" 
                        />
                      </span>
                      <span className="material-symbols-outlined transition-transform text-lg" translate="no" aria-hidden="true">arrow_forward_ios</span>
                    </motion.a>
                  </div>
                </div>
              </article>
            </SleekItem>
          ))}
        </SleekStagger>

        {/* Terminal Command Footer */}
        <SleekItem>
          <section className="mt-48 relative">
            <div className="absolute inset-0 bg-primary-container/5 filter blur-[100px] pointer-events-none" />
            <div className="relative bg-[#0a0a0a] p-10 rounded-3xl font-mono text-sm border border-white/5 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-container/20 to-transparent" />
              
              <div className="mb-10 text-on-surface-variant/30 flex justify-between items-center text-[10px] tracking-widest uppercase">
                <span>TERMINAL_SESSION_ACTIVE // PID: 9284</span>
                <span className="text-primary-container/40">100% SECURE_TRANSCEIVER</span>
              </div>
              
              <div className="space-y-3 mb-16 opacity-60">
                <p className="flex gap-3"><span className="text-primary-container">ARCHITECT@VOID:~$</span> cd ./archives/blueprints</p>
                <p className="flex gap-3"><span className="text-primary-container">ARCHITECT@VOID:~$</span> list --all</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 text-on-surface/80 pl-4 border-l border-white/5">
                  {[
                    'neural_mesh_v4.pdf', 
                    'core_schematics_01.dwg', 
                    'transmission_key.env', 
                    'personnel_logs.txt'
                  ].map(file => (
                    <motion.div 
                      key={file}
                      whileHover={{ x: 5, color: '#00F2FF' }}
                      className="cursor-pointer transition-colors"
                    >
                      [ {file} ]
                    </motion.div>
                  ))}
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-primary-container">ARCHITECT@VOID:~$</span> 
                  <motion.div 
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="w-2 h-4 bg-primary-container"
                  />
                </div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-16 items-end">
                <div className="space-y-6">
                  <h3 className="text-3xl font-black font-headline uppercase tracking-tighter text-on-surface">
                    Initialize Signal
                  </h3>
                  <p className="text-on-surface-variant/60 font-body text-base max-w-sm">
                    Subscribe to encrypted updates directly to your neural interface for real-time architectural shifts.
                  </p>
                  <div className="flex gap-3 group/input">
                    <input
                      className="bg-[#131313] border border-white/5 focus:border-primary-container/30 focus:outline-none px-6 py-4 text-on-surface font-mono rounded-xl w-full text-sm transition-all disabled:opacity-50"
                      placeholder="neural-id@domain.net"
                      type="email"
                      aria-label="Email address for updates"
                      disabled={isSubmitting}
                    />
                    <motion.button 
                      whileHover={!isSubmitting ? { scale: 1.05 } : undefined}
                      whileTap={!isSubmitting ? { scale: 0.95 } : undefined}
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className={`bg-primary-container text-[#002022] px-10 py-4 rounded-xl font-bold uppercase font-headline text-[10px] tracking-widest whitespace-nowrap shadow-[0_0_20px_rgba(0,242,255,0.2)] ${isSubmitting ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'}`}
                    >
                      {isSubmitting ? 'UPLOADING...' : 'Transmit'}
                    </motion.button>
                  </div>
                </div>
                <div className="hidden md:block text-right space-y-1 font-mono text-[9px] text-on-surface-variant/20 tracking-widest uppercase">
                  <p>LATENCY: 12.0004ms</p>
                  <p>NODE_CLUSTER: EU-WEST-ARCH-1</p>
                  <p>ENCRYPTION: VOID-QUANTUM-XLL</p>
                </div>
              </div>
            </div>
          </section>
        </SleekItem>
      </div>
    </PageTransition>
  );
}
