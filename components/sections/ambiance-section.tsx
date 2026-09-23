"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { TransitionPanel } from "@/components/ui/transition-panel";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { ScrollReveal } from "@/components/effects/scroll-reveal";

export function AmbianceSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const scenes = [
    {
      id: "dining",
      label: "Dining Hall",
      title: "The Grand",
      sub: "Dining Hall",
      desc: "140 seats arranged in a breathtaking architectural space of Nero Marquina black marble, bespoke gold fixtures, and hand-painted French ceiling murals.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80&auto=format&fit=crop",
    },
    {
      id: "kitchen",
      label: "Open Kitchen",
      title: "The Open",
      sub: "Kitchen Theatre",
      desc: "Watch Chef Antoine and his brigade of 24 create culinary masterworks in real time. The exclusive chef's counter seats just 8 privileged guests.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80&auto=format&fit=crop",
    },
    {
      id: "terrace",
      label: "Night Terrace",
      title: "The Night",
      sub: "Terrace",
      desc: "Al fresco dining under the stars with panoramic views of the skyline, ambient candlelight, and gentle acoustic jazz.",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1600&q=80&auto=format&fit=crop",
    },
  ];

  const current = scenes[activeIndex];

  const textVariants = {
    enter: { opacity: 0, y: 20, filter: "blur(6px)" },
    center: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: -20, filter: "blur(6px)" },
  };

  const textPanels = scenes.map((scene) => (
    <div key={scene.id} className="max-w-xl">
      <span className="text-[10px] uppercase tracking-[0.45em] text-[#C9A84C] mb-2 block font-medium">
        Atmosphere & Architecture
      </span>
      <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#F5F0E8] leading-tight mb-3">
        {scene.title} <br />
        <em className="font-script text-[1.25em] text-[#C9A84C] italic font-normal">
          {scene.sub}
        </em>
      </h2>
      <div className="w-16 h-[1px] bg-gradient-to-r from-[#C9A84C] to-transparent my-4 shadow-[0_0_8px_rgba(201,168,76,0.6)]" />
      <p className="text-xs sm:text-sm text-[#F5F0E8]/70 leading-relaxed font-light max-w-md">
        {scene.desc}
      </p>
    </div>
  ));

  return (
    <section id="ambiance" className="relative h-screen w-full overflow-hidden flex items-end justify-start bg-black">
      {/* Dynamic Background Image with Smooth Cross-Fade */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={current.image}
            alt={current.title}
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-[0.55]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay with Motion Primitives TransitionPanel */}
      <div className="relative z-10 p-8 sm:p-16 max-w-xl pb-28 sm:pb-32">
        <ScrollReveal>
          <TransitionPanel
            activeIndex={activeIndex}
            variants={textVariants}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {textPanels}
          </TransitionPanel>
        </ScrollReveal>
      </div>

      {/* Switcher Controls with AnimatedBackground */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center p-1 rounded-full border border-[#C9A84C]/30 bg-black/75 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
          <AnimatedBackground
            defaultValue={scenes[0].id}
            className="rounded-full bg-[#C9A84C] shadow-[0_0_15px_rgba(201,168,76,0.5)]"
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.35,
            }}
            onValueChange={(newId) => {
              const index = scenes.findIndex((s) => s.id === newId);
              if (index !== -1) setActiveIndex(index);
            }}
          >
            {scenes.map((scene, idx) => (
              <button
                key={scene.id}
                data-id={scene.id}
                type="button"
                className={`px-5 py-2 text-[10px] uppercase tracking-[0.25em] transition-colors duration-200 font-medium ${
                  activeIndex === idx
                    ? "text-black font-semibold"
                    : "text-[#F5F0E8]/60 hover:text-white"
                }`}
              >
                {scene.label}
              </button>
            ))}
          </AnimatedBackground>
        </div>
      </div>
    </section>
  );
}
