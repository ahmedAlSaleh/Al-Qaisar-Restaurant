"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LogoMarqueeProps {
  items: string[];
  className?: string;
  speed?: number;
}

export function LogoMarquee({
  items,
  className,
}: LogoMarqueeProps) {
  return (
    <div
      className={cn(
        "relative flex overflow-hidden user-select-none [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
        className
      )}
    >
      <div className="flex shrink-0 animate-marquee items-center justify-around gap-12 py-4">
        {items.concat(items).map((item, index) => (
          <span
            key={index}
            className="font-serif italic text-sm tracking-[0.25em] text-[#F5F0E8]/35 uppercase whitespace-nowrap hover:text-[#C9A84C] transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
      <div
        aria-hidden="true"
        className="flex shrink-0 animate-marquee items-center justify-around gap-12 py-4"
      >
        {items.concat(items).map((item, index) => (
          <span
            key={`dup-${index}`}
            className="font-serif italic text-sm tracking-[0.25em] text-[#F5F0E8]/35 uppercase whitespace-nowrap hover:text-[#C9A84C] transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
