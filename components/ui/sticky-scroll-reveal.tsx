"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, useReducedMotion } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    era?: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#080808",
    "#050505",
    "#0a0a0a",
  ];

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-[34rem] justify-center space-x-10 overflow-y-auto rounded-2xl border border-[#C9A84C]/20 p-8 sm:p-12 scrollbar-none bg-[#080808]/90 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
      ref={ref}
    >
      <div className="relative flex items-start px-4 flex-1">
        <div className="max-w-xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-16 first:mt-6 last:mb-24">
              {item.era && (
                <motion.span
                  animate={{
                    opacity: activeCard === index ? 1 : 0.35,
                  }}
                  className="font-serif italic text-2xl text-[#C9A84C] block mb-2"
                >
                  {item.era}
                </motion.span>
              )}
              <motion.h3
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.35,
                }}
                className="font-serif text-2xl sm:text-3xl font-light text-[#F5F0E8] leading-snug"
              >
                {item.title}
              </motion.h3>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 0.8 : 0.25,
                }}
                className="text-xs sm:text-sm mt-4 text-[#F5F0E8]/70 leading-relaxed font-light"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-32" />
        </div>
      </div>
      <div
        className={cn(
          "sticky top-8 hidden h-72 w-80 sm:w-96 overflow-hidden rounded-xl border border-[#C9A84C]/30 bg-black/80 lg:block shadow-[0_10px_30px_rgba(0,0,0,0.8)]",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
