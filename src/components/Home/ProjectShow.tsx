"use client"

import Link from 'next/link'
import React, { useEffect } from 'react'
import { InteractiveHoverButton } from '../magicui/interactive-hover-button'
import MainVideoHoverPlay from './MainVideoHoverPlay'
import { BadgeInfo, TrendingUp } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { getAllPosts } from '@/redux/slice/adminSlice'
import Card from '@/components/Hire/Card';
import { ShinyButton } from '../magicui/shiny-button'

const ProjectShow = () => {
    const dispatch = useAppDispatch()
    const { posts, loading } = useAppSelector((state) => state.admin)

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])

    if (loading) return <div className="text-white p-4">Loading posts...</div>

    return (
        <div className="md:px-[calc(100%-84vw)] px-1 md:pb-[8vw] pb-[2vh] md:mt-[4vw] mt-[3vh] border-t border-zinc-800">
            {posts.length > 0 ? (
                <div className='w-full flex md:flex-row flex-col-reverse md:py-[2vw] py-[1.5vh] px-[1vh] md:px-[calc(100%-84vw)]'>
                    <div className="md:w-1/2 w-full sticky md:mt-0 mt-5 md:block flex items-center justify-center">
                        <div className="md:sticky top-[5vw] z-20 ">
                            <Link href="/skills">
                                <InteractiveHoverButton className='text-[2vh] md:text-[1.3vw] text-zinc-100 bg-gradient-to-r from-purple-500 border-none to-blue-500 md:px-[2.5vw] md:py-[.6vw]'>
                                    Show Skills
                                </InteractiveHoverButton>
                            </Link>
                        </div>
                    </div>

                    <div className="md:w-[50vw] w-full flex flex-col md:gap-[1.5vw] gap-[2vh] group">
                        {posts.map((post) => (
                            <div key={post._id} className="colors rounded-2xl">
                                <Card col1='000000' col2='000000' className="w-full p-3 rounded-2xl bg-zinc-900">
                                <MainVideoHoverPlay videoUrl={post.video} link="/skills" bubbleText="Hire Me" Icon={TrendingUp} />
                                <div className="">
                                    <h1 className='md:text-[1.5vw] text-[1.9vh] font-[700] tracking-tighter md:px-3 md:py-1 px-2 py-1 bg-zinc-900 rounded-md flex items-center justify-between'>{post.title} <span className='md:text-[1vw] md:px-2 md:py-0.5 px-1 py-0.5 bg-[#008ee7] rounded-md text-center flex items-center gap-1'><BadgeInfo className='md:size-5 size-4'/>{post.cate}</span></h1>
                                    <p className='md:text-[1vw] text-[1.6vh] font-poppins font-[400] tracking-tighter md:px-3 md:py-1 px-2 py-1 md:leading-5.5 leading-3.5 font-italic text-zinc-400'>{post.desc}</p>

                                    <div className="w-full flex flex-wrap gap-2 mt-2">
                                     {post.skills.map((skill, index) => (
                                        
                                       <span
                                         key={index}
                                         className="px-3 py-1 bg-zinc-300 text-zinc-800 rounded-md text-[.8rem] md:text-[.75vw] font-medium tracking-tight cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 transition-all duration-300 ease-in-out"
                                       >
                                         {skill}
                                       </span>
                                       
                                     ))}
                                   </div>

                                    <Link href={`${post.tech}`}>
                                       <ShinyButton className='py-[1vh] mt-4 md:px-[2.5vw] md:py-[.3vw] border-none bg-gradient-to-l from-purple-500 to-blue-500 w-full'>Show Project</ShinyButton>
                                    </Link>
                                </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="text-white text-center py-10">No projects found.</div>
            )}
        </div>
    )
}

export default ProjectShow
