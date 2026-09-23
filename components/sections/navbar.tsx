"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Menu, X, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Our Story", href: "#story" },
    { label: "The Chef", href: "#chef" },
    { label: "Signature", href: "#signature" },
    { label: "Menu", href: "#menu" },
    { label: "Ambiance", href: "#ambiance" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-5 flex items-center justify-between",
          isScrolled
            ? "bg-black/85 backdrop-blur-xl border-b border-[#C9A84C]/15 py-3.5 shadow-[0_12px_32px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        )}
      >
        <Link
          href="#hero"
          onClick={(e) => scrollToSection(e, "#hero")}
          className="group flex flex-col text-left"
        >
          <span className="font-script text-2xl text-[#C9A84C] leading-none transition-transform duration-300 group-hover:scale-105">
            Al-Qaisar
          </span>
          <span className="font-serif text-[9px] tracking-[0.26em] text-[#F5F0E8]/70 uppercase mt-0.5">
            Four Seasons
          </span>
        </Link>

        {/* Desktop Links with layoutId animated gold underline */}
        <div
          className="hidden lg:flex items-center gap-8"
          onMouseLeave={() => setHoveredLink(null)}
        >
          {navLinks.map((link) => {
            const isHovered = hoveredLink === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.href)}
                onClick={(e) => scrollToSection(e, link.href)}
                className="relative text-[11px] uppercase tracking-[0.24em] text-[#F5F0E8]/80 hover:text-[#C9A84C] transition-colors py-1.5 group"
              >
                <span className="relative z-10">{link.label}</span>
                {isHovered && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent shadow-[0_0_10px_rgba(201,168,76,0.85)]"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <Button
            variant="default"
            size="sm"
            onClick={() => {
              const el = document.getElementById("reserve");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Reserve a Table
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden p-2 text-[#C9A84C] hover:text-[#D4AF37] focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-6 p-8 lg:hidden"
          >
            <button
              onClick={() => setIsMobileOpen(false)}
              className="absolute top-6 right-6 text-[#C9A84C] p-2"
              aria-label="Close menu"
            >
              <X className="h-7 w-7" />
            </button>
            <div className="flex flex-col items-center gap-5">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.05 + idx * 0.05,
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="font-serif text-2xl font-light text-[#F5F0E8] hover:text-[#C9A84C] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.05 + navLinks.length * 0.05,
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Button
                variant="default"
                className="mt-6"
                onClick={() => {
                  setIsMobileOpen(false);
                  document.getElementById("reserve")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Reserve a Table
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
