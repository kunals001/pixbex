"use client";
import MainText from "@/components/Skills/MainText"
import { useLenis } from "@/components/Layouts/UseLenis";
import AllSkills from "@/components/Skills/AllSkills";
import { Marquee3D } from "@/components/Skills/SkillsMarquee";


const Page = () => {

  useLenis();

  return (
    <div className='px-[1vh] md:px-[calc(100%-84vw)] md:py-[3vw] py-[2vh] min-h-screen'>

      <MainText/>

      <AllSkills/>

      <div className="md:py-[3vw] py-[3vh]">
        <Marquee3D/>
      </div>
      
    </div>
  )
}

export default Page