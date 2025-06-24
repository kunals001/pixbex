
import { ShinyButton } from "../magicui/shiny-button";
import Link from "next/link";
import dynamic from "next/dynamic";
const VideoText = dynamic(
  () => import("@/components/magicui/video-text"),
  {
    loading: () => <p className="mx-auto">Loading video text...</p>,
    ssr: false, // agar browser-specific ho toh lagao, nahi toh hatao
  }
);



const GoProject = () => {
  return (
    <div className='w-full px-[1vh] md:px-[calc(100%-84vw)] md:mt-[1vw] mt-[1vh] md:pb-[6vw] pb-[8vh]'>
        <div className="card w-full relative rounded-2xl ">
            <div className="relative md:h-[15vw] h-[10vh] w-full overflow-hidden">
                <VideoText src={"/pro.mkv"}>Projects</VideoText>
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
    </div>
  )
}

export default GoProject