import { TrendingUp } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

type Props = {
  text: string;
  href: string;
  desc: string;
  ref?: React.Ref<HTMLDivElement>;
  num: string;
};

const FastCard = ({ text, href, desc,ref, num }: Props) => {
  return (
    <div ref={ref} className="relative md:h-[13vw] h-[18vh]  p-2">

      {/* 🔳 Main Card */}
      <div className="rounded-lg flex items-center justify-center border-2 border-zinc-500 w-full h-full bg-[#0e0e0ef6] md:px-[1vw] md:py-[.5vw] px-[1vh] py-[1vh]">
        <div className="w-full h-full">

          <div className="flex justify-between">
          <Image
            className="rounded-full w-[4vh] h-[4vh] object-cover md:w-[4vw] md:h-[4vw]"
            width={100}
            height={100}
            src={href}
            alt={text}
            loading="lazy"
          />
          <p className='md:text-[1vw] text-[1.6vh] font-poppins font-[400] tracking-tighter font-italic text-zinc-400 md:mt-2'><span className='text-zinc-700'>/</span><span className='text-zinc-600'>/</span><span>0{num}</span></p>
          </div>

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
