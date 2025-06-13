import FastCard from "../Layouts/FastCard"
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";


const FastBuild = () => {
  return (
    <AnimatedGridPattern>
    <div className=" px-[1vh] md:px-[calc(100%-84vw)]">
    <div className='w-full md:mt-[6vw] md:py-[7vw] py-[7vh] '>
      <div className='w-full flex justify-center'>
        <button className="md:text-[2vw] text-[2.4vh] font-[700] tracking-tighter md:px-3 md:py-1 px-3 py-1.5 bg-zinc-900 rounded-md flex items-center justify-center">
          <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-[#b9c4c8] to-[#202630]'>Fast Build</h2>
        </button>
      </div>

      <div className="w-full grid md:grid-cols-3 grid-cols-2 md:gap-3 gap-2 md:mt-[3vw] mt-[2vh]">
        <FastCard
         num="1"

          text="Next js"
          href="/next.js.svg"
          desc="The React framework for production"
        />

        <FastCard
          num="2"

          text="Node js"
          href="/nodejs.svg"
          desc="Event-driven, non-blocking I/O runtime"
        />

        <FastCard
          num="3"
          
          text="Node js"
          href="/nodejs.svg"
          desc="Event-driven, non-blocking I/O runtime"
        />

        <FastCard
          num="4"
          
          text="React js"
          href="/react-native.svg"
          desc="Event-driven, non-blocking I/O runtime"
        />

        <FastCard
          num="5"
          
          text="Typescript"
          href="/typescript.svg"
          desc="Event-driven, non-blocking I/O runtime"
        />

        <FastCard
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
