import Link from 'next/link'
import React from 'react'
import { InteractiveHoverButton } from '../magicui/interactive-hover-button'
import MainVideoHoverPlay from './MainVideoHoverPlay'
import { TrendingUp } from 'lucide-react'

const ProjectShow = () => {



  return (
    <div className='w-full flex md:flex-row flex-col-reverse md:py-[2vw] py-[1.5vh]'>
        <div className="md:w-1/2 w-full sticky md:mt-0 mt-5 md:block flex items-center justify-center">
            <div className="md:sticky top-[5vw] z-20 ">
                <Link href="/signup">
                    <InteractiveHoverButton className='text-[2vh] md:text-[1.3vw] text-zinc-100 bg-gradient-to-r from-purple-500 border-none to-blue-500 md:px-[2.5vw] md:py-[1vw]'>Show Skills</InteractiveHoverButton>
                </Link>
           </div>
        </div>

        <div className="md:w-[50vw] w-full flex flex-col md:gap-[1.5vw] gap-[2vh]">
           <div className="w-full p-3 rounded-2xl bg-zinc-900">
                <MainVideoHoverPlay videoUrl="https://ik.imagekit.io/tzq13ojas/5223113-hd_3840_2160_30fps.mp4?updatedAt=1749729348551" link="/signup" bubbleText="Show Skills" Icon={TrendingUp}/>

                <div className="">
                    <h1 className='md:text-[1.5vw] text-[1.9vh] font-[700] tracking-tighter md:px-3 md:py-1 px-2 py-1 bg-zinc-900 rounded-md '>Project Show</h1>

                    <p className='md:text-[1vw] text-[1.6vh] font-poppins font-[400] tracking-tighter md:px-3 md:py-1 px-2 py-1 md:leading-5.5 leading-3.5 font-italic  text-zinc-400'>A personal portfolio built with Next.js and Tailwind CSS, showcasing my skills, projects, and resume in a sleek, responsive design.</p>

                    <div className="px-2 mt-2 flex gap-2 flex-wrap">
                        <span className='md:px-[2vw] px-5 md:py-1 py-0.5 rounded-full bg-gradient-to-l from-[#8d81ff] to-[#8d3cf7] md:text-[1vw] text-[1.6vh] font-[400] tracking-tighter'>Nextjs</span>
                    </div>
                </div>
           </div>

           <div className="w-full p-3 rounded-2xl bg-zinc-900">
                <MainVideoHoverPlay videoUrl="https://ik.imagekit.io/tzq13ojas/5223113-hd_3840_2160_30fps.mp4?updatedAt=1749729348551" link="/signup" bubbleText="Show Skills" Icon={TrendingUp}/>

                <div className="">
                    <h1 className='md:text-[1.5vw] text-[1.9vh] font-[700] tracking-tighter md:px-3 md:py-1 px-2 py-1 bg-zinc-900 rounded-md '>Project Show</h1>

                    <p className='md:text-[1vw] text-[1.6vh] font-poppins font-[400] tracking-tighter md:px-3 md:py-1 px-2 py-1 md:leading-5.5 leading-3.5 font-italic  text-zinc-400'>A personal portfolio built with Next.js and Tailwind CSS, showcasing my skills, projects, and resume in a sleek, responsive design.</p>

                    <div className="px-2 mt-2 flex gap-2 flex-wrap">
                        <span className='md:px-[2vw] px-5 md:py-1 py-0.5 rounded-full bg-gradient-to-l from-[#8d81ff] to-[#8d3cf7] md:text-[1vw] text-[1.6vh] font-[400] tracking-tighter'>Nextjs</span>
                    </div>
                </div>
           </div>
        </div>
    </div>
  )
}

export default ProjectShow