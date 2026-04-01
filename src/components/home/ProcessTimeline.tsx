'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SleekStagger, SleekItem, HolographicCard } from '@/components/ui/MotionEffects';

const steps = [
  {
    id: '01',
    title: 'DECRYPT | Discovery & Analysis',
    desc: 'We begin by auditing the core requirements. I dissect your vision to identify the technical constraints and the aesthetic "vibe" that will define the system\'s DNA.',
    status: 'COMPLETED'
  },
  {
    id: '02',
    title: 'ARCHITECT | Structural Engineering',
    desc: 'Constructing the blueprint. Using a "Vibe Coding" approach, I map out the tiered database architecture and 3D integration layers to ensure the system is as performant as it is beautiful.',
    status: 'IN_PROGRESS'
  },
  {
    id: '03',
    title: 'INITIALIZE | Full-Stack Synthesis',
    desc: 'The build phase. I deploy the stack—Next.js, TypeScript, and Tailwind CSS—integrating real-time data pipelines and interactive glassmorphic interfaces into a unified environment.',
    status: 'PENDING'
  },
  {
    id: '04',
    title: 'OPTIMIZE | System Hardening',
    desc: 'Final stress testing and performance tuning. The deployment is audited for speed, responsive fluidity, and "Cyber-Luxury" visual fidelity before going live on the grid.',
    status: 'PENDING'
  }
];

export default function ProcessTimeline() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-20 relative max-w-4xl mx-auto" ref={containerRef}>
      <SleekStagger delay={0.2}>
        <SleekItem className="flex items-center gap-3 mb-16 justify-center">
          <div className="w-1 h-6 bg-primary-container rounded-full"></div>
          <h2 className="font-headline text-xs tracking-[0.3em] uppercase text-on-surface-variant">
            SYSTEM_DEPLOYMENT_PROTOCOL
          </h2>
          <div className="w-1 h-6 bg-primary-container rounded-full"></div>
        </SleekItem>
      </SleekStagger>

      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 w-full bg-primary-container shadow-[0_0_15px_var(--primary-container)]"
            style={{
              height: pathHeight,
              '--primary-container': '#00F2FF'
            }}
          />
        </div>

        <div className="space-y-12 pb-12">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={step.id} className="relative z-10 w-full flex">
                <SleekStagger delay={0.1 * index} className="w-full flex items-center justify-center">
                  <SleekItem className={`flex flex-col md:flex-row items-center w-full gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>

                    {/* Content Card */}
                    <div className={`flex-1 w-full pl-20 md:pl-0 ${isEven ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                      <HolographicCard>
                        <div className="p-8 group relative overflow-hidden bg-[#050505]/50 backdrop-blur-md rounded-xl border border-white/5">
                            {/* Scanning line effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-container/10 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-linear" />

                            <div className={`flex items-start md:items-center gap-4 mb-4 ${isEven ? 'md:justify-end md:flex-row-reverse' : 'justify-start'}`}>
                              <h3 className="font-mono text-primary-container text-lg font-bold tracking-tight">
                                {step.id}_{step.title}
                              </h3>
                              {step.status === 'IN_PROGRESS' && (
                                <div className="flex items-center gap-2 px-2 py-1 bg-white/5 rounded-full border border-white/10 shrink-0">
                                  <span className="w-2 h-2 rounded-full bg-[#00F2FF] animate-pulse"></span>
                                  <span className="text-[9px] font-mono text-[#00F2FF] uppercase tracking-widest">Active</span>
                                </div>
                              )}
                            </div>
                            <p className="text-sm text-on-surface-variant/80 leading-relaxed font-sans text-left">
                              {step.desc}
                            </p>
                        </div>
                      </HolographicCard>
                    </div>

                    {/* Timeline Node */}
                    <div className="absolute left-8 md:relative md:left-auto w-10 h-10 md:w-12 md:h-12 flex items-center justify-center -translate-x-1/2 md:translate-x-0 bg-[#050505] rounded-full border border-white/10 z-20 shrink-0 mx-auto">
                      <div className="w-4 h-4 rounded-full bg-black border-2 border-primary-container flex items-center justify-center shadow-[0_0_10px_var(--primary-container)]" style={{ '--primary-container': '#00F2FF' }}>
                        <motion.div
                           initial={{ scale: 0 }}
                           whileInView={{ scale: 1 }}
                           viewport={{ once: false, margin: "-100px" }}
                           className="w-1.5 h-1.5 rounded-full bg-primary-container"
                        />
                      </div>
                    </div>

                    {/* Empty Space for Zig-Zag */}
                    <div className="hidden md:block flex-1" />

                  </SleekItem>
                </SleekStagger>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
