"use client";

import React from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { GOLD_BLUR_DATA_URL } from "@/lib/utils";

export function SignatureSection() {
  const dishes = [
    {
      title: "Wagyu Tenderloin Rossini",
      desc: "A5 Miyazaki Wagyu, Seared Foie Gras, Black Périgord Truffle, Château Pétrus 30-year Reduction",
      price: "AED 680",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1000&q=80&auto=format&fit=crop",
      altArabic: "شريحة لحم واغيو مايازاكي A5 الفاخرة مع كبد الإوز وصلصة الترافل الأسود الملكية",
      className: "md:col-span-2 md:row-span-2",
      badge: "Premier Masterwork",
      isHero: true,
    },
    {
      title: "Maine Lobster Bisque & Tail",
      desc: "Butter-Poached Whole Maine Lobster, Kashmiri Saffron Bisque, Cognac Foam, Oscietra Caviar",
      price: "AED 420",
      image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=700&q=80&auto=format&fit=crop",
      altArabic: "ذيل كركند مين بالزبدة مع حساء الزعفران الكشميري والكافيار الفاخر",
      className: "md:col-span-1",
      badge: "Seafood Haute Cuisine",
      isHero: false,
    },
    {
      title: "Côte de Bœuf Al-Qaisar",
      desc: "Dry-Aged 60 Days, Périgord Truffle Butter, Charred Bone Marrow, Heirloom Heritage Vegetables",
      price: "AED 780",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=700&q=80&auto=format&fit=crop",
      altArabic: "لحم ريب آي معتق 60 يوماً مع زبدة الكمأة ونخاع العظم المشوي في مطعم القيصر",
      className: "md:col-span-1",
      badge: "Woodfire Grill",
      isHero: false,
    },
    {
      title: "Tagliolini al Tartufo Nero",
      desc: "Hand-Rolled 40-Yolk Egg Pasta, Generously Shaved Black Truffle, 36-Month Aged Vacche Rosse Parmesan",
      price: "AED 320",
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=700&q=80&auto=format&fit=crop",
      altArabic: "باستا تاليوليني إيطالية يدوية برقائق الكمأة السوداء وجبن البارميزان المعتق",
      className: "md:col-span-1",
      badge: "Artisanal Pasta",
      isHero: false,
    },
    {
      title: "Imperial Beluga Caviar Service",
      desc: "Imperial Caspian Beluga Caviar, Warm Buckwheat Blinis, Crème Fraîche, Quail Egg Mimosa",
      price: "AED 950",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=700&q=80&auto=format&fit=crop",
      altArabic: "كافيار بيلوغا إمبراطوري فاخر يقدم مع فطائر البيليني والكريمة الطازجة",
      className: "md:col-span-1",
      badge: "Caviar Service",
      isHero: false,
    },
    {
      title: "Hokkaido Diver Scallop Carpaccio",
      desc: "Thinly Sliced Wild Hokkaido Scallops, Japanese Yuzu Gel, Shiso Oil, Kaluga Hybrid Pearls",
      price: "AED 340",
      image: "https://images.unsplash.com/photo-1539136788836-5699e78bfc75?w=700&q=80&auto=format&fit=crop",
      altArabic: "كارباتشيو إسكالوب هوكايدو البحري الطازج مع لمسات اليوزو الياباني ولآلئ الكافيار",
      className: "md:col-span-1",
      badge: "Raw Bar Elegance",
      isHero: false,
    },
    {
      title: "Soufflé Glacé Vanille Royale",
      desc: "Bourbon-Madagascar Vanilla Bean, 24K Edible Gold Leaf, Vintage Champagne Sorbet, Candied Praline",
      price: "AED 185",
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=700&q=80&auto=format&fit=crop",
      altArabic: "سوفليه الفانيليا الملكية مع أوراق الذهب الخالص عيار 24 وسوربيه الشمبانيا",
      className: "md:col-span-1",
      badge: "Haute Pâtisserie",
      isHero: false,
    },
    {
      title: "Valrhona Grand Cru Chocolate Sphere",
      desc: "Single-Origin 70% Dark Chocolate Sphere, Hazelnut Feuilletine, Warm Spiced Salted Caramel Pour",
      price: "AED 210",
      image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?w=900&q=80&auto=format&fit=crop",
      altArabic: "كرة شوكولاتة فالرونا الداكنة الفاخرة مع البرالينيه وصوص الكراميل الساخن المذاب",
      className: "md:col-span-2",
      badge: "Grand Finale",
      isHero: false,
    },
  ];

  return (
    <section id="signature" className="py-28 px-6 md:px-16 bg-[#080808] relative overflow-hidden">
      {/* Ambient background light — stronger gold warmth */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,168,76,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(201,168,76,0.08)_0%,transparent_70%)] filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(201,168,76,0.05)_0%,transparent_70%)] filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.45em] text-[#C9A84C] mb-2 block font-medium">
            Culinary Masterworks
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#F5F0E8] leading-tight">
            Signature <em className="italic text-[#C9A84C] font-normal">Creations</em>
          </h2>
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto my-5 shadow-[0_0_8px_rgba(201,168,76,0.5)]" />
          <p className="text-xs sm:text-sm text-[#F5F0E8]/60 max-w-xl mx-auto leading-relaxed font-light">
            Each creation is an exploration of sensory equilibrium &mdash; fusing rare global ingredients with contemporary French mastery.
          </p>
        </ScrollReveal>

        <BentoGrid>
          {dishes.map((dish, i) => {
            const itemContent = (
              <BentoGridItem
                className={dish.isHero ? "h-full min-h-[400px] md:min-h-[460px]" : dish.className}
                title={dish.title}
                description={dish.desc}
                price={dish.price}
                icon={
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#C9A84C] border border-[#C9A84C]/35 px-2.5 py-0.5 rounded-full bg-[#C9A84C]/10">
                    {dish.badge}
                  </span>
                }
                header={
                  <div className={`relative w-full rounded-xl overflow-hidden ${dish.isHero ? "h-64 sm:h-72 md:h-80" : "h-44 sm:h-48"}`}>
                    <Image
                      src={dish.image}
                      alt={dish.altArabic}
                      fill
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={GOLD_BLUR_DATA_URL}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover brightness-[0.88] transition-all duration-[400ms] ease-out group-hover/bento:scale-105 group-hover/bento:brightness-[1.0]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  </div>
                }
              />
            );

            if (dish.isHero) {
              return (
                <div key={i} className={dish.className}>
                  <BackgroundGradient containerClassName="h-full w-full rounded-2xl">
                    {itemContent}
                  </BackgroundGradient>
                </div>
              );
            }

            return <React.Fragment key={i}>{itemContent}</React.Fragment>;
          })}
        </BentoGrid>
      </div>
    </section>
  );
}
