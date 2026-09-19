"use client";

import React from "react";
import { LampContainer } from "@/components/ui/lamp";
import { BlurFade } from "@/components/ui/blur-fade";

export function ChandelierSection() {
  return (
    <section id="reveal" className="relative bg-background overflow-hidden">
      <LampContainer className="pt-20 pb-32">
        {/* Crystal Chandelier Visual Model illuminated by the Lamp radiance */}
        <div className="relative mb-12 flex flex-col items-center select-none">
          {/* Suspension wire descending from lamp */}
          <div className="w-[1.5px] h-16 bg-gradient-to-b from-[#C9A84C] via-[#C9A84C]/90 to-[#C9A84C] shadow-[0_0_8px_rgba(201,168,76,0.8)]" />
          
          <div className="relative w-80 sm:w-96">
            {/* Top Tier */}
            <div className="flex justify-around items-end w-full relative pb-2 border-b border-[#C9A84C]/30">
              {[28, 38, 32, 24, 44, 30, 36].map((h, i) => (
                <div key={i} className="flex flex-col items-center gap-1 group">
                  <div className="w-[1px] bg-[#C9A84C]/40" style={{ height: `${h}px` }} />
                  <div className="w-2.5 h-6 bg-gradient-to-br from-white via-[#C9A84C]/60 to-white/80 shadow-[0_0_12px_rgba(201,168,76,0.6)] [clip-path:polygon(50%_0%,100%_30%,100%_70%,50%_100%,0%_70%,0%_30%)] animate-pulse transition-transform duration-500 hover:scale-125" />
                </div>
              ))}
            </div>
            {/* Lower Tier */}
            <div className="flex justify-around items-end w-[130%] -ml-[15%] relative pt-2">
              {[48, 34, 54, 40, 46, 30, 58, 40, 36].map((h, i) => (
                <div key={i} className="flex flex-col items-center gap-1 group">
                  <div className="w-[1px] bg-[#C9A84C]/40" style={{ height: `${h}px` }} />
                  <div className="w-3 h-8 bg-gradient-to-br from-white via-[#C9A84C]/70 to-white/90 shadow-[0_0_15px_rgba(201,168,76,0.7)] [clip-path:polygon(50%_0%,100%_30%,100%_70%,50%_100%,0%_70%,0%_30%)] animate-pulse transition-transform duration-500 hover:scale-125" />
                </div>
              ))}
            </div>
          </div>

          {/* Chandelier ambient glow */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[28rem] h-32 bg-[radial-gradient(ellipse,rgba(201,168,76,0.22)_0%,transparent_70%)] filter blur-3xl pointer-events-none" />
        </div>

        {/* Cascading Narrative Copy with Magic UI BlurFade */}
        <div className="text-center flex flex-col items-center max-w-2xl px-4">
          <BlurFade delay={0.1} inView>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.45em] text-[#C9A84C] mb-3 block font-medium">
              The Arrival
            </span>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#F5F0E8] leading-tight mb-4">
              Enter a World of <br />
              <em className="italic text-[#C9A84C] font-normal">Timeless Elegance</em>
            </h2>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto my-5 shadow-[0_0_8px_rgba(201,168,76,0.5)]" />
          </BlurFade>

          <BlurFade delay={0.4} inView>
            <p className="text-xs sm:text-sm text-[#F5F0E8]/70 max-w-xl mx-auto leading-relaxed tracking-wide font-light">
              Step beneath our iconic crystal chandelier &mdash; 2,400 hand-cut Bohemian crystals casting a golden warmth that has welcomed the world&rsquo;s most discerning guests for over three decades.
            </p>
          </BlurFade>
        </div>
      </LampContainer>
    </section>
  );
}
