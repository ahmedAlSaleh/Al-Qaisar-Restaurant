"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import {
  Calendar,
  Utensils,
  Wine,
  Sparkles,
  Award,
  Sun,
  Moon,
  Compass,
} from "lucide-react";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-2 rounded-full border border-[#C9A84C]/30 bg-black/75 px-4 py-2 text-[11px] uppercase tracking-widest text-[#F5F0E8]/70 backdrop-blur-md transition-colors hover:border-[#C9A84C] hover:text-[#C9A84C]"
      >
        <Compass className="h-3.5 w-3.5 text-[#C9A84C]" />
        <span>Menu & Navigation</span>
        <kbd className="pointer-events-none ml-2 inline-flex h-4 select-none items-center gap-1 rounded border border-[#C9A84C]/25 bg-black/50 px-1.5 font-mono text-[9px] font-medium text-[#C9A84C]">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search culinary masterworks, wines, reservations..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Quick Navigation">
            <CommandItem onSelect={() => runCommand(() => scrollTo("reserve"))}>
              <Calendar className="mr-2 h-4 w-4 text-[#C9A84C]" />
              <span>Reserve a Table</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => scrollTo("menu"))}>
              <Utensils className="mr-2 h-4 w-4 text-[#C9A84C]" />
              <span>À La Carte Menu</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => scrollTo("signature"))}>
              <Sparkles className="mr-2 h-4 w-4 text-[#C9A84C]" />
              <span>Signature Creations</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => scrollTo("table"))}>
              <Sparkles className="mr-2 h-4 w-4 text-[#C9A84C]" />
              <span>3D Royal Dish Experience</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => scrollTo("wine"))}>
              <Wine className="mr-2 h-4 w-4 text-[#C9A84C]" />
              <span>Sommelier Wine Cellar</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => scrollTo("chef"))}>
              <Award className="mr-2 h-4 w-4 text-[#C9A84C]" />
              <span>Chef Antoine Dubois</span>
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="Featured Signature Dishes">
            <CommandItem onSelect={() => runCommand(() => scrollTo("signature"))}>
              <span>Wagyu Tenderloin Rossini (A5 Miyazaki)</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => scrollTo("signature"))}>
              <span>Maine Lobster Bisque with Oscietra Caviar</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => scrollTo("signature"))}>
              <span>Côte de Bœuf Al-Qaisar (Dry-Aged 60 Days)</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => scrollTo("signature"))}>
              <span>Soufflé Glacé Vanille Royale (24K Gold Leaf)</span>
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="Theme & Settings">
            <CommandItem
              onSelect={() =>
                runCommand(() => setTheme(theme === "dark" ? "light" : "dark"))
              }
            >
              {theme === "dark" ? (
                <>
                  <Sun className="mr-2 h-4 w-4 text-[#C9A84C]" />
                  <span>Switch to Light Atmosphere</span>
                </>
              ) : (
                <>
                  <Moon className="mr-2 h-4 w-4 text-[#C9A84C]" />
                  <span>Switch to Dark Atmosphere</span>
                </>
              )}
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
