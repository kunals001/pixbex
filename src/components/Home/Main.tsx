import React from 'react'
import MainText from './MainText'
import MainVideo from './MainVideo'
import TextAnimation from './TextAnimation'
import ProjectShow from './ProjectShow'
import FastBuild from './FastBuild'
import TextMarquee from './TextMarquee'


const Main = () => {
  return (
    <div className='w-full min-h-screen  text-zinc-100'>
        <MainText/>
        <MainVideo/>
        <FastBuild/>
        <TextAnimation/>
        <ProjectShow/>
        <TextMarquee/>
    </div>
  )
}

export default Main