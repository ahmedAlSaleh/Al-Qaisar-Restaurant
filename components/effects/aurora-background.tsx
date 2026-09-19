"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
}

export function AuroraBackground({
  className,
  children,
  ...props
}: AuroraBackgroundProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center bg-black transition-bg",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [0.35, 0.55, 0.35],
                  scale: [1, 1.05, 1],
                }
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -inset-[10px] opacity-40 filter blur-[80px] will-change-transform"
          style={{
            background:
              "radial-gradient(ellipse at 50% 20%, rgba(201,168,76,0.22) 0%, rgba(139,105,20,0.12) 35%, transparent 70%), radial-gradient(ellipse at 80% 50%, rgba(212,175,55,0.12) 0%, transparent 60%)",
          }}
        />
      </div>
      {children}
    </div>
  );
}
