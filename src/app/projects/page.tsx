"use client"
import React from 'react'
import { useLenis } from '@/components/Layouts/UseLenis'
import ProjectShow from '@/components/Home/ProjectShow';
import TextAnimation from '@/components/Home/TextAnimation';

const Page = () => {

  useLenis();

  return (
    <div className='w-full min-h-screen md:mt-4 mt-2 px-[1vh] md:px-[calc(100%-84vw)] text-zinc-200'>
      <TextAnimation />
      <ProjectShow />
    </div>
  )
}

export default Page