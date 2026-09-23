"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, useReducedMotion } from "motion/react";

export function FollowerPointer() {
  const shouldReduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Fast direct follower for central dot
  const leadSpring = { damping: 35, stiffness: 600, mass: 0.1 };
  const leadX = useSpring(mouseX, leadSpring);
  const leadY = useSpring(mouseY, leadSpring);

  // Smooth spring-follow for trailing gold dot
  const trailSpring = { damping: 24, stiffness: 280, mass: 0.2 };
  const trailX = useSpring(mouseX, trailSpring);
  const trailY = useSpring(mouseY, trailSpring);

  useEffect(() => {
    // Only activate on devices with a fine pointer (desktop mouse/trackpad)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsDesktop(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
    };
    mediaQuery.addEventListener("change", handleMediaChange);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = !!target.closest("button, a, [role='button'], input, select, textarea");
      setIsHovered((prev) => (prev !== interactive ? interactive : prev));
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!isDesktop) return null;

  return (
    <>
      {/* 1. Trailing Gold Dot (spring-follow, blend-mode: screen, desktop only) */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full bg-gradient-to-br from-[#F5E4A8] via-[#D4AF37] to-[#C9A84C] shadow-[0_0_18px_rgba(212,175,55,0.75)]"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovered ? 26 : 14,
          height: isHovered ? 26 : 14,
          mixBlendMode: "screen",
          opacity: shouldReduceMotion ? 0.4 : 0.85,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      />

      {/* 2. Central Precision Dot */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-[#F5F0E8] shadow-[0_0_8px_rgba(255,255,255,0.9)]"
        style={{
          x: leadX,
          y: leadY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovered ? 8 : 5,
          height: isHovered ? 8 : 5,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />

      {/* 3. Soft fluid aura ring */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9997] rounded-full border border-[#C9A84C]/45 shadow-[0_0_16px_rgba(201,168,76,0.2)]"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovered ? 52 : 36,
          height: isHovered ? 52 : 36,
          mixBlendMode: "screen",
          opacity: shouldReduceMotion ? 0.25 : 0.6,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
    </>
  );
}
