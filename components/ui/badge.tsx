import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#C9A84C] text-black hover:bg-[#D4AF37]",
        secondary:
          "border-[#C9A84C]/25 bg-[#C9A84C]/10 text-[#C9A84C]",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground",
        outline:
          "border-[#C9A84C]/40 text-[#C9A84C]",
        gold:
          "border-[#C9A84C]/40 bg-gradient-to-r from-[#C9A84C]/20 to-transparent text-[#E2C775] shadow-[0_0_12px_rgba(201,168,76,0.2)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
