import { TrendingUp } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

type Props = {
  text: string;
  href: string;
  desc: string;
  co1: string;
  co2: string;
  co3: string;
};

const FastCard = ({ text, href, desc, co1, co2, co3 }: Props) => {
  return (
    <div className="relative md:w-1/3 md:h-[13vw] h-[18vh] w-1/2 p-2">

      {/* 🔸 Gradient Line with Only Edge Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[3px] z-10 pointer-events-none">
        {/* Left Edge Blur */}
        <div
          className="absolute left-0 top-0 w-1/3 h-full blur-md"
          style={{
            background: 'radial-gradient(circle at left, rgba(168,85,247,0.4), transparent 70%)',
          }}
        />

        {/* Center Sharp Line with Inline Gradient */}
        <div
          className="w-full h-full rounded-full"
          style={{
            background: `linear-gradient(to right, ${co1}, ${co2}, ${co3})`,
          }}
        />

        {/* Right Edge Blur */}
        <div
          className="absolute right-0 top-0 w-1/3 h-full blur-md"
          style={{
            background: 'radial-gradient(circle at right, rgba(59,130,246,0.4), transparent 70%)',
          }}
        />
      </div>

      {/* 🔳 Main Card */}
      <div className="rounded-lg flex items-center justify-center border-2 border-zinc-500 w-full h-full bg-[#0e0e0ef6] md:px-[1vw] md:py-[.5vw] px-[1vh] py-[1vh]">
        <div className="w-full h-full">
          <Image
            className="rounded-full w-[4vh] h-[4vh] object-cover md:w-[4vw] md:h-[4vw]"
            width={100}
            height={100}
            src={href}
            alt={text}
            loading="lazy"
          />

          <h2 className="md:text-[1.3vw] flex items-center gap-2 text-[1.8vh] font-[600] tracking-tighter cursor-pointer pl-2 md:mt-[2vw] mt-2">
            {text} <TrendingUp />
          </h2>

          <p className="md:text-[1vw] text-[1.5vh] font-poppins font-[400] tracking-tighter md:leading-5.5 leading-4 font-italic pl-2 md:mt-4 mt-4 text-zinc-400">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FastCard;
