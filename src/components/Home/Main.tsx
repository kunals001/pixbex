import React from 'react'
import MainText from './MainText'
import {PixbexGlobe} from './PixbexGlobe'
import FastBuild from './FastBuild'
import Faq from './Faq'


const Main = () => {
  return (
    <div className='w-full min-h-screen  text-zinc-100'>
        <MainText/>
        <PixbexGlobe/>
        <FastBuild/>
        <Faq/>
    </div>
  )
}

export default Main