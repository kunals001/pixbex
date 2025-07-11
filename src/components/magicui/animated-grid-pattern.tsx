"use client";

import {
  ComponentPropsWithoutRef,
  useEffect,
  useId,
  useRef,
} from "react";
import { cn } from "@/lib/utils";

export interface AnimatedGridPatternProps extends ComponentPropsWithoutRef<"svg"> {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: string | number;
  children?: React.ReactNode;
}

export default function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  className,
  children,
  ...props
}: AnimatedGridPatternProps) {
  const id = useId();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentContainer = containerRef.current;

    const resizeObserver = new ResizeObserver(() => {
      // No-op: width/height are not used yet
    });

    if (currentContainer) {
      resizeObserver.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        resizeObserver.unobserve(currentContainer);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={cn("relative w-full h-full", className)}>
      {/* Foreground Content */}
      <div className="relative z-10">{children}</div>

      {/* Grid Background */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full fill-[#000000] stroke-[#0c0c0ceb]"
        {...props}
      >
        <defs>
          <pattern
            id={id}
            width={width}
            height={height}
            patternUnits="userSpaceOnUse"
            x={x}
            y={y}
          >
            <path
              d={`M.5 ${height}V.5H${width}`}
              fill="none"
              strokeDasharray={strokeDasharray}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    </div>
  );
}
