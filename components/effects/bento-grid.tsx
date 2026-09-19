"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  price,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  price?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-2xl transition duration-300 shadow-input dark:shadow-none p-5 bg-black/60 backdrop-blur-md border border-[#C9A84C]/20 justify-between flex flex-col space-y-4 hover:border-[#C9A84C]/50 hover:-translate-y-1",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-1 transition duration-300">
        <div className="flex items-center justify-between mb-2">
          {icon}
          {price && (
            <span className="font-serif italic text-[#C9A84C] text-sm">
              {price}
            </span>
          )}
        </div>
        <div className="font-serif text-lg text-[#F5F0E8] font-light mb-1">
          {title}
        </div>
        <div className="text-xs text-muted-foreground leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};
