import React from 'react'
import MainText from './MainText'
import {PixbexGlobe} from './PixbexGlobe'
import FastBuild from './FastBuild'
import Faq from './Faq'
import About from './About'
import GoProject from './GoProject'


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