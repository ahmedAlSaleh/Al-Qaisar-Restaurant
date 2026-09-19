import { cn } from "@/lib/utils";
import React from "react";
import { motion, useReducedMotion } from "motion/react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const shouldReduceMotion = useReducedMotion();
  const shouldAnimate = animate && !shouldReduceMotion;

  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };

  const goldGradientClass =
    "bg-[radial-gradient(circle_farthest-side_at_0_100%,#C9A84C,transparent),radial-gradient(circle_farthest-side_at_100%_0,#E2CA7B,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#967727,transparent),radial-gradient(circle_farthest-side_at_0_0,#F5E4A8,#080808)]";

  return (
    <div className={cn("relative p-[2px] group", containerClassName)}>
      <motion.div
        variants={shouldAnimate ? variants : undefined}
        initial={shouldAnimate ? "initial" : undefined}
        animate={shouldAnimate ? "animate" : undefined}
        transition={
          shouldAnimate
            ? {
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: shouldAnimate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-2xl z-[1] opacity-50 group-hover:opacity-90 blur-xl transition duration-500 will-change-transform",
          goldGradientClass
        )}
      />
      <motion.div
        variants={shouldAnimate ? variants : undefined}
        initial={shouldAnimate ? "initial" : undefined}
        animate={shouldAnimate ? "animate" : undefined}
        transition={
          shouldAnimate
            ? {
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: shouldAnimate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-2xl z-[1] will-change-transform opacity-75 group-hover:opacity-100 transition duration-500",
          goldGradientClass
        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
