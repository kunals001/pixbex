import Link from 'next/link'
import React from 'react'
import { InteractiveHoverButton } from '../magicui/interactive-hover-button'
import MainVideoHoverPlay from './MainVideoHoverPlay'
import { TrendingUp } from 'lucide-react'

import { useAppSelector } from '@/redux/hooks'

const ProjectShow = () => {
    const { posts } = useAppSelector((state) => state.admin)
    console.log("posts",posts)
  return (
    <div className="md:px-[calc(100%-84vw)] px-1">
     {posts.length > 0 && (
        <div className='w-full flex md:flex-row flex-col-reverse md:py-[2vw] py-[1.5vh] px-[1vh] md:px-[calc(100%-84vw)]'>
            <div className="md:w-1/2 w-full sticky md:mt-0 mt-5 md:block flex items-center justify-center">
                <div className="md:sticky top-[5vw] z-20 ">
                    <Link href="/signup">
                        <InteractiveHoverButton className='text-[2vh] md:text-[1.3vw] text-zinc-100 bg-gradient-to-r from-purple-500 border-none to-blue-500 md:px-[2.5vw] md:py-[.6vw]'>Show Skills</InteractiveHoverButton>
                    </Link>
               </div>
            </div>
            

          <div className="md:w-[50vw] w-full flex flex-col md:gap-[1.5vw] gap-[2vh] ">
            {posts.map((post) => (
            <div key={post._id} className="w-full p-3 rounded-2xl bg-zinc-900">
                <MainVideoHoverPlay videoUrl={post.video} link="/skills" bubbleText="Show Skills" Icon={TrendingUp}/>

                <div className="">
                    <h1 className='md:text-[1.5vw] text-[1.9vh] font-[700] tracking-tighter md:px-3 md:py-1 px-2 py-1 bg-zinc-900 rounded-md '>{post.title}</h1>

                    <p className='md:text-[1vw] text-[1.6vh] font-poppins font-[400] tracking-tighter md:px-3 md:py-1 px-2 py-1 md:leading-5.5 leading-3.5 font-italic  text-zinc-400'>{post.desc}</p>

                    <div className="px-2 mt-2 flex gap-2 flex-wrap">
                        <span className='md:px-[2vw] px-5 md:py-1 py-0.5 rounded-full bg-zinc-800 hover:bg-gradient-to-l hover:from-[#8d81ff] hover:to-[#8d3cf7] transition-all duration-600 ease-in-out border-1 border-zinc-600 md:text-[1vw] text-[1.6vh] font-[400] tracking-tighter cursor-pointer'>Nextjs</span>
                    </div>
                </div>
             </div>
            ))}

           
          </div>
      </div>
     )}   
    
    </div>
  )
}

export default ProjectShow