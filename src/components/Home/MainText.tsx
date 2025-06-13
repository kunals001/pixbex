import React from 'react'
import { AuroraText } from "@/components/magicui/aurora-text";
import { TextAnimate } from "@/components/magicui/text-animate";

const MainText = () => {
  return (
    <div className="relative w-full px-[1vh] md:px-[calc(100%-84vw)] flex flex-col md:pt-[8vw] pt-[15vh]">

    <div className="flex justify-center ">

        {/* Main Heading */}
      <h1 className="relative z-10 text-[3vh] font-[700] md:text-[4.5vw] md:leading-[4.5vw] leading-[3vh] text-center tracking-tight select-none text-white">
        Crafting Dynamic and Immersive <br />
        Web Experiences at <AuroraText>Pixbex</AuroraText>
      </h1>
      
      {/* Glowing background behind the h1 */}
      <div className="absolute w-[100%] max-w-[900px] md:h-[40%] h-[20%] bg-[#066CF1] opacity-20 blur-[100px] rounded-full z-0" />
    </div>

    <div className="mx-auto text-center mt-[1.5vh] md:mt-[2vw]">
      <TextAnimate animation="blurInUp" by="character" className='mx-auto text-[1.2vh] md:text-[1.5vw] leading-none'>We build fast, modern, and SEO-friendly websites using the latest </TextAnimate>
      <TextAnimate animation="blurInUp" by="word" className='mx-auto text-[1.3vh] md:text-[1.5vw] leading-none'>technologies to deliver top-quality, performance-driven digital experiences.</TextAnimate>
    </div>
      
    </div>
  )
}

export default MainText
