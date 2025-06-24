import React from 'react'
import  dynamic from 'next/dynamic'


const GoProject = dynamic(() => import('./GoProject'), { ssr: false });
const FastBuild = dynamic(() => import('./FastBuild'), { ssr: false });
const Faq = dynamic(() => import('./Faq'), { ssr: false });
const About = dynamic(() => import('./About'), { ssr: false });
const MainText = dynamic(() => import('./MainText'), { ssr: false });
const PixbexGlobe = dynamic(() => import("./PixbexGlobe"), {
  ssr: false,
});



const Main = () => {
  return (
    <div className='w-full min-h-screen  text-zinc-100 bg-gradient-to-b from-black to-[#0c0c13c9]'>
        <MainText/>
        <PixbexGlobe/>
        <FastBuild/>
        <About/>
        <GoProject/>
        <Faq/>
    </div>
  )
}

export default Main