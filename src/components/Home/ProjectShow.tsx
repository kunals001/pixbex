"use client";

import Link from 'next/link';
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { BadgeInfo, TrendingUp } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getAllPosts } from '@/redux/slice/adminSlice';
import { ShinyButton } from '../magicui/shiny-button';
import { InteractiveHoverButton } from '../magicui/interactive-hover-button';

const MainVideoHoverPlay = dynamic(() => import('./MainVideoHoverPlay'), { ssr: false });
const Card = dynamic(() => import('@/components/Hire/Card'), { ssr: false });

const ProjectShow = () => {
  const dispatch = useAppDispatch();
  const { posts, loading } = useAppSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  if (loading) return <div className="text-white p-4">Loading posts...</div>;

  return (
    <section className="md:px-[calc(100%-84vw)] px-2 md:pb-[8vw] pb-[3vh] md:mt-[4vw] mt-[3vh] border-t border-zinc-800">
      {posts.length > 0 ? (
        <div className="flex md:flex-row flex-col-reverse gap-6">
          
          {/* Left Button */}
          <div className="md:w-1/2 w-full flex items-center justify-center">
            <div className="md:sticky top-[5vw] z-20">
              <Link href="/skills">
                <InteractiveHoverButton className="text-[2vh] md:text-[1.3vw] text-zinc-100 bg-gradient-to-r from-purple-500 to-blue-500 border-none md:px-[2.5vw] md:py-[.6vw]">
                  Show Skills
                </InteractiveHoverButton>
              </Link>
            </div>
          </div>

          {/* Right Projects */}
          <div className="md:w-1/2 w-full flex flex-col gap-6">
            {posts.map((post) => (
              <Card key={post._id} col1="000000" col2="000000" className="bg-zinc-900 p-4 rounded-2xl">
                <MainVideoHoverPlay videoUrl={post.video} link="/skills" bubbleText="Hire Me" Icon={TrendingUp} />
                
                <div className="mt-3">
                  <h1 className="md:text-[1.5vw] text-[2vh] font-bold tracking-tight bg-zinc-900 rounded-md px-3 py-1 text-zinc-100 flex items-center justify-between">
                    {post.title}
                    <span className="bg-[#008ee7] text-white px-2 py-0.5 rounded-md text-sm flex items-center gap-1">
                      <BadgeInfo className="size-4" />{post.cate}
                    </span>
                  </h1>

                  <p className="md:text-[1vw] text-[1.6vh] font-light italic text-zinc-400 mt-2 px-3">
                    {post.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-3 px-3">
                    {post.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-zinc-300 text-zinc-800 rounded-md text-xs md:text-[.75vw] font-medium tracking-tight hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <Link href={post.tech}>
                    <ShinyButton className="mt-4 w-full bg-gradient-to-l from-purple-500 to-blue-500 border-none md:py-[.3vw] py-[1vh] md:px-[2.5vw]">
                      Show Project
                    </ShinyButton>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-white text-center py-10">No projects found.</div>
      )}
    </section>
  );
};

export default ProjectShow;
