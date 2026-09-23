"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Marquee } from "@/components/ui/marquee";
import { ScrollReveal } from "@/components/effects/scroll-reveal";

export function ReviewsSection() {
  const reviews = [
    {
      quote:
        "Al-Qaisar transcends the concept of dining. It is a performance, a memory, a privilege. Chef Antoine’s Wagyu Rossini moved me to silence. I have dined at many three-starred establishments — this is art.",
      name: "HRH Prince Faisal Al-Rashid",
      title: "Riyadh, Saudi Arabia · Private Dining Suite",
    },
    {
      quote:
        "I’ve reviewed restaurants across five continents for thirty years. Al-Qaisar is one of perhaps a dozen restaurants in the world that genuinely deserves its reputation. The chandelier alone is worth the journey.",
      name: "Sylvia Marchetti",
      title: "Chief Restaurant Critic, Le Monde Gastronomique · Paris",
    },
    {
      quote:
        "Our anniversary dinner will live with us forever. The sommelier team remembered our exact vintage preference and surprised us with a bespoke pairing. The hospitality here is as extraordinary as the gastronomy.",
      name: "Jonathan & Elizabeth Hartley",
      title: "London, United Kingdom · Royal Table",
    },
    {
      quote:
        "An unforgettable symphony of flavors, architectural brilliance, and attentive discretion. The Wagyu Tenderloin Rossini paired with Château Pétrus is the finest dish in the Middle East.",
      name: "Countess Alexandra Von Stauffen",
      title: "Zurich, Switzerland · Gastronomic Society",
    },
  ];

  const awards = [
    "Michelin Guide ★★★",
    "World's 50 Best #4",
    "Forbes Five-Star 2026",
    "Condé Nast Gold List",
    "James Beard Foundation",
    "La Liste Top 100",
    "Relais & Châteaux Grand Chef",
    "Wine Spectator Grand Award",
  ];

  return (
    <section id="reviews" className="py-28 px-4 md:px-12 bg-[#080808] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-80 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse,rgba(201,168,76,0.09)_0%,transparent_70%)] filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.45em] text-[#C9A84C] mb-2 block font-medium">
            Guest Voices
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#F5F0E8] leading-tight">
            The <em className="italic text-[#C9A84C] font-normal">Experience</em>
          </h2>
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto my-5 shadow-[0_0_8px_rgba(201,168,76,0.5)]" />
        </ScrollReveal>

        {/* Aceternity Infinite Moving Cards for VIP Reviews */}
        <div className="w-full mb-16">
          <InfiniteMovingCards
            items={reviews}
            direction="left"
            speed="normal"
            pauseOnHover={true}
          />
        </div>

        {/* Awards & Accolades with Magic UI Marquee */}
        <ScrollReveal>
          <div className="pt-10 border-t border-[#C9A84C]/20 max-w-5xl mx-auto">
            <div className="text-center mb-6">
              <span className="text-[9px] uppercase tracking-[0.35em] text-[#C9A84C]/70 font-medium">
                Global Gastronomic Distinctions
              </span>
            </div>
            <Marquee pauseOnHover className="[--duration:25s]">
              {awards.map((award, i) => (
                <div
                  key={i}
                  className="mx-4 px-5 py-2.5 rounded-full border border-[#C9A84C]/30 bg-[#141414]/85 backdrop-blur-sm text-xs font-serif text-[#F5F0E8] tracking-widest flex items-center gap-2 hover:border-[#C9A84C]/60 hover:bg-[#181818] transition-all shadow-[0_4px_16px_rgba(0,0,0,0.4)]"
                >
                  <span className="text-[#C9A84C]">◆</span>
                  <span>{award}</span>
                </div>
              ))}
            </Marquee>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
