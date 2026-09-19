"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ShimmerTextProps {
  children: React.ReactNode;
  className?: string;
  shimmerColor?: string;
}

export function ShimmerText({
  children,
  className,
  shimmerColor = "#E5D08F",
}: ShimmerTextProps) {
  return (
    <span
      className={cn(
        "inline-block bg-[linear-gradient(110deg,#F5F0E8,45%,var(--shimmer-color),55%,#C9A84C)] bg-[length:250%_100%] bg-clip-text text-transparent animate-shimmer",
        className
      )}
      style={
        {
          "--shimmer-color": shimmerColor,
        } as React.CSSProperties
      }
    >
      {children}
    </span>
  );
}
