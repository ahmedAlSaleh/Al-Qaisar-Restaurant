"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GridPatternProps {
  width?: number;
  height?: number;
  className?: string;
}

export function GridPattern({
  width = 40,
  height = 40,
  className,
}: GridPatternProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)] opacity-20",
        className
      )}
      aria-hidden="true"
    >
      <svg className="h-full w-full stroke-[#C9A84C]/25" width="100%" height="100%">
        <defs>
          <pattern
            id="grid-pattern-svg"
            width={width}
            height={height}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M.5 ${height}V.5H${width}`}
              fill="none"
              strokeDasharray="0"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#grid-pattern-svg)" />
      </svg>
    </div>
  );
}
