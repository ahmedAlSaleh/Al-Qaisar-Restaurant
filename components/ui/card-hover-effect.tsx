"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import React, { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    region?: string;
    year?: string;
    link?: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 py-6",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="relative group block p-1.5 h-full w-full cursor-pointer"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && !shouldReduceMotion && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[#C9A84C]/15 border border-[#C9A84C]/35 block rounded-2xl shadow-[0_0_25px_rgba(201,168,76,0.12)]"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.2 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.1 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="flex items-center justify-between mb-2">
              {item.year && (
                <span className="font-serif italic text-sm text-[#C9A84C]">
                  {item.year}
                </span>
              )}
              {item.region && (
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#F5F0E8]/50">
                  {item.region}
                </span>
              )}
            </div>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl h-full w-full p-5 overflow-hidden bg-[#0D0D0D]/90 border border-[#C9A84C]/20 transition-all duration-300 relative z-20 group-hover:border-[#C9A84C]/50 backdrop-blur-sm",
        className
      )}
    >
      <div className="relative z-50">
        <div>{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("font-serif text-lg text-[#F5F0E8] font-normal tracking-wide", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-2 text-xs text-[#F5F0E8]/60 tracking-wider leading-relaxed font-light",
        className
      )}
    >
      {children}
    </p>
  );
};
