"use client";

import React from "react";
import Image from "next/image";
import { Counter } from "@/components/effects/counter";
import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { GOLD_BLUR_DATA_URL } from "@/lib/utils";

export function StorySection() {
  const heritageContent = [
    {
      era: "1994",
      title: "A Vision of Grandeur",
      description:
        "Al-Qaisar was born from a singular ambition: to create a dining destination worthy of Four Seasons' uncompromising standard of luxury. Founded in 1994, it was conceived as a grand theater where world-class culinary masters perform at the pinnacle of gastronomy.",
      content: (
        <div className="relative h-full w-full">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=75&auto=format&fit=crop"
            alt="تأسيس مطعم القيصر بفندق فور سيزونز عام 1994"
            fill
            loading="lazy"
            placeholder="blur"
            blurDataURL={GOLD_BLUR_DATA_URL}
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover brightness-[0.8] transition-transform duration-[400ms] ease-out hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="font-serif italic text-2xl text-[#C9A84C] block">
              1994
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#F5F0E8]/70">
              Al-Qaisar Inauguration
            </span>
          </div>
        </div>
      ),
    },
    {
      era: "2012",
      title: "Michelin 3-Star Consecration",
      description:
        "Recognized by the world's most exacting culinary guide with the coveted Three Michelin Stars. A rare honor held consecutively for over a decade, affirming our obsessive dedication to flawless culinary technique and legendary hospitality.",
      content: (
        <div className="relative h-full w-full">
          <Image
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&q=75&auto=format&fit=crop"
            alt="تتويج مطعم القيصر بثلاث نجوم ميشلان الفاخرة"
            fill
            loading="lazy"
            placeholder="blur"
            blurDataURL={GOLD_BLUR_DATA_URL}
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover brightness-[0.8] transition-transform duration-[400ms] ease-out hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="font-serif italic text-2xl text-[#C9A84C] block">
              3★ Michelin
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#F5F0E8]/70">
              Consecutive Excellence
            </span>
          </div>
        </div>
      ),
    },
    {
      era: "Today",
      title: "Ranked #4 in the World",
      description:
        "Today, Al-Qaisar stands among the World's 50 Best Restaurants. Having hosted royalty, heads of state, and the world's most celebrated artists, each evening writes a timeless chapter in the annals of haute cuisine.",
      content: (
        <div className="relative h-full w-full">
          <Image
            src="https://images.unsplash.com/photo-1544025162-d76694265947?w=700&q=75&auto=format&fit=crop"
            alt="تصنيف مطعم القيصر بالمركز الرابع بين أفضل 50 مطعماً في العالم"
            fill
            loading="lazy"
            placeholder="blur"
            blurDataURL={GOLD_BLUR_DATA_URL}
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover brightness-[0.8] transition-transform duration-[400ms] ease-out hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="font-serif italic text-2xl text-[#C9A84C] block">
              #4 Globally
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#F5F0E8]/70">
              World&rsquo;s 50 Best Restaurants
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="story" className="relative py-28 px-6 md:px-16 bg-[#080808] overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_70%)] filter blur-3xl pointer-events-none" />

      <TracingBeam className="px-4">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          {/* Header & Stats */}
          <ScrollReveal>
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-6">
              <span className="text-[10px] uppercase tracking-[0.45em] text-[#C9A84C] mb-2 block font-medium">
                Our Heritage
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#F5F0E8] leading-tight mb-4">
                Thirty Years of <br />
                <em className="italic text-[#C9A84C] font-normal">Culinary</em> Excellence
              </h2>
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent my-4" />
              <p className="text-xs sm:text-sm text-[#F5F0E8]/65 leading-relaxed font-light">
                Over three decades, we have hosted royalty, heads of state, and visionary artists. Each visit is a chapter in a story of extraordinary hospitality that continues to unfold with every plate we serve.
              </p>
            </div>

            {/* Accomplishment Badges */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
              <div className="p-4 text-center rounded-xl border border-[#C9A84C]/20 bg-black/60 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                <span className="font-serif text-3xl font-light text-[#C9A84C] block">
                  <Counter to={30} suffix="+" />
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#F5F0E8]/40 mt-1 block font-medium">
                  Years Excellence
                </span>
              </div>

              <div className="p-4 text-center rounded-xl border border-[#C9A84C]/20 bg-black/60 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                <span className="font-serif text-3xl font-light text-[#C9A84C] block">
                  3★
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#F5F0E8]/40 mt-1 block font-medium">
                  Michelin Stars
                </span>
              </div>

              <div className="p-4 text-center rounded-xl border border-[#C9A84C]/20 bg-black/60 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                <span className="font-serif text-3xl font-light text-[#C9A84C] block">
                  #4
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#F5F0E8]/40 mt-1 block font-medium">
                  World&rsquo;s Best 50
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Aceternity StickyScrollReveal through historical eras */}
          <ScrollReveal>
            <StickyScroll content={heritageContent} />
          </ScrollReveal>
        </div>
      </TracingBeam>
    </section>
  );
}
