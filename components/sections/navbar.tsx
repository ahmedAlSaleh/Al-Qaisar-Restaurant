"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

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

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="relative text-[11px] uppercase tracking-[0.24em] text-[#F5F0E8]/80 hover:text-[#C9A84C] transition-colors py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C9A84C] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
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
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-6 p-8 lg:hidden animate-in fade-in-0 duration-300">
          <button
            onClick={() => setIsMobileOpen(false)}
            className="absolute top-6 right-6 text-[#C9A84C] p-2"
          >
            <X className="h-7 w-7" />
          </button>
          <div className="flex flex-col items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="font-serif text-2xl font-light text-[#F5F0E8] hover:text-[#C9A84C] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
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
        </div>
      )}
    </>
  );
}
