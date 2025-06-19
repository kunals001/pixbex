"use client";
import React, { useState } from "react";
import {
  IconAdjustmentsAlt,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconHierarchy,
  IconPhone,
  IconRocket,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const links = [
    { text: "Github", href: "https://github.com/kunals001", Icon: IconBrandGithub },
    { text: "LinkedIn", href: "https://linkedin.com/in/kunal-singh-26a996328", Icon: IconBrandLinkedin },
    { text: "Twitter", href: "https://x.com/kunalsi04845461", Icon: IconBrandTwitter },
  ];

  const Dev = [
    { text: "Hire me", href: "/hire", Icon: IconHierarchy },
    { text: "Projects", href: "/projects", Icon: IconAdjustmentsAlt },
    { text: "Contact", href: "/contact", Icon: IconPhone },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <footer className="px-[1vh] md:px-[calc(100%-84vw)] bg-[#0c0c13c9]">
      <div className="flex items-center md:gap-[2vw] gap-[1.5vh] border-t border-zinc-800 md:py-[2vw] py-[2vh] flex-wrap ">
        {/* Social Links */}
        <div className="flex flex-col gap-2">
          <h4 className="md:text-[1vw] text-[1.8vh] font-[500] text-zinc-300 pl-2">Connect with me</h4>
          {links.map((link, index) => (
            <div
              key={index}
              onClick={() => window.open(link.href)}
              className="flex items-center justify-start gap-2 text-left md:text-[1vw] text-[1.8vh] font-[400] rounded-full hover:bg-zinc-300 text-zinc-200 bg-zinc-900 hover:text-zinc-900 transition-all duration-300 cursor-pointer border border-zinc-800 md:w-[12rem] md:h-[2.8rem] w-[11.5rem] h-[2.8rem] md:px-[2vw] px-[2vh]"
            >
              <link.Icon size={18} /> {link.text}
            </div>
          ))}
        </div>

        {/* Dev Links */}
        <div className="flex flex-col gap-2">
          <h4 className="md:text-[1vw] text-[1.8vh] font-[500] text-zinc-300 pl-2">Developer Links</h4>
          {Dev.map((link, index) => (
            <div
              key={index}
              onClick={() => router.push(link.href)}
              className="flex items-center justify-start gap-2 text-left md:text-[1vw] text-[1.8vh] font-[400] rounded-full hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-400 text-zinc-200 bg-zinc-900 transition-all duration-300 cursor-pointer border border-zinc-800 md:w-[12rem] md:h-[2.8rem] w-[11.5rem] h-[2.8rem] md:px-[2vw] px-[2vh]"
            >
              <link.Icon size={18} /> {link.text}
            </div>
          ))}
        </div>

        {/* Text with Hover Bubble */}
        <div
          className="effect hidden md:block relative rounded-xl cursor-pointer"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          {/* Hover Bubble */}
          <div
            className="absolute w-[7vw] h-[7vw] rounded-full pointer-events-none transition-transform duration-300 ease-out bg-gradient-to-r from-sky-300 to-blue-500 flex flex-col items-center justify-center text-white font-[500] text-[.8vw] z-20"
            style={{
              transform: `translate(${pos.x - 32}px, ${pos.y - 32}px) scale(${hovering ? 1 : 0})`,
            }}
          >
            <IconRocket className="size-8" />
            Explore
          </div>

          {/* Unchanged Text */}
          <h1 className="text-[5vw] tracking-tighter leading-[4.8vw] text-zinc-200 font-[800] mt-3">
            Let&apos;s Build Something <br /> Great Together
          </h1>
        </div>
      </div>

      <p className="md:text-[1vw] text-[1.3vh] text-zinc-400 mt-4">
        © 2025 Pixbex. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
