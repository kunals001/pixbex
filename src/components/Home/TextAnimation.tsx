import React from 'react'
import { TextAnimate } from '../magicui/text-animate'

const TextAnimation = () => {
  return (
    <div className='md:mt-[7vw] mt-[7vh] md:pb-[4vw] pb-[4vh] border-b-1 border-zinc-700'>
        <div className="md:text-[5vw] text-[3.5vh] font-[700] leading-none tracking-tighter pl-2 md:pl-0">
          <TextAnimate animation="slideLeft" by="character">Some Cool Stuff</TextAnimate>
          <TextAnimate animation="slideRight" by="character">I've Made </TextAnimate>
        </div>

        <div className="md:text-[1.5vw] text-[2vh] font-[400] pl-2 md:pl-1 leading-none md:leading-8 md:mt-[1.2vw] mt-3 w-full md:w-[60%] text-zinc-300">
          <TextAnimate animation="blurInUp" by="word">
            These projects show my growth as a full-stack developer — from simple ideas to real, working apps. I've built each one with clean code, modern tools, and full focus on speed, design, and real-world use. Every project is a step forward in learning, building, and creating things that actually work.
          </TextAnimate>
        </div>
    </div>
  )
}

export default TextAnimation