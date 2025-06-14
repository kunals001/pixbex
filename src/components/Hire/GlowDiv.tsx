// components/ThreeDCard.tsx

import React from "react";
import { cn } from "@/lib/utils";

interface ThreeDCardProps {
  children: React.ReactNode;
  className?: string;
}

const ThreeDCard: React.FC<ThreeDCardProps> = ({ children, className }) => {
  return (
    <div className="relative overflow-visible rounded-xl">
      <div className="absolute inset-0 rounded-xl z-[-1] after:content-[''] after:absolute after:inset-0 after:rounded-xl after:shadow-[0_10px_15px_#5963BA] after:z-[-1]" />

      {/* Card with inner shadow */}
      <div
        className={cn(
          "bg-gradient-to-l from-[#0e0d17eb] to-[#0d0f17c9] shadow-[inset_0_4px_10px_rgba(0,0,0,0.6)] rounded-xl border-r-[.3vh] border-b-[.2vh] border-[#11141ef8] border-t-[.2vh] border-l-[.3vh]",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default ThreeDCard;
