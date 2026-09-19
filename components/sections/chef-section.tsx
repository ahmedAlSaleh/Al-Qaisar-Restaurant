"use client";

import React from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { GOLD_BLUR_DATA_URL } from "@/lib/utils";

export function ChefSection() {
  const brigade = [
    {
      id: 1,
      name: "Antoine Dubois",
      designation: "Executive Chef · 3★ Michelin",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=300&q=80&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Laurent Mercier",
      designation: "Chef Pâtissier · MOF",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&q=80&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Hélène Rostand",
      designation: "Chef Sommelier · Master of Wine",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Marco Bellini",
      designation: "Chef de Cuisine",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80&auto=format&fit=crop",
    },
  ];

  const awards = [
    {
      icon: "★",
      title: "3 Michelin Stars",
      sub: "Consecutive 2019–2026",
    },
    {
      icon: "◆",
      title: "James Beard Award",
      sub: "Outstanding Chef 2022",
    },
    {
      icon: "⊕",
      title: "World's 50 Best",
      sub: "Chef of the Year 2024",
    },
  ];

  const kitchenAction = [
    {
      title: "Saucier Precision",
      description: "Micro-reduction sauces finished with millimetric balance at the pass",
      badge: "The Art of Sauce",
      image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=800&q=80&auto=format&fit=crop",
      altArabic: "أيدي الشيف أنطوان تضع صلصة الترافل المخملية بدقة متناهية على أطباق القيصر",
    },
    {
      title: "The Fire Theatre",
      description: "High-heat flash sears on vintage French hand-hammered copper",
      badge: "Live Action",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80&auto=format&fit=crop",
      altArabic: "فن الشواء بالحرارة العالية وألسنة اللهب في مطبخ القيصر المفتوح",
    },
    {
      title: "Brigade Symphony",
      description: "Thirty culinarians moving in seamless three-star concert every service",
      badge: "The Brigade",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80&auto=format&fit=crop",
      altArabic: "تناغم كتيبة الطهاة في مطبخ مطعم القيصر أثناء إعداد وجبات العشاء الفاخر",
    },
  ];

  return (
    <section id="chef" className="relative min-h-screen flex flex-col justify-center py-28 px-6 md:px-16 bg-[#060606] overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_70%)] filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Narrative, Brigade & Accolades */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <ScrollReveal>
              <span className="text-[10px] uppercase tracking-[0.45em] text-[#C9A84C] mb-2 block font-medium">
                Culinary Leadership
              </span>
              <p className="font-serif text-2xl text-[#F5F0E8]/70 mb-1 font-light">
                Executive Chef
              </p>
              <h2 className="font-script text-6xl sm:text-7xl text-[#C9A84C] leading-none mb-6">
                Antoine Dubois
              </h2>
              <div className="w-16 h-[1px] bg-gradient-to-r from-[#C9A84C] to-transparent mb-6" />

              <p className="text-xs sm:text-sm text-[#F5F0E8]/65 leading-relaxed font-light mb-8 max-w-xl">
                Born in Lyon and trained under the legendary Paul Bocuse, Chef Antoine Dubois brings thirty years of mastery to Al-Qaisar kitchen. His philosophy: let the world&rsquo;s finest ingredients speak, then whisper poetry into each plate through obsessive technique and culinary vision.
              </p>

              {/* Brigade with Aceternity AnimatedTooltip */}
              <div className="mb-10 p-5 rounded-xl border border-[#C9A84C]/20 bg-black/50 backdrop-blur-sm max-w-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A84C] block font-medium">
                      The Culinary Brigade
                    </span>
                    <span className="text-xs text-[#F5F0E8]/50 font-light mt-0.5 block">
                      Four Masters of Haute Gastronomy
                    </span>
                  </div>
                  <div className="flex items-center pl-2">
                    <AnimatedTooltip items={brigade} />
                  </div>
                </div>
              </div>

              {/* Accolades */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {awards.map((award, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3.5 p-3.5 rounded-lg border border-[#C9A84C]/15 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:border-[#C9A84C]/40 hover:bg-[#C9A84C]/5"
                  >
                    <div className="w-9 h-9 rounded-md border border-[#C9A84C]/60 flex items-center justify-center text-[#C9A84C] text-sm font-serif shrink-0 shadow-[0_0_8px_rgba(201,168,76,0.2)]">
                      {award.icon}
                    </div>
                    <div className="text-[11px] uppercase tracking-wider text-[#F5F0E8]/50 leading-snug">
                      <strong className="text-[#C9A84C] block font-normal">
                        {award.title}
                      </strong>
                      <span className="text-[10px] text-[#F5F0E8]/40">{award.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Aceternity DirectionAwareHover Chef Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ScrollReveal>
              <div className="p-3 rounded-2xl border border-[#C9A84C]/25 bg-black/70 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(201,168,76,0.1)]">
                <DirectionAwareHover
                  imageUrl="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80&auto=format&fit=crop"
                  className="w-full sm:w-[360px] md:w-[400px] h-[480px] sm:h-[540px] rounded-xl"
                  imageClassName="brightness-[0.9] object-cover object-top"
                  childrenClassName="p-6 bg-gradient-to-t from-black via-black/80 to-transparent w-full left-0 bottom-0"
                >
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A84C] font-medium block mb-1">
                      Master of Gastronomy
                    </span>
                    <h4 className="font-serif text-2xl text-[#F5F0E8] font-normal">
                      Chef Antoine Dubois
                    </h4>
                    <p className="font-serif italic text-xs text-[#F5F0E8]/80 mt-2 leading-relaxed max-w-xs">
                      &ldquo;Perfection is not an accident; it is the natural consequence of obsession.&rdquo;
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 rounded border border-[#C9A84C]/40 bg-[#C9A84C]/10 text-[#C9A84C]">
                        Ordre National du Mérite
                      </span>
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Kitchen Theatre & Plating Action Showcase (3 Images) */}
        <ScrollReveal className="mt-16 border-t border-[#C9A84C]/15 pt-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
            <div>
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#C9A84C] font-medium block">
                Behind The Pass
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F0E8] font-light mt-1">
                Culinary Choreography &amp; <em className="italic text-[#C9A84C]">Kitchen Mastery</em>
              </h3>
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#F5F0E8]/40">
              Live Action &middot; Al-Qaisar Kitchen
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {kitchenAction.map((item, idx) => (
              <div
                key={idx}
                className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-[#C9A84C]/20 bg-black/60 shadow-[0_6px_25px_rgba(0,0,0,0.7)]"
              >
                <Image
                  src={item.image}
                  alt={item.altArabic}
                  fill
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={GOLD_BLUR_DATA_URL}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover brightness-[0.72] transition-transform duration-[400ms] ease-out group-hover:scale-105 group-hover:brightness-[0.90]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent p-5 flex flex-col justify-end">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#C9A84C] font-medium mb-1">
                    {item.badge}
                  </span>
                  <h4 className="font-serif text-lg text-[#F5F0E8] font-normal leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#F5F0E8]/60 font-light mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
