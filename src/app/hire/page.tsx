
import React from 'react'
import ThreeDCard from '@/components/Hire/GlowDiv'
import { TextAnimate } from '@/components/magicui/text-animate'
import { ShinyButton } from "@/components/magicui/shiny-button";
import Card from '@/components/Hire/Card'

const Page = () => {
  return (
    <div className='px-[1vh] md:px-[calc(100%-84vw)] md:py-[3vw] py-[2vh] bg-gradient-to-b from-black to-[#0d0f17c9] min-h-screen'>

      <ThreeDCard className="w-full md:h-[20vw] rounded-xl flex ">


        <div className="h-full md:py-[3vw] py-[3vh] w-2/3 md:text-[2.5vw] text-[2.3vh] font-[700] md:leading-[2.5vw] text-zinc-100 leading-[3vh] tracking-tight flex flex-col items-center text-center">
            <TextAnimate animation="slideLeft" by="word" className='leading-none'>Start Something Great</TextAnimate>

            <p className='md:text-[1vw] text-[1.2vh] md:w-[35vw] font-poppins font-[400] tracking-tighter md:leading-5.5 leading-4 font-italic pl-2 md:mt-7 mt-4 text-zinc-200'>I design and develop modern, user-focused interfaces with a strong attention to detail and performance.</p>

            <ShinyButton className=' md:mt-[5vw] py-[.2vh] mt-4 md:px-[2.5vw] md:py-[.1vw] border-none bg-gradient-to-l from-purple-500 to-blue-500'>Hire Me</ShinyButton>
        </div>


        <div className="w-1/3 h-full flex flex-col items-center justify-center relative">
          <Card className="md:w-[20vw] md:h-[13vw] w-[13vh] h-[9vh] md:px-[2vw] md:pt-[3vw] px-[2vh] pt-[1vh]">
            <div className="w-full md:h-[.5vw] h-[1vh] rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
            </div>
          </Card>

          <Card className="absolute -translate-x-1/2 -translate-y-[9vw] md:w-[15vw] md:h-[8vw] md:px-[2vw] md:pt-[3vw] ">
            <div className="w-full h-[.5vw] rounded-full bg-gradient-to-r from-purple-800 to-blue-900">
            </div>
          </Card>
        </div>

      </ThreeDCard>

    </div>
  )
}

export default Page