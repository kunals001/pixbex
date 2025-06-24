"use client"
import dynamic from "next/dynamic";

const ProjectShow = dynamic(() => import('@/components/Home/ProjectShow'), {
  loading: () => <p>Loading projects...</p>,
  ssr: false, // agar browser-only code ho to, nahi to hata sakte ho
});

const TextAnimation = dynamic(() => import('@/components/Home/ProjectText'), {
  loading: () => <p>Loading text animation...</p>,
  ssr: false,
});


const Page = () => {

  return (
    <div className='w-full min-h-screen md:mt-4 mt-2 px-[1vh] md:px-[calc(100%-84vw)] text-zinc-200 bg-gradient-to-b from-black to-[#0c0c13c9]'>
      <TextAnimation />
      <ProjectShow />
    </div>
  )
}

export default Page