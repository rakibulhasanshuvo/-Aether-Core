'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/ui/PageTransition';
import { SleekStagger, SleekItem, HolographicCard, TextScramble } from '@/components/ui/MotionEffects';

export default function NetworkPage() {
  return (
    <PageTransition>
      <div className="min-h-screen relative pt-20 pb-24 px-8 w-full max-w-7xl mx-auto">
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Identity & Nodes */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-16">
            <SleekStagger delay={0.2}>
              <SleekItem className="space-y-6">
                <span className="font-headline text-[10px] tracking-[0.3em] uppercase text-primary-container mb-4 block opacity-60">Destination_Node</span>
                <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tight text-on-surface leading-[0.85] uppercase">
                  NETWORK<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-secondary-container">
                    <TextScramble text="ACCESS" delay={0.6} />
                  </span>
                </h1>
                <p className="mt-8 text-on-surface-variant/70 font-body text-lg leading-relaxed max-w-md">
                  Establish a secure handshake with the core. Encrypted transmissions are processed through our primary node for prioritized verification.
                </p>
              </SleekItem>

              {/* System Metrics Panel */}
              <SleekItem>
                <div className="glass-card bg-[#131313]/60 p-8 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-container/20 to-transparent" />
                  
                  <div className="flex justify-between items-end mb-10">
                    <div>
                      <p className="font-headline text-[10px] tracking-widest text-on-surface-variant/40 uppercase mb-3">Signal_Strength</p>
                      <div className="flex gap-1.5 items-end h-6">
                        {[0.4, 0.6, 0.8, 0.3].map((h, i) => (
                          <motion.div 
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h * 100}%` }}
                            transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }}
                            className={`w-2 rounded-t-sm ${i < 3 ? 'bg-primary-container shadow-[0_0_10px_rgba(0,242,255,0.3)]' : 'bg-primary-container/20'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-headline text-[10px] tracking-widest text-on-surface-variant/40 uppercase mb-2">Latency</p>
                      <p className="font-headline text-2xl font-black text-primary-container tabular-nums">14<span className="text-sm ml-1 font-light opacity-60">ms</span></p>
                    </div>
                  </div>
                  
                  <div className="space-y-5">
                    <div className="flex justify-between text-[10px] font-headline tracking-widest uppercase">
                      <span className="text-on-surface-variant/40">Protocol</span>
                      <span className="text-on-surface/80">WSS_SECURE_V4</span>
                    </div>
                    <div className="h-[1px] bg-white/5 w-full"></div>
                    <div className="flex justify-between text-[10px] font-headline tracking-widest uppercase">
                      <span className="text-on-surface-variant/40">PG-KEY_ID</span>
                      <span className="text-on-surface/80 font-mono tracking-tighter">0x882A...F01E</span>
                    </div>
                  </div>
                </div>
              </SleekItem>

              {/* Social Nodes Grid */}
              <SleekItem>
                <p className="font-headline text-[10px] tracking-widest text-on-surface-variant/40 uppercase mb-8 ml-1">Social_Connectivity_Nodes</p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'X_SIGNAL', icon: 'alternate_email', color: 'primary-container' },
                    { label: 'GIT_NODE', icon: 'terminal', color: 'secondary' },
                    { label: 'LINKED_NET', icon: 'work', color: 'primary-container' },
                    { label: 'MEDIA_FLOW', icon: 'play_circle', color: 'secondary' },
                  ].map((node) => (
                    <HolographicCard key={node.label}>
                      <a className="group flex items-center gap-4 p-5 rounded-xl transition-all cursor-pointer h-full" href="#">
                        <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-white/[0.03] text-${node.color} group-hover:bg-${node.color} group-hover:text-black transition-all duration-500 shadow-inner`}>
                          <span className="material-symbols-outlined text-2xl" translate="no">{node.icon}</span>
                        </div>
                        <span className="font-headline text-[10px] tracking-widest uppercase text-on-surface-variant group-hover:text-on-surface transition-colors">
                          {node.label}
                        </span>
                      </a>
                    </HolographicCard>
                  ))}
                </div>
              </SleekItem>
            </SleekStagger>
          </div>

          {/* Right Column: Central Terminal Form */}
          <div className="lg:col-span-12 xl:col-span-7">
            <SleekItem className="h-full">
              <div className="glass-card bg-[#0a0a0a]/60 p-10 md:p-16 rounded-3xl relative overflow-hidden shadow-2xl border border-white/5 h-full">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-container/30 to-transparent"></div>
                
                <div className="flex justify-between items-start mb-16">
                  <div>
                    <h2 className="font-headline text-3xl font-bold uppercase tracking-tight text-white mb-3">Initialize_Signal</h2>
                    <p className="font-headline text-[10px] tracking-widest text-on-surface-variant/40 uppercase">Required fields for verification</p>
                  </div>
                  <div className="hidden md:block px-4 py-2 bg-white/[0.03] rounded-lg text-[10px] font-headline tracking-widest text-primary-container border border-primary-container/20 uppercase">
                     Encrypted_Channel_01
                  </div>
                </div>

                <form className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="relative group/field">
                      <label className="absolute -top-7 left-0 font-headline text-[10px] tracking-[0.2em] uppercase text-on-surface-variant/40 group-focus-within/field:text-primary-container transition-colors" htmlFor="identity-string">Identity_String</label>
                      <input
                        id="identity-string"
                        className="w-full bg-transparent border-b border-white/10 py-4 font-headline text-on-surface placeholder:text-on-surface-variant/20 focus:outline-none focus:border-primary-container transition-all text-lg"
                        placeholder="SUBJECT_NAME"
                        type="text"
                      />
                      <motion.div 
                        initial={false}
                        whileInView={{ scaleX: 0 }}
                        className="absolute bottom-0 left-0 w-full h-[1px] bg-primary-container origin-left group-focus-within/field:scale-x-100 transition-transform duration-500"
                      />
                    </div>
                    <div className="relative group/field">
                      <label className="absolute -top-7 left-0 font-headline text-[10px] tracking-[0.2em] uppercase text-on-surface-variant/40 group-focus-within/field:text-primary-container transition-colors" htmlFor="return-route">Return_Route</label>
                      <input
                        id="return-route"
                        className="w-full bg-transparent border-b border-white/10 py-4 font-headline text-on-surface placeholder:text-on-surface-variant/20 focus:outline-none focus:border-primary-container transition-all text-lg"
                        placeholder="EMAIL_ADDR"
                        type="email"
                      />
                    </div>
                  </div>

                  <div className="relative group/field">
                    <label className="absolute -top-7 left-0 font-headline text-[10px] tracking-[0.2em] uppercase text-on-surface-variant/40 group-focus-within/field:text-primary-container transition-colors" htmlFor="transmission-objective">Transmission_Objective</label>
                    <select
                      id="transmission-objective"
                      className="w-full bg-transparent border-b border-white/10 py-4 font-headline text-on-surface focus:outline-none focus:border-primary-container transition-all appearance-none cursor-pointer text-lg"
                    >
                      <option className="bg-[#131313]">SYSTEM_INQUIRY</option>
                      <option className="bg-[#131313]">COLLABORATION_REQUEST</option>
                      <option className="bg-[#131313]">DATA_EXCHANGE</option>
                      <option className="bg-[#131313]">GENERAL_SIGNAL</option>
                    </select>
                    <div className="absolute right-0 bottom-5 pointer-events-none text-primary-container/40 group-hover/field:text-primary-container transition-colors">
                      <span className="material-symbols-outlined" translate="no">expand_more</span>
                    </div>
                  </div>

                  <div className="relative pt-6 group/field">
                    <label className="absolute -top-2 left-0 font-headline text-[10px] tracking-[0.2em] uppercase text-on-surface-variant/40 group-focus-within/field:text-primary-container transition-colors" htmlFor="signal-payload">Signal_Payload</label>
                    <textarea
                      id="signal-payload"
                      className="w-full bg-white/[0.02] border border-white/5 p-8 font-headline text-on-surface placeholder:text-on-surface-variant/20 focus:outline-none focus:border-primary-container/30 transition-all rounded-2xl resize-none text-lg leading-relaxed"
                      placeholder="TYPE_MESSAGE_HERE..."
                      rows={6}
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-4 py-4 group/check cursor-pointer">
                    <div className="relative flex items-center">
                      <input 
                        className="peer opacity-0 absolute inset-0 cursor-pointer w-6 h-6" 
                        id="verification" 
                        type="checkbox"
                      />
                      <div className="w-6 h-6 border-2 border-white/10 rounded-md peer-checked:bg-primary-container peer-checked:border-primary-container transition-all flex items-center justify-center">
                        <motion.span 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="material-symbols-outlined text-[#002022] text-sm font-bold" 
                          translate="no"
                        >
                          check
                        </motion.span>
                      </div>
                    </div>
                    <label className="font-headline text-[10px] tracking-widest text-on-surface-variant/60 uppercase cursor-pointer group-hover/check:text-on-surface transition-colors" htmlFor="verification">
                      I verify this signal follows architectural protocol 4-B
                    </label>
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full group relative overflow-hidden p-[1px] rounded-2xl transition-all shadow-[0_0_30px_rgba(0,0,0,0.5)] cursor-pointer" 
                    type="button"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-secondary-container to-primary-container bg-[length:200%_auto] animate-gradient-x"></div>
                    <div className="relative bg-[#0a0a0a] py-8 flex justify-center items-center gap-6 rounded-[0.95rem] group-hover:bg-transparent transition-colors duration-500">
                      <span className="font-headline font-black text-base tracking-[0.4em] uppercase text-primary-container group-hover:text-[#002022] transition-colors">
                        Broadcast_Signal
                      </span>
                      <span className="material-symbols-outlined text-primary-container group-hover:text-[#002022] text-xl" translate="no">send</span>
                    </div>
                  </motion.button>
                </form>

                {/* Form Footer Stats */}
                <div className="mt-16 flex flex-wrap gap-8 justify-between border-t border-white/5 pt-10">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      animate={{ opacity: [1, 0.4, 1] }} 
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_rgba(0,242,255,0.8)]"
                    />
                    <span className="font-headline text-[9px] tracking-[0.2em] text-on-surface-variant/40 uppercase">Node_Status: <span className="text-secondary opacity-60">Handshaking</span></span>
                  </div>
                  <div className="font-headline text-[9px] tracking-[0.2em] text-on-surface-variant/40 uppercase">
                    Auth_Code: <span className="text-on-surface/60 font-mono">#ARCH_7701_VOID</span>
                  </div>
                </div>
              </div>
            </SleekItem>
          </div>
        </div>

        {/* System Scan Visual Elements */}
        <SleekItem className="mt-40 opacity-60 pb-32">
          <div className="flex justify-between items-center mb-6 font-headline text-[10px] tracking-[0.4em] text-on-surface-variant/40 uppercase px-4">
            <span>Core_Buffer_Stream</span>
            <span>Active_Encryption_Layers: 12</span>
          </div>
          <div className="h-16 w-full glass-card overflow-hidden flex items-center px-8 gap-8 rounded-2xl bg-white/[0.01] border-white/5">
            <div className="h-2 w-48 bg-white/5 rounded-full relative overflow-hidden">
              <motion.div 
                animate={{ left: ['-100%', '200%'] } as any}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-y-0 w-1/3 bg-primary-container/40"
              />
            </div>
            <div className="flex-1 font-mono text-[10px] text-primary-container/40 overflow-hidden whitespace-nowrap">
                SYSTEM_LOG: [04:12:01] HANDSHAKE_ACCEPTED // BUFFERING_PACKETS_FROM_NODE_ALPHA // NO_THREATS_DETECTED // ARCHITECT_CORE_IDLE
            </div>
            <div className="flex gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-on-surface-variant/20"></div>
              <motion.div 
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                className="w-1.5 h-1.5 rounded-full bg-secondary-container/40" 
              />
              <motion.div 
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-primary-container" 
              />
            </div>
          </div>
        </SleekItem>
      </div>
    </PageTransition>
  );
}
