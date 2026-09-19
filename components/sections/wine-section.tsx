"use client";

import React from "react";
import Image from "next/image";
import { NumberTicker } from "@/components/ui/number-ticker";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { GOLD_BLUR_DATA_URL } from "@/lib/utils";

export function WineSection() {
  const prestigeVintages = [
    {
      title: "Château Pétrus",
      region: "Pomerol, Bordeaux",
      year: "1989",
      description: "Premier Grand Cru Exceptionnel · Black truffle, violets, and concentrated blackberry notes.",
    },
    {
      title: "Romanée-Conti",
      region: "Côte de Nuits, Burgundy",
      year: "2005",
      description: "Grand Cru Monopole · Ethereal wild red currants, oriental spices, and silken minerality.",
    },
    {
      title: "Château d'Yquem",
      region: "Sauternes, Bordeaux",
      year: "1962",
      description: "Premier Cru Supérieur · Candied apricot, wild honeycomb, saffron, and endless golden finish.",
    },
  ];

  const cellarGallery = [
    {
      title: "The Grand Sommelier Vault",
      subtitle: "Subterranean Cellar & Reserve",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80&auto=format&fit=crop",
      altArabic: "قبو النبيذ السري الخاص بمطعم القيصر يضم أندر القوارير التاريخية المحفوظة",
    },
    {
      title: "Crystal Decanting Ritual",
      subtitle: "Bohemian Hand-Blown Decanter",
      image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?w=800&q=80&auto=format&fit=crop",
      altArabic: "خبير الساقي يسكب النبيذ المعتق في دورق كريستالي بوهيمي يدوي",
    },
    {
      title: "Century-Old Oak Casks",
      subtitle: "Traditional French Cooperage",
      image: "https://images.unsplash.com/photo-1528823872057-9c018a7a7553?w=800&q=80&auto=format&fit=crop",
      altArabic: "أقبية تعتيق خشب البلوط التاريخية تحت الأرض في مطعم القيصر",
    },
    {
      title: "Prestige Vintage Library",
      subtitle: "1,200+ Rare Cellared Bottles",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80&auto=format&fit=crop",
      altArabic: "مجموعة زجاجات النبيذ الأثرية النادرة المحفوظة بدرجة حرارة ورطوبة محكمة",
    },
    {
      title: "Vintage Champagne Toast",
      subtitle: "Grand Cuvée & Blanc de Blancs",
      image: "https://images.unsplash.com/photo-1569919659476-f0852f6834b7?w=800&q=80&auto=format&fit=crop",
      altArabic: "كؤوس الشمبانيا الكريستالية الفاخرة للاحتفال بأفخم اللحظات في مطعم القيصر",
    },
  ];

  return (
    <section id="wine" className="relative py-28 px-6 md:px-16 bg-black overflow-hidden">
      {/* Ambient background wine glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_50%,rgba(120,0,24,0.1)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(201,168,76,0.05)_0%,transparent_70%)] filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Narrative and Magic UI Animated Number Tickers */}
          <div>
            <ScrollReveal>
              <span className="text-[10px] uppercase tracking-[0.45em] text-[#C9A84C] mb-2 block font-medium">
                Sommelier Selection
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#F5F0E8] leading-tight mb-4">
                A Cellar of <br />
                <em className="italic text-[#C9A84C] font-normal">Rare Vintages</em>
              </h2>
              <div className="w-16 h-[1px] bg-gradient-to-r from-[#C9A84C] to-transparent my-5" />
              <p className="text-xs sm:text-sm text-[#F5F0E8]/60 leading-relaxed font-light mb-8 max-w-lg">
                Our master sommelier has curated over 1,200 prestige labels from the world&rsquo;s most celebrated wine regions. From the golden valleys of Bordeaux to the volcanic soils of Barolo, each vintage tells a story of terroir and time.
              </p>

              {/* Animated Counters with Magic UI NumberTicker */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="p-4 text-center rounded-lg border border-[#C9A84C]/20 bg-[#111111]/70 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                  <div className="font-serif text-3xl font-light text-[#C9A84C] flex items-center justify-center">
                    <NumberTicker value={1200} className="text-[#C9A84C]" />
                    <span className="text-[#C9A84C] font-serif text-2xl ml-0.5">+</span>
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#F5F0E8]/45 mt-1.5 block font-medium">
                    Prestige Labels
                  </span>
                </div>

                <div className="p-4 text-center rounded-lg border border-[#C9A84C]/20 bg-[#111111]/70 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                  <div className="font-serif text-3xl font-light text-[#C9A84C] flex items-center justify-center">
                    <NumberTicker value={48} className="text-[#C9A84C]" />
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#F5F0E8]/45 mt-1.5 block font-medium">
                    Wine Regions
                  </span>
                </div>

                <div className="p-4 text-center rounded-lg border border-[#C9A84C]/20 bg-[#111111]/70 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                  <div className="font-serif text-3xl font-light text-[#C9A84C] flex items-center justify-center">
                    <NumberTicker value={1962} className="text-[#C9A84C]" />
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#F5F0E8]/45 mt-1.5 block font-medium">
                    Oldest Vintage
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Visuals: Animated Wine Glass SVG & Reserve Bottle Grid */}
          <div className="flex flex-col items-center gap-6">
            {/* Animated Wine SVG */}
            <div className="relative">
              <svg viewBox="0 0 130 210" fill="none" className="w-28 h-44 drop-shadow-[0_12px_28px_rgba(0,0,0,0.8)]">
                <path
                  d="M25 8 Q16 55 32 96 Q48 136 65 150 Q82 136 98 96 Q114 55 105 8 Z"
                  fill="rgba(255,255,255,0.04)"
                  stroke="rgba(255,255,255,0.18)"
                  strokeWidth="1"
                />
                <path
                  d="M35 124 Q49 146 65 150 Q81 146 95 124 Q88 109 65 109 Q42 109 35 124 Z"
                  fill="rgba(140,10,35,0.85)"
                  className="animate-pulse"
                />
                <line x1="65" y1="150" x2="65" y2="186" stroke="rgba(255,255,255,0.22)" strokeWidth="2.5" />
                <ellipse cx="65" cy="188" rx="26" ry="4.5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.16)" strokeWidth="0.8" />
              </svg>
            </div>

            {/* Featured Reserve Bottles Pair */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="relative h-60 rounded-xl overflow-hidden border border-[#C9A84C]/25 group shadow-[0_8px_30px_rgba(0,0,0,0.8)]">
                <Image
                  src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80&auto=format&fit=crop"
                  alt="زجاجة شاتو بيتروس 1989 الأسطورية في قبو مطعم القيصر"
                  fill
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={GOLD_BLUR_DATA_URL}
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover brightness-[0.60] transition-transform duration-[400ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h5 className="font-serif text-base text-[#F5F0E8] font-normal">
                    Château Pétrus &middot; 1989
                  </h5>
                  <span className="text-[9px] uppercase tracking-[0.24em] text-[#C9A84C] font-medium block mt-0.5">
                    Pomerol &mdash; Premier Grand Cru
                  </span>
                </div>
              </div>

              <div className="relative h-60 rounded-xl overflow-hidden border border-[#C9A84C]/25 group shadow-[0_8px_30px_rgba(0,0,0,0.8)]">
                <Image
                  src="https://images.unsplash.com/photo-1516594798947-e65505dbb29d?w=800&q=80&auto=format&fit=crop"
                  alt="سكب النبيذ الفرنسي المعتق في دورق كريستالي بوهيمي يدوي"
                  fill
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={GOLD_BLUR_DATA_URL}
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover brightness-[0.60] transition-transform duration-[400ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h5 className="font-serif text-base text-[#F5F0E8] font-normal">
                    Sommelier Decanting Ritual
                  </h5>
                  <span className="text-[9px] uppercase tracking-[0.24em] text-[#C9A84C] font-medium block mt-0.5">
                    Bohemian Crystal Reserve
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vintage Showcase: Aceternity Card Hover Effect */}
        <ScrollReveal>
          <div className="border-t border-[#C9A84C]/15 pt-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#C9A84C] font-medium">
                Grand Cru Highlights
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#F5F0E8]/40">
                Sommelier Private Reserve
              </span>
            </div>
            <HoverEffect items={prestigeVintages} />
          </div>
        </ScrollReveal>

        {/* Sommelier Cellar & Bottle Gallery Strip (5 Images) */}
        <ScrollReveal>
          <div className="border-t border-[#C9A84C]/15 pt-8">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#C9A84C] font-medium">
                The Cellar Collection
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#F5F0E8]/40">
                Al-Qaisar Terroir Showcase
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {cellarGallery.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative h-48 sm:h-56 rounded-xl overflow-hidden border border-[#C9A84C]/20 bg-[#0c0c0c] shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
                >
                  <Image
                    src={item.image}
                    alt={item.altArabic}
                    fill
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={GOLD_BLUR_DATA_URL}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover brightness-[0.70] transition-transform duration-[400ms] ease-out group-hover:scale-105 group-hover:brightness-[0.90]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-3.5 flex flex-col justify-end">
                    <span className="font-serif text-sm text-[#F5F0E8] font-normal leading-snug">
                      {item.title}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-[#C9A84C] mt-0.5">
                      {item.subtitle}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
