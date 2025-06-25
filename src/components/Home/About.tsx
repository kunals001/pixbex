import Image from 'next/image'
import dynamic from 'next/dynamic'

const TextAnimate = dynamic(() => import("@/components/magicui/text-animate"), {
  ssr: false,
});

const About = () => {
  return (
    <div className='w-full px-[1vh] md:px-[calc(100%-84vw)] md:mt-[5vw] mt-[5vh] md:pb-[6vw] pb-[8vh]'>
        <div className="card w-full relative rounded-2xl overflow-hidden">
            <Image src="/dark.avif" alt="dark theme" width={1000} height={1000} className="w-full md:h-[30vw] object-cover rounded-2xl relative select-none rotate-180" loading='eager' priority={true}/>

            <div className="absolute top-0 left-0 w-full h-full bg-[#000000d1] md:p-[1vw] p-[2vh] flex flex-col gap-[3vw]">

                
                <TextAnimate animation="slideLeft" by="character" className='md:text-[5vw] text-[2.2vh] md:leading-[4.5vw] leading-[3.6vh] tracking-tighter font-poppins font-bold text-zinc-200 md:mt-[4.5vw]'>Hi, I&apos;m Kunal</TextAnimate>

                <p className='md:w-[45vw] md:text-[1vw] text-[1.3vh] text-zinc-300'>a self-taught web developer focused on building fast, modern, and scalable web applications.
                I specialize in frontend and backend development using technologies like React.js, Next.js, Tailwind CSS, Node.js, Express, and MongoDB. I&apos;ve built multiple real-world projects including authentication systems, chat apps, and dynamic dashboards.
                I enjoy creating clean UI, writing efficient APIs, and solving real-world problems through code. I&apos;m always learning new tools and improving my development workflow.
                Currently, I&apos;m open to freelance work, internships, and exciting collaboration opportunities.
                Let&apos;s build something awesome together!</p>

                <div className="absolute w-[15vw] h-[15vw] top-1/3 right-[4vw] hidden md:block group rounded-full">
                    <Image src="/about.avif" alt="About me" width={400} height={400} className="colors object-cover w-[15vw] h-[15vw] rounded-full relative select-none" loading='eager' priority={true}/>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default About