'use client';
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface HoverPlayVideoProps {
  videoUrl?: string;
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
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setHovering(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setHovering(false);
    videoRef.current?.pause();
    videoRef.current!.currentTime = 0;
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
          className="absolute w-[7vw] h-[7vw] rounded-full pointer-events-none transition-transform duration-300 ease-out bg-gradient-to-r from-purple-500 to-blue-500 flex flex-col leading-none gap-0 items-center justify-center text-[1.2vw] font-[500] pb-8 z-20"
          style={{
            transform: `translate(${pos.x - 32}px, ${pos.y - 32}px) scale(${hovering ? 1 : 0})`,
          }}
        >
          <Icon className="size-10" />
          {bubbleText}
        </div>
      </Link>

     <video
  ref={videoRef}
  muted
  loop
  className="w-full md:h-[22vw] object-cover"
  width={1920}
  height={1080}
  playsInline
  preload="auto"
  onError={() => console.error("⚠️ Video failed to load:", videoUrl)}
>
  {videoUrl && (
    <source
      src={videoUrl}
      type={
        videoUrl.endsWith('.webm')
          ? 'video/webm'
          : videoUrl.endsWith('.mp4')
          ? 'video/mp4'
          : 'video/mp4' // fallback
      }
    />
  )}
  Your browser does not support the video tag.
</video>

    </div>
  );
};

export default HoverPlayVideo;
