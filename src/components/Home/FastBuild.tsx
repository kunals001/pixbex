import FastCard from "../Layouts/FastCard"
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { ShinyButton } from "../magicui/shiny-button";

const FastBuild = () => {
  return (
    <AnimatedGridPattern>
    <div className="px-[1vh] md:px-[calc(100%-84vw)] border-t-1 border-zinc-800 border-b-1">
    <div className='w-full  md:py-[7vw] py-[7vh] '>
      <div className='w-full flex justify-center'>
        <ShinyButton className="border-none bg-zinc-900 rounded-md flex items-center justify-center">
          <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-[#b9c4c8] to-[#202630] md:text-[1.5vw] text-[2vh] font-[700] tracking-tighter md:px-3 md:py-1 px-2 py-1'>Fast Build With</h2>
        </ShinyButton>
      </div>

      <div className="w-full grid md:grid-cols-3 grid-cols-2 md:gap-3 gap-2 md:mt-[3vw] mt-[2vh]">
        <FastCard
          className="w-[4vh] h-[4vh] md:w-[4.3vw] md:h-[4.3vw] md:ml-0 ml-2"
          num="1"
          text="Next js"
          href="/fast/next.js-min.png"
          desc="The React framework for production"
        />

        <FastCard
          className="w-[4vh] h-[4.3vh] md:w-[4vw] md:h-[4.3vw] md:ml-0 ml-2"
          num="2"
          text="Node js"
          href="/fast/nodejs-min.png"
          desc="Event-driven, non-blocking I/O runtime"
        />

        <FastCard
          className="w-[2.5vh] h-[4vh] md:w-[2vw] md:h-[4.3vw] md:ml-0 ml-2"
          num="3"
          text="MongoDB"
          href="/fast/mongodb-min.png"
          desc="Event-driven, non-blocking I/O runtime"
        />

        <FastCard
          className="w-[4.5vh] h-[4vh] md:w-[4.5vw] md:h-[4vw] md:ml-0 ml-2"
          num="4"        
          text="React js"
          href="/fast/react-min.png"
          desc="Event-driven, non-blocking I/O runtime"
        />

        <FastCard
          className="w-[4vh] h-[4vh] md:w-[4vw] md:h-[4vw] md:ml-0 ml-2"
          num="5"         
          text="Typescript"
          href="/fast/ts-min.png"
          desc="Event-driven, non-blocking I/O runtime"
        />

        <FastCard
          className="w-[4vh] h-[4vh] md:w-[4vw] md:h-[4vw] md:ml-0 ml-2"
          num="6"         
          text="Express js"
          href="/express-js.svg"
          desc="Event-driven, non-blocking I/O runtime"
        />
      </div>
    </div>
    </div></AnimatedGridPattern>
  )
}

export default FastBuild
