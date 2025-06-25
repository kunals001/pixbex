"use client";
import dynamic from "next/dynamic";

const MainText = dynamic(() => import("@/components/Skills/MainText"), {
  loading: () => <p>Loading main text...</p>,
  ssr: false, // Add only if these components use browser APIs or window/document
});

const AllSkills = dynamic(() => import("@/components/Skills/AllSkills"), {
  loading: () => <p>Loading skills...</p>,
  ssr: false,
});

const Marquee3D = dynamic(() => import("@/components/Skills/SkillsMarquee"), {
  loading: () => <p>Loading 3D marquee...</p>,
  ssr: false,
});

const Footer = dynamic(() => import("@/components/Footer/Footer"), {
  ssr: false,
})

const Page = () => {


  return (
    <>
    <div className='px-[1vh] md:px-[calc(100%-84vw)] md:py-[3vw] py-[2vh] min-h-screen'>

      <MainText/>

      <AllSkills/>

      <div className="md:py-[3vw] py-[3vh]">
        <Marquee3D/>
      </div>
      
    </div>
    <Footer/>
    </>
  )
}

export default Page