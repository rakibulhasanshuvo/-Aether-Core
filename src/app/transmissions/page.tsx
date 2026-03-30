'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PageTransition from '@/components/ui/PageTransition';
import { SleekStagger, SleekItem, HolographicCard, TextScramble, EASE } from '@/components/ui/MotionEffects';
import Image from 'next/image';

const MotionImage = motion(Image);

export default function TransmissionsPage() {
  return (
    <PageTransition>
      <div className="flex flex-col flex-grow w-full max-w-5xl mx-auto pt-20 pb-32 px-8">
        {/* Header Section */}
        <header className="mb-24">
          <SleekStagger delay={0.2}>
            <SleekItem>
              <p className="font-headline text-primary-container text-[10px] tracking-[0.3em] uppercase mb-4 opacity-80">Chronological Archive</p>
              <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter text-on-surface leading-none mb-8 uppercase">
                <TextScramble text="TRANSMISSIONS" delay={0.5} /> <span className="text-on-surface-variant opacity-10 select-none">01.LOG</span>
              </h1>
              <p className="max-w-2xl text-on-surface-variant text-lg leading-relaxed font-body">
                A sequential decryption of professional milestones, architectural developments, and digital nodes established across the global network.
              </p>
            </SleekItem>
          </SleekStagger>
        </header>

        {/* Timeline Container */}
        <section className="relative">
          {/* Vertical Line - Animated */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: EASE as any }}
            className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-container via-secondary-container to-transparent opacity-30 origin-top shadow-[0_0_15px_rgba(0,242,255,0.2)]"
          />
          
          {/* Experience Node 1 */}
          <div className="relative pl-12 md:pl-24 mb-40 group">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute left-[13px] md:left-[29px] top-2 w-2 h-2 bg-primary-container rounded-full ring-4 ring-primary-container/20 z-10"
            />
            
            <SleekStagger className="grid lg:grid-cols-2 gap-16 items-start" delay={0.3}>
              <div className="space-y-6">
                <SleekItem>
                  <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-2">
                    <span className="font-headline text-primary-container text-[10px] tracking-widest uppercase bg-primary-container/10 px-4 py-1.5 rounded-full border border-primary-container/20">
                      Active_Transmission
                    </span>
                    <span className="font-headline text-on-surface-variant/40 text-[10px] tracking-widest uppercase">2023 — PRESENT</span>
                  </div>
                </SleekItem>
                
                <SleekItem>
                  <HolographicCard>
                    <div className="p-8 group/card cursor-pointer">
                      <h3 className="font-headline text-3xl font-bold mb-3 group-hover/card:text-primary-container transition-colors">Lead Systems Architect</h3>
                      <p className="font-headline text-secondary tracking-[0.2em] uppercase text-[10px] mb-8">Aether Dynamics / Neo-Berlin Node</p>
                      <p className="text-on-surface-variant/70 mb-10 leading-relaxed text-base">
                        Orchestrating the transition from monolithic legacy systems to decentralized, glassmorphic interfaces. Implementing sub-10ms latency protocols for high-frequency transmissions.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {['Quantum_DB', 'Rust_Core', 'Neural_UI'].map(tech => (
                          <span key={tech} className="text-[9px] px-3 py-1 border border-white/10 bg-white/[0.03] rounded uppercase tracking-widest text-on-surface-variant group-hover/card:border-primary-container/30 transition-colors">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </HolographicCard>
                </SleekItem>
              </div>

              <SleekItem>
                <div className="relative rounded-2xl overflow-hidden aspect-video group-hover:shadow-[0_0_50px_rgba(0,242,255,0.1)] transition-all duration-700 border border-white/5">
                  <MotionImage
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1 }}
                    alt="Abstract visualization of neural network pathways" 
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCma9wsxqgYLkJj3qii3a1LbaifXzoT1BmPU-2_5RP4NFBUYAtq7-ssp5ZGpW20hr8EoXNjbszthyGvQhih-CsGkwK78UnWkEPh-eN-9WQGf4G0cNnjhVqx5O19YLCDjEpUoc_mM7xlfEqLEHJKPYod43nESwJlVbDNdxb-T7bNhdztS9wXiyuWcXaJIzTfvB0kS-F_rdN_PkTjtDqXRRG9KNw-IK58KMFQkAPrEHFdL1JZiGxcV-rohgcppqz5SvJgEgx9OVuGxDo"
                    width={800}
                    height={450}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                </div>
              </SleekItem>
            </SleekStagger>
          </div>

          {/* Experience Node 2 */}
          <div className="relative pl-12 md:pl-24 mb-40 group">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute left-[13px] md:left-[29px] top-2 w-2 h-2 bg-secondary rounded-full ring-4 ring-secondary/20 z-10"
            />
            <SleekStagger className="grid lg:grid-cols-2 gap-16 items-start" delay={0.3}>
              <SleekItem>
                <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden aspect-video border border-white/5 shadow-2xl">
                  <MotionImage
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1 }}
                    alt="Cyberpunk cityscape with rain and neon lights" 
                    className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmEkAtKqxNEhkqUJs6NneXu9ZdFgGCcBlLHcef5qVw6yqwjrt5kAgIwFHoQ55F2IbyzFN1aXqiQeZe5XjIDkQyOht9Nh-XFKRRXsZwgwEkdbdyA2FC-mDKPAdyHPW3ne9s8byteHiEr4H_I7qXpzz0E01MDa-oq5H1t4RvssEQYlOMF-sruB4ZJUENR3gKeK_2V2inq6ybecOOj9XNgdGxfClEYypdL8RvkOEEmxE5BuhmhzNOt5YnDo0IkqBaLOS8L69nXI-I7d4"
                    width={800}
                    height={450}
                  />
                  <div className="absolute inset-0 border border-secondary/10 m-3 rounded-xl pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                </div>
              </SleekItem>
              
              <div className="space-y-6 order-1 lg:order-2">
                <SleekItem>
                  <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-2">
                    <span className="font-headline text-secondary text-[10px] tracking-widest uppercase bg-secondary/10 px-4 py-1.5 rounded-full border border-secondary/20">
                      Archive_Verified
                    </span>
                    <span className="font-headline text-on-surface-variant/40 text-[10px] tracking-widest uppercase">2021 — 2023</span>
                  </div>
                </SleekItem>
                <SleekItem>
                  <HolographicCard>
                    <div className="p-8 group/card cursor-pointer">
                      <h3 className="font-headline text-3xl font-bold mb-3 group-hover/card:text-secondary transition-colors">Senior Interface Node</h3>
                      <p className="font-headline text-[#7701d0] tracking-[0.2em] uppercase text-[10px] mb-8">Crypton Labs / Tokyo Sector</p>
                      <p className="text-on-surface-variant/70 mb-10 leading-relaxed text-base">
                        Pioneered the &apos;Aether-Glass&apos; design system, reducing cognitive load in high-stress data environments by 40%. Led a team of 12 designers across 3 timezones.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {['Design_Ops', 'React_Fiber', 'WebGL'].map(tech => (
                          <span key={tech} className="text-[9px] px-3 py-1 border border-white/10 bg-white/[0.03] rounded uppercase tracking-widest text-on-surface-variant group-hover/card:border-secondary/30 transition-colors">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </HolographicCard>
                </SleekItem>
              </div>
            </SleekStagger>
          </div>

          {/* Experience Node 3 */}
          <div className="relative pl-12 md:pl-24 mb-40 group">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute left-[13px] md:left-[29px] top-2 w-2 h-2 bg-on-surface-variant/40 rounded-full ring-4 ring-white/5 z-10"
            />
            <SleekStagger delay={0.3}>
              <SleekItem>
                <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-8">
                  <span className="font-headline text-on-surface-variant/60 text-[10px] tracking-widest uppercase bg-white/5 px-4 py-1.5 rounded-full border border-white/5">
                    Legacy_Node
                  </span>
                  <span className="font-headline text-on-surface-variant/40 text-[10px] tracking-widest uppercase">2018 — 2021</span>
                </div>
              </SleekItem>
              <SleekItem>
                <HolographicCard className="max-w-4xl">
                  <div className="p-8 group/card cursor-pointer">
                    <h3 className="font-headline text-3xl font-bold mb-3 group-hover/card:text-white transition-colors">Full-Stack Decryptor</h3>
                    <p className="font-headline text-on-surface-variant/40 tracking-[0.2em] uppercase text-[10px] mb-8">Origin Frameworks</p>
                    <div className="grid md:grid-cols-2 gap-12">
                      <p className="text-on-surface-variant/60 leading-relaxed italic">
                        &quot;Engineered robust backend structures for early-stage blockchain protocols. Focused on security encryption and scalable infrastructure nodes.&quot;
                      </p>
                      <div className="space-y-4">
                        <div className="flex justify-between border-b border-white/5 pb-2">
                          <span className="text-[10px] uppercase tracking-widest text-on-surface-variant/40 font-headline">Protocol</span>
                          <span className="text-[10px] font-bold text-primary-container font-headline uppercase tracking-widest">EVM-Core</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-2">
                          <span className="text-[10px] uppercase tracking-widest text-on-surface-variant/40 font-headline">Status</span>
                          <span className="text-[10px] font-bold text-on-surface-variant/60 font-headline uppercase tracking-widest">Deprioritized</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </HolographicCard>
              </SleekItem>
            </SleekStagger>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="mt-32 text-center relative py-20 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-secondary/5 filter blur-[100px] pointer-events-none" />
          
          <SleekStagger className="relative z-10 flex flex-col items-center">
            <SleekItem>
              <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-8 max-w-2xl mx-auto uppercase">
                Need a New <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-secondary-container">Node</span>?
              </h2>
            </SleekItem>
            <SleekItem>
              <p className="text-on-surface-variant/60 mb-12 max-w-md mx-auto text-lg leading-relaxed">
                Collaborations currently open for Q4 transmissions. Initialize signal to begin architectural protocol.
              </p>
            </SleekItem>
            <SleekItem>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/network"
                  className="px-12 py-5 bg-primary-container text-[#050505] rounded-full font-headline font-black uppercase tracking-widest text-sm hover:shadow-glow transition-all cursor-pointer inline-block"
                >
                  INITIALIZE SIGNAL
                </Link>
              </motion.div>
            </SleekItem>
          </SleekStagger>
        </section>
      </div>
    </PageTransition>
  );
}
