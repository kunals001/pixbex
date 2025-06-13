import React from 'react'
import { Meteors } from '../magicui/meteors'
import { TextAnimate } from '../magicui/text-animate';

const TextMarquee = () => {
  return (
    <Meteors className='md:mt-[4vw] mt-[5vh] py-[3vh] border-t-1 border-zinc-800 border-b-1'>
      <div className="w-full flex items-center justify-center md:px-[calc(100%-84vw)] overflow-hidden">
        <h1 className='md:text-[15vw] text-[8vh] text-zinc-200 tracking-tight font-poppins font-[700]'><TextAnimate animation="scaleUp" by="word">PIXBEX</TextAnimate></h1>
      </div>
    </Meteors>
  )
}

export default TextMarquee