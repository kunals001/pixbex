
import dynamic from "next/dynamic";
import { ShinyButton } from "../magicui/shiny-button";
import Link from "next/link";

const AnimatedGridPattern = dynamic(() =>
    import("../magicui/animated-grid-pattern"),
    { ssr: false }
);



const GoProject = () => {
  return (
    <AnimatedGridPattern>
    <div className='w-full px-[1vh] md:px-[calc(100%-84vw)] md:mt-[1vw] mt-[1vh] md:mb-[6vw] mb-[8vh] md:pb-[4vw] pb-[4vh] border-t-1 border-b-1 border-zinc-800'>
        <div className="card w-full relative rounded-2xl ">
            <div className="under-image relative w-full overflow-hidden">
                <h1 className="md:text-[13vw] text-[10vh] font-bold text-center">Projects</h1>
            </div>

            <p className="md:w-[45vw] md:text-[1.2vw] text-[1.4vh] text-zinc-300 text-center mx-auto leading-tight md:mt-4 mt-5">
                Take a look at some of the work I&apos;ve crafted — from responsive interfaces to dynamic web experiences.Click below to explore full case studies, design insights, and development highlights.
            </p>

            <Link href="/projects"><ShinyButton className="border-none bg-gradient-to-r from-pink-200 via-purple-400 to-blue-500 rounded-md flex items-center justify-center mx-auto md:mt-[3vw] mt-[3vh]">
                <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#141313]  md:text-[1.5vw] text-[2vh] font-[700] tracking-tighter md:px-3 md:py-1 px-2 py-1">
                    Go To Projects
                </h4>
            </ShinyButton></Link>
        </div>
    </div></AnimatedGridPattern>
  )
}

export default GoProject