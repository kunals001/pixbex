// components/ThreeDCard.tsx

import React from "react";
import { cn } from "@/lib/utils";

interface ThreeDCardProps {
  children: React.ReactNode;
  className?: string;
  col1?: string;
  col2?: string;
}

const ThreeDCard: React.FC<ThreeDCardProps> = ({
  children,
  className,
  col1 = "210F37",
  col2 = "200f38f8",
}) => {
  return (
    <div className="relative overflow-visible rounded-xl">
      <div className="absolute inset-0 rounded-xl z-[-1] after:content-[''] after:absolute after:inset-0 after:rounded-xl after:shadow-[0_32px_50px_black] after:z-[-1]" />

      <div
        className={cn(
          "bg-gradient-to-l from-[#0e0d17eb] to-[#0d0f17c9] shadow-[inset_0_4px_10px_rgba(0,0,0,0.6)] md:rounded-xl rounded-lg border-r-[.3vh] border-b-[.2vh] border-t-[.2vh] border-l-[.3vh] border-[#1c1734a1]",
          className
        )}
        style={{
          borderTopColor: `#${col1}`,
          borderLeftColor: `#${col2}`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ThreeDCard;
