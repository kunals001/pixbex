"use client";

import { cn } from "@/lib/utils";
import { motion, Transition, Variants, } from "framer-motion";
import React, { CSSProperties } from "react";

type SpinningTextProps = {
  children: string | string[];
  style?: CSSProperties;
  duration?: number;
  className?: string;
  reverse?: boolean;
  fontSize?: number;
  radius?: number;
  transition?: Transition;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
};

// ✅ Fixed: Use easing function instead of "linear" string
const BASE_TRANSITION: Transition = {
  repeat: Infinity,
  ease: [0, 0, 1, 1],
};

const BASE_ITEM_VARIANTS = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
  },
};

export function SpinningText({
  children,
  duration = 10,
  style,
  className,
  reverse = false,
  radius = 5,
  transition,
  variants,
}: SpinningTextProps) {
  if (typeof children !== "string" && !Array.isArray(children)) {
    throw new Error("children must be a string or an array of strings");
  }

  if (Array.isArray(children)) {
    if (!children.every((child) => typeof child === "string")) {
      throw new Error("all elements in children array must be strings");
    }
    children = children.join("");
  }

  const letters = children.split("");
  letters.push(" ");

  const finalTransition: Transition = {
    ...BASE_TRANSITION,
    ...transition,
    duration: transition?.duration ?? duration,
  };

  const containerVariants = {
    visible: { rotate: reverse ? -360 : 360 },
    ...variants?.container,
  };

  const itemVariants = {
    ...BASE_ITEM_VARIANTS,
    ...variants?.item,
  };

  return (
  <motion.div
    className={cn("relative", className)}
    style={{ ...style }}
    initial="hidden"
    animate="visible"
    variants={containerVariants}
    transition={finalTransition}
  >
    {/* 🌀 Center Element with Hover Animation */}
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
             rounded-full md:w-[5.5vw] md:h-[5.5vw] w-[3.5vh] h-[3.5vh] z-10
             bg-[radial-gradient(circle_at_30%_30%,#c084fc,#60a5fa)]
             shadow-[inset_2px_2px_4px_rgba(255,255,255,0.2),_4px_4px_12px_rgba(0,0,0,0.3)] border border-[#a78bfa]"
      whileHover={{ scale: 1.3 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    />

    {/* 🔠 Spinning Letters */}
    {letters.map((letter, index) => (
      <motion.span
        aria-hidden="true"
        key={`${index}-${letter}`}
        variants={itemVariants}
        className="absolute left-1/2 top-1/2 inline-block"
        style={
          {
            "--index": index,
            "--total": letters.length,
            "--radius": radius,
            transform: `
              translate(-50%, -50%)
              rotate(calc(360deg / var(--total) * var(--index)))
              translateY(calc(var(--radius, 5) * -1ch))
            `,
            transformOrigin: "center",
          } as React.CSSProperties
        }
      >
        {letter}
      </motion.span>
    ))}
    <span className="sr-only">{children}</span>
  </motion.div>
);
}
