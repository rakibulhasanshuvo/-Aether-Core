import React from 'react';

export default function NodeVisual() {
  return (
    <section className="relative h-[600px] w-full glass-card rounded-xl overflow-hidden group">
      <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary-container/20 via-transparent to-transparent"></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="w-full h-full object-cover mix-blend-overlay" alt="abstract architectural technical nodes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtHoGzs0GNldkMMo5Wu4fMZLNwUyOpLgXat-h0yGsAZBe-c4dpuadg2rE6sg6WwzjoOCdechm4OKz5zaQsAVnagChteVKGeROdBLM31dlT6lhkKZavjdXyQajdNFteCKdpOZJB5ckr33RiVYw9INtRAKGY4idcWqSUWqW6ddCFZrgoMQb0ORCv9jBrHB-IqgY71ZXgSkGxNo88gNHoEXW4YmKu2LUe-kXd1vB-h5jRgRcub9mVFlevBkCXKqSBuPJmcgEXIrBq31E"/>
      </div>
      <div className="absolute inset-0 z-10 p-12 flex flex-col justify-between">
          <div className="flex justify-between items-start">
              <div className="glass-card p-4 rounded-lg border-primary-container/20 flex flex-col items-start text-left">
                  <div className="flex items-center gap-3 mb-2">
                      <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                      <span className="font-headline text-xs tracking-widest text-primary-container uppercase">System Node: Pulse_Core</span>
                  </div>
                  <div className="font-mono text-[10px] text-on-surface-variant/60 leading-tight">
                      UPTIME: 99.999%<br/>
                      LATENCY: 0.04ms<br/>
                      STATUS: OPTIMIZED
                  </div>
              </div>
              <div className="text-right">
                  <span className="font-headline text-5xl font-black text-white/10 tracking-tighter uppercase">Infrastructure</span>
              </div>
          </div>
      </div>
    </section>
  );
}
