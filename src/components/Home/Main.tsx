import React from 'react'
import MainText from './MainText'
import MainVideo from './MainVideo'
import TextAnimation from './TextAnimation'
import ProjectShow from './ProjectShow'
import FastBuild from './FastBuild'
import TextMarquee from './TextMarquee'
import Faq from './Faq'


const Main = () => {
  return (
    <div className='w-full min-h-screen  text-zinc-100'>
        <MainText/>
        <MainVideo/>
        <FastBuild/>
        <TextAnimation/>
        <ProjectShow/>
        <TextMarquee/>
        <Faq/>
    </div>
  )
}

export default Main