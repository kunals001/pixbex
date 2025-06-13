import React from 'react'
import { Meteors } from '../magicui/meteors'
import { FlipText } from "@/components/magicui/flip-text";

const TextMarquee = () => {
  return (
    <Meteors className='md:mt-[4vw] mt-[5vh] py-[3vh]'>
      <div className="w-full flex items-center justify-center md:px-[calc(100%-84vw)] overflow-hidden">
        <h1 className='md:text-[15vw] text-[6vh] text-zinc-200 tracking-tight font-poppins font-[700]'><FlipText>PIXBEX</FlipText></h1>
      </div>
    </Meteors>
  )
}

export default TextMarquee