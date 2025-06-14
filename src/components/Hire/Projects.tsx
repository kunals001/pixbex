"use client"
import React, { useEffect, useState } from 'react'
import { AuroraText } from '../magicui/aurora-text'
import Card from './Card';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getAllPosts } from '@/redux/slice/adminSlice';
import Link from 'next/link';



const Projects = () => {

    const dispatch = useAppDispatch();
    const { posts } = useAppSelector((state) => state.admin);

    useEffect(() => {
        dispatch(getAllPosts());
    }, [dispatch]);

      const [pos, setPos] = useState({ x: 0, y: 0 });
      const [hovering, setHovering] = useState(false);
    
      const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      };
      
  return (
    <div className='w-full flex flex-col items-center text-center md:py-[3vw] py-[2vh]'>
        <div className="w-full relative flex justify-center">
            <h2 className="relative z-10 rounded-md bg-black text-zinc-100 font-[700] tracking-tight md:text-[2.7vw] text-[2.7vh] md:leading-[2.5vw] leading-[3vh]">
                <AuroraText className="md:mt-0 mt-[2vh]">Projects</AuroraText>
            </h2>
        
            {/* Decorative Lines Behind Text */}
            <div className="absolute w-full top-1/2 -translate-y-1/2 mt-2 z-0">
                <div className="flex flex-col items-center w-full">
                    <div className="w-full bg-zinc-200 md:h-[.15vw] h-[.1vh] mb-[.3vh]" />
                    <div className="w-full bg-zinc-200 md:h-[.15vw] h-[.1vh]" />
                </div>
            </div>
        </div>

        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-[1.5vw] gap-2 md:mt-[5vw] mt-[3vh] ">
            <div className="shadow-xl shadow-gray-900">
                <Card className="md:p-4 p-2">
                    {posts.map((post) => (
                       
                    <div key={post._id} onMouseMove={handleMouseMove} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} className="overflow-hidden rounded-md ">
                    <Link href={`${post.tech}`}><div  className=""> <div className="absolute w-[2vw] h-[2vw] rounded-full pointer-events-none transition-transform duration-300 ease-out bg-gradient-to-r from-purple-500 to-blue-500 flex flex-col leading-none gap-0 items-center justify-center text-[1.2vw] font-[500] pb-8 z-20"
                        style={{  transform: `translate(${pos.x - 32}px, ${pos.y - 32}px) scale(${hovering ? 1 : 0})`,}} />
                        <video
                        autoPlay
                        muted
                        loop
                        className="w-full h-full object-cover"
                        width={1200}
                        height={720}
                        src={post.video}
                        playsInline
                        preload="auto"
                        />
                        
                        <h3 className='md:text-[1.2vw] text-[1.2vh] text-zinc-200 text-start md:pt-[1vw] pt-[1vw]'>{post.title}</h3>
                    </div></Link>

                    
                    </div>
                    ))}
                   
                </Card>
            </div>
        </div>
    </div>
  )
}

export default Projects