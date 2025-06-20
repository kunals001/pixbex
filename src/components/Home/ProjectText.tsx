import React from 'react'
import { FlipText } from '../magicui/flip-text'
import Tilt from '../Layouts/Tilt'

const ProjectText = () => {
  return (
    <div className="w-full flex items-center justify-center px-[1vh] md:px-[calc(100%-84vw)] md:py-[3vw] py-[3vh]">
      <Tilt className='border-t-2 border-b-2 border-zinc-400'>
        <FlipText className='md:text-[8vw] text-[5vh] font-[800] uppercase md:leading-[8vw] text-transparent bg-clip-text bg-gradient-to-r from-[#b9c4c8] to-[#202630] tracking-tight'>
          Projects
        </FlipText>
      </Tilt>
    </div>
  )
}

export default ProjectText