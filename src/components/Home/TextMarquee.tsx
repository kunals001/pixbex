import React from 'react'
import { Marquee } from '../magicui/marquee'
import { AuroraText } from "@/components/magicui/aurora-text";

const TextMarquee = () => {
  return (
    <div className="w-full flex items-center justify-center md:mt-[7vw] relative mt-[5vh]">
        <Marquee pauseOnHover className="[--duration:20s] text-[6vh] font-[700] md:text-[8vw] text-zinc-200 uppercase">Pixbex Pixbex Pixbex Pixbex</Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
    </div>
  )
}

export default TextMarquee