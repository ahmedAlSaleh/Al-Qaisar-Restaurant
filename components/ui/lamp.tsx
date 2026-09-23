"use client";
import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-background w-full z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 0.8 : 0.4, width: shouldReduceMotion ? "30rem" : "15rem" }}
          whileInView={{ opacity: 0.9, width: "30rem" }}
          viewport={{ once: true }}
          transition={{
            delay: shouldReduceMotion ? 0 : 0.2,
            duration: shouldReduceMotion ? 0.35 : 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-64 overflow-visible w-[30rem] bg-gradient-conic from-[#C9A84C]/50 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-background h-44 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-44 h-[100%] left-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 0.8 : 0.4, width: shouldReduceMotion ? "30rem" : "15rem" }}
          whileInView={{ opacity: 0.9, width: "30rem" }}
          viewport={{ once: true }}
          transition={{
            delay: shouldReduceMotion ? 0 : 0.2,
            duration: shouldReduceMotion ? 0.35 : 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-64 w-[30rem] bg-gradient-conic from-transparent via-transparent to-[#C9A84C]/50 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-44 h-[100%] right-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-background h-44 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-background blur-xl"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.4)_0%,transparent_70%)]"></div>
        <motion.div
          initial={{ width: shouldReduceMotion ? "18rem" : "8rem" }}
          whileInView={{ width: "18rem" }}
          viewport={{ once: true }}
          transition={{
            delay: shouldReduceMotion ? 0 : 0.2,
            duration: shouldReduceMotion ? 0 : 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-72 -translate-y-[6rem] rounded-full bg-amber-400/25 blur-2xl"
        />
        <motion.div
          initial={{ width: shouldReduceMotion ? "32rem" : "15rem" }}
          whileInView={{ width: "32rem" }}
          viewport={{ once: true }}
          transition={{
            delay: shouldReduceMotion ? 0 : 0.2,
            duration: shouldReduceMotion ? 0 : 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[32rem] -translate-y-[7rem] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent shadow-[0_0_15px_rgba(201,168,76,0.6)]"
        />

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-background"></div>
      </div>

      <div className="relative z-50 flex -translate-y-64 sm:-translate-y-72 flex-col items-center px-5 max-w-5xl mx-auto w-full">
        {children}
      </div>
    </div>
  );
};
