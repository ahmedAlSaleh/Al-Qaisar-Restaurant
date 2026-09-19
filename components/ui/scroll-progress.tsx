"use client";

import React from "react";
import { motion, useScroll, type MotionProps } from "motion/react";
import { cn } from "@/lib/utils";

interface ScrollProgressProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {
  ref?: React.Ref<HTMLDivElement>;
}

export function ScrollProgress({
  className,
  ref,
  ...props
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      className={cn(
        "fixed inset-x-0 top-0 z-[9999] h-[2.5px] origin-left bg-gradient-to-r from-[#8B6914] via-[#D4AF37] to-[#F5F0E8] shadow-[0_0_12px_rgba(212,175,55,0.6)]",
        className
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props}
    />
  );
}
