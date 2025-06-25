"use client"
import dynamic from "next/dynamic";
import ProjectShow from "@/components/Home/ProjectShow";

const TextAnimation = dynamic(() => import('@/components/Home/ProjectText'), {
  ssr: false,
});

const Footer = dynamic(() => import("@/components/Footer/Footer"), {
  ssr: false,
})


const Page = () => {

  return (
    <>
    <div className='w-full min-h-screen md:mt-4 mt-2 px-[1vh] md:px-[calc(100%-84vw)] text-zinc-200 bg-gradient-to-b from-black to-[#0c0c13c9]'>
      <TextAnimation />
      <ProjectShow />
    </div>
    <Footer/>
    </>
  )
}

export default Page