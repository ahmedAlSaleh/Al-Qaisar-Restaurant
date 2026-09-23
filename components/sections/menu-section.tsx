"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { TransitionPanel } from "@/components/ui/transition-panel";
import { ScrollReveal } from "@/components/effects/scroll-reveal";

export function MenuSection() {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    { id: "appetizers", label: "Appetizers" },
    { id: "mains", label: "Main Courses" },
    { id: "desserts", label: "Desserts" },
    { id: "beverages", label: "Beverages" },
  ];

  const menuData = {
    appetizers: [
      {
        title: "Beluga Caviar",
        desc: "Iranian Caspian, Warm Blinis, Crème Fraîche, Chives",
        price: "AED 480",
        tags: ["Luxury", "Seasonal"],
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&q=75&auto=format&fit=crop",
      },
      {
        title: "Oysters Rockefeller",
        desc: "Fine de Claire N°2, Baby Spinach, Pernod Cream, Champagne Mignonette",
        price: "AED 220",
        tags: ["Seafood"],
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=200&q=75&auto=format&fit=crop",
      },
      {
        title: "Foie Gras Torchon",
        desc: "Duck Foie Gras, Sauternes Gelée, Toasted Brioche, Micro Herbs",
        price: "AED 280",
        tags: ["Classic", "French"],
        image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=200&q=75&auto=format&fit=crop",
      },
      {
        title: "Bluefin Tuna Tartare",
        desc: "Otoro Belly, Wasabi Crème, Sesame Crisp, Yuzu Vinaigrette",
        price: "AED 195",
        tags: ["Japanese"],
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&q=75&auto=format&fit=crop",
      },
    ],
    mains: [
      {
        title: "A5 Wagyu Tenderloin",
        desc: "Miyazaki, Truffle Jus, Potato Dauphine, Glazed White Asparagus",
        price: "AED 680",
        tags: ["Signature"],
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=200&q=75&auto=format&fit=crop",
      },
      {
        title: "Rack of Lamb Provençal",
        desc: "New Zealand, Herb-Crusted, Lamb Reduction, Ratatouille Tart",
        price: "AED 450",
        tags: ["Lamb"],
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&q=75&auto=format&fit=crop",
      },
      {
        title: "Whole Roasted Lobster",
        desc: "Maine Lobster, Butter Thermidor, Black Truffle Risotto, Chervil",
        price: "AED 580",
        tags: ["Seafood"],
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=200&q=75&auto=format&fit=crop",
      },
      {
        title: "Wild Atlantic Halibut",
        desc: "Champagne Beurre Blanc, Saffron Turned Vegetables, Sea Asparagus",
        price: "AED 380",
        tags: ["Fish"],
        image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=200&q=75&auto=format&fit=crop",
      },
    ],
    desserts: [
      {
        title: "Al-Qaisar Soufflé",
        desc: "Madagascar Bourbon Vanilla, Warm Crème Anglaise, Wild Raspberries",
        price: "AED 145",
        tags: ["Warm"],
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=200&q=75&auto=format&fit=crop",
      },
      {
        title: "Valrhona Chocolate Sphere",
        desc: "Manjari 64%, Praline Mousse, Salted Caramel, 24K Gold Leaf",
        price: "AED 185",
        tags: ["Chocolate"],
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&q=75&auto=format&fit=crop",
      },
      {
        title: "Millefeuille Royal",
        desc: "Caramelized Puff Pastry, Diplomate Cream, Champagne Jelly",
        price: "AED 165",
        tags: ["French"],
        image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=200&q=75&auto=format&fit=crop",
      },
      {
        title: "Mignardises Collection",
        desc: "Twelve House Petit Fours, Seasonal Confections, Artisan Truffles",
        price: "AED 120",
        tags: ["Petit Fours"],
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&q=75&auto=format&fit=crop",
      },
    ],
    beverages: [
      {
        title: "Dom Pérignon 2013",
        desc: "Épernay, France · Blanc de Blancs · Per Glass / Bottle",
        price: "AED 280",
        tags: ["Champagne"],
        image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=200&q=75&auto=format&fit=crop",
      },
      {
        title: "Château Margaux 2015",
        desc: "Margaux AOC, Bordeaux · First Growth · Full Bottle",
        price: "AED 3,200",
        tags: ["Bordeaux"],
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=200&q=75&auto=format&fit=crop",
      },
      {
        title: "Al-Qaisar Royal Elixir",
        desc: "Sparkling Jasmine, Rose Water, Saffron Honey, Gold Flakes",
        price: "AED 85",
        tags: ["Non-Alcoholic"],
        image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=200&q=75&auto=format&fit=crop",
      },
      {
        title: "Macallan 25 Year",
        desc: "Speyside Single Malt · Sherry Oak Cask · 43% ABV",
        price: "AED 950",
        tags: ["Whisky"],
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=200&q=75&auto=format&fit=crop",
      },
    ],
  };

  const panelVariants = {
    enter: { opacity: 0, y: 15, filter: "blur(4px)" },
    center: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: -15, filter: "blur(4px)" },
  };

  const panels = Object.entries(menuData).map(([key, items]) => (
    <div key={key} className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="flex items-center gap-4 p-4 rounded-xl border border-[#C9A84C]/20 bg-[#141414]/90 backdrop-blur-sm transition-all duration-300 hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/10 group shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
        >
          <div className="relative w-20 h-16 rounded-lg overflow-hidden shrink-0 border border-[#C9A84C]/25">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="80px"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-serif text-base text-[#F5F0E8] font-normal truncate">
              {item.title}
            </h4>
            <p className="text-[11px] text-[#F5F0E8]/50 line-clamp-1 mt-0.5 font-light">
              {item.desc}
            </p>
            <div className="flex gap-1.5 mt-2">
              {item.tags.map((t, ti) => (
                <span
                  key={ti}
                  className="text-[9px] uppercase tracking-wider text-[#C9A84C] border border-[#C9A84C]/30 bg-[#C9A84C]/10 px-2 py-0.5 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <span className="font-serif italic text-base text-[#C9A84C] shrink-0 font-normal">
            {item.price}
          </span>
        </div>
      ))}
    </div>
  ));

  return (
    <section id="menu" className="py-28 px-6 md:px-16 bg-[#080808] relative overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-80 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(201,168,76,0.07)_0%,transparent_70%)] filter blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-14">
          <span className="text-[10px] uppercase tracking-[0.45em] text-[#C9A84C] mb-2 block font-medium">
            À La Carte
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#F5F0E8] leading-tight">
            The <em className="italic text-[#C9A84C] font-normal">Menu</em>
          </h2>
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto my-5 shadow-[0_0_8px_rgba(201,168,76,0.5)]" />
        </ScrollReveal>

        {/* Motion Primitives AnimatedBackground Morphing Pill Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center p-1.5 rounded-2xl border border-[#C9A84C]/30 bg-[#141414]/90 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
            <AnimatedBackground
              defaultValue={categories[0].id}
              className="rounded-xl bg-[#C9A84C] shadow-[0_0_15px_rgba(201,168,76,0.4)]"
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 0.35,
              }}
              onValueChange={(newId) => {
                const index = categories.findIndex((c) => c.id === newId);
                if (index !== -1) setActiveTab(index);
              }}
            >
              {categories.map((tab, i) => (
                <button
                  key={tab.id}
                  data-id={tab.id}
                  type="button"
                  className={`px-5 py-2 text-xs uppercase tracking-widest transition-colors duration-200 font-medium ${
                    activeTab === i
                      ? "text-black font-semibold"
                      : "text-[#F5F0E8]/70 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </AnimatedBackground>
          </div>
        </div>

        {/* Motion Primitives TransitionPanel with Directional Fade */}
        <div className="w-full">
          <TransitionPanel
            activeIndex={activeTab}
            variants={panelVariants}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {panels}
          </TransitionPanel>
        </div>
      </div>
    </section>
  );
}
