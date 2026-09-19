"use client";

import React from "react";
import { RoyalDishCanvas } from "@/components/three/royal-dish-canvas";
import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { CardSpotlight } from "@/components/ui/card-spotlight";

export function RoyalTableSection() {
  const ingredients = [
    {
      num: "01",
      title: "A5 Wagyu Tenderloin",
      desc: "Miyazaki Prefecture, Japan · Marble Score 12",
    },
    {
      num: "02",
      title: "Black Périgord Truffle",
      desc: "Dordogne, France · Peak Winter Harvest",
    },
    {
      num: "03",
      title: "Iranian Beluga Caviar",
      desc: "Caspian Sea · 00 Grade Excellence",
    },
    {
      num: "04",
      title: "Saffron Gold Sauce",
      desc: "Kashmir Reserve · 24K Gold Leaf Finish",
    },
  ];

  return (
    <section id="table" className="relative min-h-screen flex items-center py-24 px-6 md:px-16 bg-[#0B0B0B] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_70%)] filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* 3D Canvas Presentation inside Aceternity 3D Card Container */}
        <div className="relative flex flex-col items-center justify-center w-full">
          <CardContainer className="inter-var w-full" containerClassName="py-4 w-full">
            <CardBody className="relative group/card border border-[#C9A84C]/25 bg-black/60 backdrop-blur-md w-full sm:w-[480px] lg:w-[520px] h-[460px] sm:h-[500px] rounded-2xl p-6 flex flex-col items-center justify-between shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(201,168,76,0.1)]">
              {/* Card top badge */}
              <div className="w-full flex items-center justify-between z-20">
                <CardItem translateZ="30" className="text-[10px] uppercase tracking-[0.3em] text-[#C9A84C] font-medium">
                  Signature Composition
                </CardItem>
                <CardItem translateZ="30" className="text-[10px] uppercase tracking-[0.2em] text-[#F5F0E8]/40">
                  Four Seasons Spec
                </CardItem>
              </div>

              {/* 3D WebGL Dish with translation depth */}
              <CardItem translateZ="60" className="w-full h-[320px] sm:h-[350px] relative flex items-center justify-center">
                <RoyalDishCanvas />

                {/* Realistic rising steam effect */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-20 h-20 pointer-events-none">
                  <div className="absolute bottom-0 left-[25%] w-2 h-2 rounded-full bg-white/40 blur-sm animate-pulse" />
                  <div className="absolute bottom-0 left-[50%] w-2 h-2 rounded-full bg-white/40 blur-sm animate-pulse delay-300" />
                  <div className="absolute bottom-0 left-[75%] w-2 h-2 rounded-full bg-white/40 blur-sm animate-pulse delay-700" />
                </div>
              </CardItem>

              {/* Bottom interaction cue */}
              <CardItem translateZ="40" className="w-full text-center">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A84C]/60 whitespace-nowrap font-medium">
                  Drag to rotate &nbsp;&middot;&nbsp; 3D Interactive Model
                </span>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>

        {/* Content & Ingredient Decomposition with Aceternity CardSpotlight */}
        <div className="flex flex-col justify-center">
          <ScrollReveal>
            <span className="text-[10px] uppercase tracking-[0.45em] text-[#C9A84C] mb-2 block font-medium">
              The Royal Table
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#F5F0E8] leading-tight mb-4">
              Crafted With <br />
              <em className="italic text-[#C9A84C] font-normal">Obsessive</em> Precision
            </h2>
            <div className="w-16 h-[1px] bg-gradient-to-r from-[#C9A84C] to-transparent my-4" />
            <p className="text-xs sm:text-sm text-[#F5F0E8]/60 leading-relaxed font-light mb-8 max-w-lg">
              Each plate is a canvas. Our Executive Chef transforms the world&rsquo;s rarest ingredients into transcendent culinary architecture that engages every sense.
            </p>

            <div className="flex flex-col gap-3.5">
              {ingredients.map((item, idx) => (
                <CardSpotlight
                  key={idx}
                  radius={220}
                  className="p-4 transition-all duration-300 hover:border-[#C9A84C]/50 hover:translate-x-1.5"
                >
                  <div className="flex items-center gap-5">
                    <span className="font-serif italic text-xl text-[#C9A84C]/50 min-w-[2.2rem]">
                      {item.num}
                    </span>
                    <div>
                      <h4 className="font-serif text-base text-[#F5F0E8] font-normal tracking-wide">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-[#F5F0E8]/50 tracking-wider font-light mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </CardSpotlight>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
