import React from 'react'
import MainText from './MainText'
import MainVideo from './MainVideo'
import TextAnimation from './TextAnimation'
import ProjectShow from './ProjectShow'
import FastBuild from './FastBuild'


const Main = () => {
  return (
    <div className='w-full min-h-screen px-[1vh] md:px-[calc(100%-84vw)] text-zinc-100'>
        <MainText/>
        <MainVideo/>
        <FastBuild/>
        <TextAnimation/>
        <ProjectShow/>
    </div>
  )
}

export default Main