import { cn } from "@/lib/utils";
import React from "react";

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
        "mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-3",
        className,
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
        "group/bento relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#C9A84C]/20 bg-[#0A0A0A]/90 p-5 transition-all duration-300 hover:border-[#C9A84C]/50 hover:shadow-[0_10px_35px_rgba(201,168,76,0.12)] backdrop-blur-sm",
        className,
      )}
    >
      {header}
      <div className="mt-4 transition-transform duration-300 group-hover/bento:translate-y-[-2px]">
        <div className="flex items-center justify-between mb-2">
          {icon}
          {price && (
            <span className="font-serif italic text-base text-[#C9A84C] font-normal">
              {price}
            </span>
          )}
        </div>
        <div className="font-serif text-xl font-normal text-[#F5F0E8] tracking-wide mb-1.5">
          {title}
        </div>
        <div className="text-xs text-[#F5F0E8]/60 font-light leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};
