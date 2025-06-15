"use client";

import React from "react";
import TiltBase from "react-parallax-tilt";

interface TiltProps {
  children: React.ReactNode;
  className?: string;
  scale?: number;
  speed?: number;
  angle?: number;
}

const Tilt = ({
  children,
  className = "",
  scale = 1.02,
  speed = 1000,
  angle = 12,
}: TiltProps) => {
  return (
    <TiltBase
      glareEnable={false}                // ❌ NO SHINE
      tiltMaxAngleX={angle}
      tiltMaxAngleY={angle}
      scale={scale}
      transitionSpeed={speed}
      transitionEasing="cubic-bezier(.03,.98,.52,.99)" // ✅ SMOOTH
      style={{ background: "transparent" }} // ❌ NO BACKGROUND
      className={className}
    >
      {children}
    </TiltBase>
  );
};

export default Tilt;
