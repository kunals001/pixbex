import React from 'react'
import dynamic from 'next/dynamic'

const Tilt = dynamic(() => import('../Layouts/Tilt'), { ssr: false });
const FlipText = dynamic(() => import('../magicui/flip-text'), { ssr: false });

const MainText = () => {
  return (
    <div className='flex items-center justify-center w-full cursor-default'>
      <Tilt className='border-t-2 border-b-2 border-zinc-400'>
        <FlipText className='md:text-[8vw] text-[5vh] font-[800] uppercase md:leading-[8vw] text-transparent bg-clip-text bg-gradient-to-r from-[#b9c4c8] to-[#202630] tracking-tight'>
          Skills
        </FlipText>
      </Tilt>
    </div>
  )
}

export default MainText