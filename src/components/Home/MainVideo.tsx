'use client'
import { TrendingUp } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react'

const MainVideo = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className="group w-full md:h-[38vw] h-[28vh] rounded-2xl overflow-hidden md:mt-[7vw] mt-[7vh] cursor-pointer relative "
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* 🔵 Circle tracker */}
      <Link href="/skills"><div
        className="absolute w-[7vw] h-[7vw] rounded-full pointer-events-none transition-transform duration-300 ease-out bg-gradient-to-r from-purple-500 to-blue-500 flex flex-col leading-none gap-0 items-center justify-center text-[1.2vw] font-[500] pb-8 z-20"
        style={{
          transform: `translate(${pos.x - 32}px, ${pos.y - 32}px) scale(${hovering ? 1 : 0})`,
        }}
      ><TrendingUp className='size-10'/> Show Skills</div></Link>

      <video
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
        src="https://ik.imagekit.io/tzq13ojas/mainImage.mp4?updatedAt=1749661537794"
        playsInline
        preload="auto"
      />
    </div>
  );
};

export default MainVideo;
