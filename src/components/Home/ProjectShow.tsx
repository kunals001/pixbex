"use client"

import Link from 'next/link'
import React, { useEffect } from 'react'
import { InteractiveHoverButton } from '../magicui/interactive-hover-button'
import MainVideoHoverPlay from './MainVideoHoverPlay'
import { TrendingUp } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { getAllPosts } from '@/redux/slice/adminSlice'
import { IconArrowRight } from '@tabler/icons-react';

const ProjectShow = () => {
    const dispatch = useAppDispatch()
    const { posts, loading } = useAppSelector((state) => state.admin)

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])

    if (loading) return <div className="text-white p-4">Loading posts...</div>

    return (
        <div className="md:px-[calc(100%-84vw)] px-1">
            {posts.length > 0 ? (
                <div className='w-full flex md:flex-row flex-col-reverse md:py-[2vw] py-[1.5vh] px-[1vh] md:px-[calc(100%-84vw)]'>
                    <div className="md:w-1/2 w-full sticky md:mt-0 mt-5 md:block flex items-center justify-center">
                        <div className="md:sticky top-[5vw] z-20 ">
                            <Link href="/signup">
                                <InteractiveHoverButton className='text-[2vh] md:text-[1.3vw] text-zinc-100 bg-gradient-to-r from-purple-500 border-none to-blue-500 md:px-[2.5vw] md:py-[.6vw]'>
                                    Show Skills
                                </InteractiveHoverButton>
                            </Link>
                        </div>
                    </div>

                    <div className="md:w-[50vw] w-full flex flex-col md:gap-[1.5vw] gap-[2vh] ">
                        {posts.map((post) => (
                            <div key={post._id} className="w-full p-3 rounded-2xl bg-zinc-900">
                                <MainVideoHoverPlay videoUrl={post.video} link="/skills" bubbleText="More Project" Icon={TrendingUp} />
                                <div className="">
                                    <h1 className='md:text-[1.5vw] text-[1.9vh] font-[700] tracking-tighter md:px-3 md:py-1 px-2 py-1 bg-zinc-900 rounded-md '>{post.title}</h1>
                                    <p className='md:text-[1vw] text-[1.6vh] font-poppins font-[400] tracking-tighter md:px-3 md:py-1 px-2 py-1 md:leading-5.5 leading-3.5 font-italic text-zinc-400'>{post.desc}</p>
                                    <Link href={`${post.tech}`}>
                                    <div className="group md:mt-2 mt-1 md:px-[1vw] md:py-[.5vw] px-[1vh] py-[1vh] rounded-full md:text-[1vw] text-[1.6vh] font-poppins font-[500] font-italic text-zinc-200 md:bg-zinc-800 bg-blue-400 border-2 border-zinc-500 hover:bg-gradient-to-l from-sky-400 to-purple-500 hover:shadow-lg transition-all duration-500 ease-in-out flex gap-2 items-center justify-center text-center cursor-pointer">
                                        Show Project  <IconArrowRight stroke={2} className='md:size-[1.3vw] size-[2.3vh] -rotate-45'/>
                                    </div>
                                    </Link>
                                </div>
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
