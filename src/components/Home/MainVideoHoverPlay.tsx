"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import Image from 'next/image';

interface HoverPlayVideoProps {
  videoUrl?: string; // this will now be treated as image URL
  link: string;
  bubbleText: string;
  Icon: LucideIcon;
}

const HoverPlayVideo: React.FC<HoverPlayVideoProps> = ({
  videoUrl,
  link,
  bubbleText,
  Icon,
}) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  return (
    <div
      className="group w-full rounded-2xl cursor-pointer relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={link}>
        <div
          className="absolute w-[7vw] h-[7vw] rounded-full pointer-events-none transition-transform duration-300 ease-out bg-gradient-to-r from-sky-300 to-blue-500 flex flex-col leading-none gap-0 items-center justify-center md:text-[1vw] font-[500] pb-8 z-20"
          style={{
            transform: `translate(${pos.x - 32}px, ${pos.y - 32}px) scale(${hovering ? 1 : 0})`,
          }}
        >
          <Icon className="size-10" />
          {bubbleText}
        </div>
      </Link>

      <Image
        src={videoUrl || ""}
        alt="Project Image"
        width={1000}
        height={1000}
        className="w-full md:h-[22.5vw] h-[27vh] object-cover"
        loading="lazy"
      />
    </div>
  );
};

export default HoverPlayVideo;
