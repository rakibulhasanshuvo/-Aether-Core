'use client';

import React from 'react';
import PageTransition from '@/components/ui/PageTransition';
import { SleekStagger, SleekItem, HolographicCard, TextScramble } from '@/components/ui/MotionEffects';
import { motion } from 'framer-motion';

export default function CapabilitiesPage() {
  return (
    <PageTransition>
      <div className="flex flex-col flex-grow w-full max-w-6xl mx-auto pt-20 pb-32 px-8">
        {/* Hero / Title Section */}
        <header className="pb-20">
          <SleekStagger delay={0.2}>
            <SleekItem className="flex flex-col gap-4">
              <span className="font-headline text-primary-container tracking-[0.2em] text-[10px] uppercase opacity-80">
                System_Initialization // V.04
              </span>
              <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter text-on-surface leading-none uppercase">
                CORE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-secondary-container">
                  <TextScramble text="CAPABILITIES" delay={0.5} />
                </span>
              </h1>
              <p className="max-w-2xl text-on-surface-variant text-lg mt-6 leading-relaxed font-body">
                Architectural blueprints for high-frequency digital experiences. We bridge the void between raw logic and ethereal aesthetics through optimized system synthesis.
              </p>
            </SleekItem>
          </SleekStagger>
        </header>

        <main className="space-y-32">
          {/* Architectural Diagram / Node Visual */}
          <section className="relative h-[600px] w-full glass-card rounded-2xl overflow-hidden group border border-white/5">
            <div className="absolute inset-0 z-0 opacity-40">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent"></div>
              <motion.img 
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.4 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full h-full object-cover mix-blend-overlay" 
                alt="abstract architectural technical nodes" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtHoGzs0GNldkMMo5Wu4fMZLNwUyOpLgXat-h0yGsAZBe-c4dpuadg2rE6sg6WwzjoOCdechm4OKz5zaQsAVnagChteVKGeROdBLM31dlT6lhkKZavjdXyQajdNFteCKdpOZJB5ckr33RiVYw9INtRAKGY4idcWqSUWqW6ddCFZrgoMQb0ORCv9jBrHB-IqgY71ZXgSkGxNo88gNHoEXW4YmKu2LUe-kXd1vB-h5jRgRcub9mVFlevBkCXKqSBuPJmcgEXIrBq31E"
              />
            </div>
            
            <div className="absolute inset-0 z-10 p-12 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="glass-card p-4 rounded-lg border-primary-container/20 backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                    <span className="font-headline text-xs tracking-widest text-primary-container uppercase">System Node: Pulse_Core</span>
                  </div>
                  <div className="font-mono text-[10px] text-on-surface-variant/60 leading-tight">
                    UPTIME: 99.999%<br/>
                    LATENCY: 0.04ms<br/>
                    STATUS: <span className="text-primary-container">OPTIMIZED</span>
                  </div>
                </motion.div>
                <div className="text-right">
                  <span className="font-headline text-5xl md:text-7xl font-black text-white/[0.03] tracking-tighter uppercase select-none">Infrastructure</span>
                </div>
              </div>
              
              <SleekStagger className="grid grid-cols-1 md:grid-cols-3 gap-8" delay={0.8}>
                <SleekItem>
                  <div className="p-6 border-l border-primary-container/30 bg-[#0E0E0E]/40 backdrop-blur-md group/stat cursor-pointer hover:bg-primary-container/5 transition-all duration-500">
                    <h3 className="font-headline text-xl font-bold text-white mb-2 uppercase tracking-tight group-hover:text-primary-container transition-colors">React Synthesis</h3>
                    <p className="text-sm text-on-surface-variant/70 leading-relaxed">Reactive component ecosystems built for extreme scale and performance fluid dynamics.</p>
                  </div>
                </SleekItem>
                <SleekItem>
                  <div className="p-6 border-l border-secondary/30 bg-[#0E0E0E]/40 backdrop-blur-md group/stat cursor-pointer hover:bg-secondary/5 transition-all duration-500">
                    <h3 className="font-headline text-xl font-bold text-white mb-2 uppercase tracking-tight group-hover:text-secondary transition-colors">Three.js Voids</h3>
                    <p className="text-sm text-on-surface-variant/70 leading-relaxed">Immersive 3D environments rendered in real-time within the browser&apos;s spatial fabric.</p>
                  </div>
                </SleekItem>
                <SleekItem>
                  <div className="p-6 border-l border-[#00dbe7]/30 bg-[#0E0E0E]/40 backdrop-blur-md group/stat cursor-pointer hover:bg-[#00dbe7]/5 transition-all duration-500">
                    <h3 className="font-headline text-xl font-bold text-white mb-2 uppercase tracking-tight group-hover:text-[#00dbe7] transition-colors">Rust Core Logic</h3>
                    <p className="text-sm text-on-surface-variant/70 leading-relaxed">Memory-safe, high-speed computation pipelines for critical system operations.</p>
                  </div>
                </SleekItem>
              </SleekStagger>
            </div>
          </section>

          {/* Bento Grid: Services & Tech Stack */}
          <SleekStagger className="grid grid-cols-1 md:grid-cols-12 gap-6" stagger={0.1}>
            <SleekItem className="md:col-span-8">
              <HolographicCard className="h-full">
                <div className="p-12 flex flex-col justify-between min-h-[400px] group cursor-pointer h-full">
                  <div>
                    <span className="material-symbols-outlined text-5xl text-primary-container mb-8" translate="no">hub</span>
                    <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tighter group-hover:text-primary-container transition-colors">
                      Distributed Architecture
                    </h2>
                    <p className="text-on-surface-variant/80 text-lg max-w-xl leading-relaxed">
                      We engineer decentralized systems that remain resilient under peak loads. Our architecture patterns prioritize modularity, allowing components to evolve independently while maintaining global system integrity.
                    </p>
                  </div>
                  <div className="flex gap-4 mt-12 flex-wrap">
                    {['Edge Computing', 'Micro-Frontends', 'Serverless', 'p2p_sync'].map(tag => (
                      <span key={tag} className="px-5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[10px] font-headline uppercase tracking-widest text-[#B9CACB]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </HolographicCard>
            </SleekItem>

            <SleekItem className="md:col-span-4">
              <HolographicCard className="h-full">
                <div className="p-8 group cursor-pointer h-full flex flex-col justify-center">
                  <span className="material-symbols-outlined text-4xl text-secondary mb-8" translate="no">security</span>
                  <h3 className="font-headline text-3xl font-bold text-white mb-6 uppercase tracking-tight group-hover:text-secondary transition-colors">
                    Encryption Layers
                  </h3>
                  <p className="text-sm text-on-surface-variant/70 leading-relaxed mb-8">
                    Security is baked into the fundamental DNA of our transmissions. End-to-end protocols ensure data integrity across all nodes.
                  </p>
                  <div className="relative h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '88%' }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                      className="absolute h-full bg-secondary shadow-[0_0_15px_rgba(138,43,226,0.5)]"
                    />
                  </div>
                  <div className="flex justify-between mt-3 font-headline text-[10px] text-secondary tracking-widest uppercase">
                    <span>Integrity_Check</span>
                    <span>88% Verified</span>
                  </div>
                </div>
              </HolographicCard>
            </SleekItem>

            <SleekItem className="md:col-span-4">
              <HolographicCard className="h-full">
                <div className="p-8 group cursor-pointer h-full">
                  <span className="material-symbols-outlined text-4xl text-[#00dbe7] mb-6" translate="no">query_stats</span>
                  <h4 className="font-headline text-xl font-bold text-white uppercase mb-4 tracking-tight group-hover:text-[#00dbe7] transition-colors">
                    Data Intelligence
                  </h4>
                  <p className="text-sm text-on-surface-variant/70 leading-relaxed">
                    Converting raw telemetry into actionable architectural decisions through neural mapping.
                  </p>
                </div>
              </HolographicCard>
            </SleekItem>
            
            <SleekItem className="md:col-span-4">
              <HolographicCard className="h-full">
                <div className="p-8 group cursor-pointer h-full bg-gradient-to-br from-white/[0.02] to-transparent">
                  <span className="material-symbols-outlined text-4xl text-white mb-6" translate="no">speed</span>
                  <h4 className="font-headline text-xl font-bold text-white uppercase mb-4 tracking-tight group-hover:scale-105 transition-transform">
                    Velocity Engine
                  </h4>
                  <p className="text-sm text-on-surface-variant/70 leading-relaxed">
                    Optimizing the critical rendering path to achieve sub-second visual stability.
                  </p>
                </div>
              </HolographicCard>
            </SleekItem>
            
            <SleekItem className="md:col-span-4">
              <HolographicCard className="h-full">
                <div className="p-8 group cursor-pointer h-full">
                  <span className="material-symbols-outlined text-4xl text-primary-container mb-6" translate="no">cloud_done</span>
                  <h4 className="font-headline text-xl font-bold text-white uppercase mb-4 tracking-tight group-hover:text-primary-container transition-colors">
                    Cloud Synthesis
                  </h4>
                  <p className="text-sm text-on-surface-variant/70 leading-relaxed">
                    Seamless integration across multi-cloud environments for high-availability deployments.
                  </p>
                </div>
              </HolographicCard>
            </SleekItem>
          </SleekStagger>

          {/* Skill Spectrum / Technical Matrix */}
          <section className="space-y-16 pb-32">
            <SleekItem className="text-center">
              <h2 className="font-headline text-3xl md:text-5xl font-bold uppercase tracking-widest text-white">
                Technical Matrix
              </h2>
              <p className="text-on-surface-variant/60 mt-4 max-w-lg mx-auto">
                Current proficiency distribution models across core technical modules.
              </p>
            </SleekItem>
            
            <SleekStagger className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Frontend Synthesis', value: '94%', color: 'primary-container' },
                { label: 'Backend Logic', value: '89%', color: 'secondary' },
                { label: 'WebGL / GLSL', value: '76%', color: '[#00dbe7]' },
                { label: 'DevOps / CI-CD', value: '82%', color: 'on-surface' },
              ].map((skill, i) => (
                <SleekItem key={skill.label}>
                  <div className="glass-card p-8 rounded-xl text-center group border-white/5 hover:bg-white/[0.03] transition-all duration-500">
                    <motion.div 
                      className={`text-4xl font-headline font-black text-${skill.color} mb-2`}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 * i }}
                    >
                      {skill.value}
                    </motion.div>
                    <div className="text-[10px] font-headline uppercase tracking-widest text-on-surface-variant/50 group-hover:text-on-surface-variant transition-colors">
                      {skill.label}
                    </div>
                  </div>
                </SleekItem>
              ))}
            </SleekStagger>
          </section>
        </main>
      </div>
    </PageTransition>
  );
}
