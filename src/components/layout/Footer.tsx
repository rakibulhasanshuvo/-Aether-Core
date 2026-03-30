import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0E0E0E] w-full py-16 px-8 border-t border-[#3A494B]/05 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-left space-y-4">
              <div className="font-headline text-white font-bold tracking-tighter text-xl">THE ARCHITECT</div>
              <p className="font-body text-[10px] tracking-[0.1em] uppercase text-[#7A7A7A] max-w-xs">
                  Synthesizing the digital void into tangible interfaces.
              </p>
          </div>
          <div className="text-right">
              <div className="font-body text-[10px] tracking-[0.1em] uppercase text-[#7A7A7A]">
                  © 2024 THE ARCHITECT // [ENCRYPTED TRANSMISSION]
              </div>
          </div>
      </div>
    </footer>
  );
}
