"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Award } from "lucide-react";

export function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinkClasses =
    "relative inline-block text-left hover:text-[#C9A84C] transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-[#C9A84C] after:transition-all after:duration-300";

  return (
    <footer className="relative bg-[#070707] border-t border-[#C9A84C]/20 pt-20 pb-12 px-6 md:px-16 text-[#F5F0E8] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.07)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-[#C9A84C]/15 relative z-10">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <h2 className="font-serif text-2xl text-[#C9A84C] font-light tracking-wide">
            Al-Qaisar
          </h2>
          <span className="font-script text-base text-[#C9A84C]/70">
            Fine Dining at Four Seasons
          </span>
          <p className="text-xs text-[#F5F0E8]/50 leading-relaxed font-light mt-2 max-w-xs">
            Where the world&rsquo;s finest ingredients meet three decades of culinary mastery. An experience reserved for those who expect nothing less than extraordinary.
          </p>
          <div className="flex items-center gap-3 mt-4 text-[10px] text-[#C9A84C]/70 italic font-serif">
            <div className="w-8 h-[1px] bg-[#C9A84C]/40" />
            <span>Est. 1994 &middot; Dubai</span>
          </div>
        </div>

        {/* Explore Links */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[11px] uppercase tracking-[0.25em] text-[#C9A84C] font-medium mb-1">
            Explore
          </h4>
          <ul className="flex flex-col gap-2.5 text-xs text-[#F5F0E8]/60 font-light">
            <li>
              <button onClick={() => scrollTo("story")} className={navLinkClasses}>
                Our Story &amp; Heritage
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo("chef")} className={navLinkClasses}>
                Executive Chef Antoine Dubois
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo("signature")} className={navLinkClasses}>
                Signature Creations
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo("menu")} className={navLinkClasses}>
                À La Carte Menu
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo("ambiance")} className={navLinkClasses}>
                The Dining Ambiance
              </button>
            </li>
          </ul>
        </div>

        {/* Experiences Links */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[11px] uppercase tracking-[0.25em] text-[#C9A84C] font-medium mb-1">
            Experiences
          </h4>
          <ul className="flex flex-col gap-2.5 text-xs text-[#F5F0E8]/60 font-light">
            <li>
              <button onClick={() => scrollTo("reserve")} className={navLinkClasses}>
                Reserve a Table
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo("table")} className={navLinkClasses}>
                3D Interactive Dish
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo("wine")} className={navLinkClasses}>
                Sommelier Wine Cellar
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo("gallery")} className={navLinkClasses}>
                Visual Lightbox Gallery
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo("reviews")} className={navLinkClasses}>
                Guest Reviews &amp; Accolades
              </button>
            </li>
          </ul>
        </div>

        {/* Locations & Back to top */}
        <div className="flex flex-col gap-4 justify-between">
          <div className="flex flex-col gap-4">
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-[#C9A84C] font-medium mb-1">
              Our Locations
            </h4>

            <div className="pl-3 border-l border-[#C9A84C]/30 flex flex-col gap-1 text-xs text-[#F5F0E8]/60 font-light">
              <strong className="text-[#F5F0E8] font-serif text-sm">Four Seasons Downtown</strong>
              <span>Al-Qaisar, Level 2</span>
              <span>Downtown Dubai, UAE</span>
              <a href="tel:+97142707777" className="text-[#C9A84C] text-[11px] mt-0.5 hover:underline">
                +971 4 270 7777
              </a>
            </div>

            <div className="pl-3 border-l border-[#C9A84C]/30 flex flex-col gap-1 text-xs text-[#F5F0E8]/60 font-light">
              <strong className="text-[#F5F0E8] font-serif text-sm">Four Seasons DIFC</strong>
              <span>Al-Qaisar, Level 5</span>
              <span>DIFC, Dubai, UAE</span>
              <a href="tel:+97142707888" className="text-[#C9A84C] text-[11px] mt-0.5 hover:underline">
                +971 4 270 7888
              </a>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="group flex items-center gap-2.5 text-[10px] tracking-[0.25em] uppercase text-[#C9A84C]/70 hover:text-[#C9A84C] transition-colors"
            >
              <span>Back to Top</span>
              <div className="w-7 h-7 rounded-full border border-[#C9A84C]/30 flex items-center justify-center group-hover:border-[#C9A84C] group-hover:-translate-y-0.5 transition-all bg-black/40">
                <ArrowUp className="w-3.5 h-3.5 text-[#C9A84C]" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Accolades Bar */}
      <div className="max-w-7xl mx-auto py-6 border-b border-[#C9A84C]/10 flex flex-wrap items-center justify-center sm:justify-between gap-4 text-[10px] uppercase tracking-[0.25em] text-[#C9A84C]/60 font-serif">
        <div className="flex items-center gap-2">
          <Award className="w-3.5 h-3.5 text-[#C9A84C]" />
          <span>Michelin Guide &middot; Three Stars</span>
        </div>
        <div className="flex items-center gap-2">
          <Award className="w-3.5 h-3.5 text-[#C9A84C]" />
          <span>Forbes Travel Guide &middot; 5-Star Award</span>
        </div>
        <div className="flex items-center gap-2">
          <Award className="w-3.5 h-3.5 text-[#C9A84C]" />
          <span>Les Grandes Tables du Monde</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#F5F0E8]/40 font-light">
        <p>&copy; {new Date().getFullYear()} Al-Qaisar &middot; Four Seasons Hotels &amp; Resorts</p>
        <div className="flex items-center gap-3">
          <span className="hover:text-[#C9A84C] cursor-pointer transition-colors">Instagram</span>
          <span>&middot;</span>
          <span className="hover:text-[#C9A84C] cursor-pointer transition-colors">Facebook</span>
          <span>&middot;</span>
          <span className="hover:text-[#C9A84C] cursor-pointer transition-colors">X</span>
        </div>
        <p className="font-script text-base text-[#C9A84C]/60">
          Crafted with passion &middot; Served with excellence
        </p>
      </div>

      {/* Creator Credit Line */}
      <div className="max-w-7xl mx-auto pt-6 mt-6 border-t border-[#C9A84C]/10 flex items-center justify-center text-[12px] tracking-[0.18em] text-[#F5F0E8]/50">
        <a
          href="https://t.me/ahmedalsaleh98"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 hover:text-[#C9A84C] transition-colors duration-300"
        >
          <span>Created by</span>
          <span className="text-[#C9A84C] font-medium underline underline-offset-4 decoration-[#C9A84C]/40 group-hover:decoration-[#C9A84C] transition-all">
            Ahmed Al-Saleh
          </span>
        </a>
      </div>
    </footer>
  );
}
