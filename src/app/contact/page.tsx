"use client"
import { TextAnimate } from '@/components/magicui/text-animate'
import React from 'react'

const Page = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      
    } catch (error) {
      console.log(error)
    }
  }

  const className = "w-full md:px-[1vw] md:py-[.5vw] px-4 py-2.5 rounded-lg outline-none placeholder:text-zinc-400 placeholder:text-[1.8vh] placeholder:md:text-[1vw] text-zinc-100 md:text-[1vw] text-[1.8vh] bg-zinc-900"

  return (
    <div className='w-full px-[1vh] md:mt-4 mt-3 md:px-[calc(100%-90vw)] text-zinc-100 flex flex-col md:gap-[2vw] gap-[2vh] items-center'>
      <div className="w-full h-[10vh] flex flex-col gap-2 items-center justify-center">
        <TextAnimate animation="slideLeft" by="character" className='md:text-[3vw] text-[3.5vh] text-zinc-100 font-[600] leading-none tracking-tighter'>Let's Connect</TextAnimate>

        <TextAnimate animation="blurIn" as="p" by="word" className='md:text-[1.5vw] text-[2vh] text-zinc-300 font-[400] leading-none tracking-tighter text-center md:w-[35vw]'>Feel free to reach out for collaborations, freelance projects, or just a friendly hello!</TextAnimate>
      </div>

      <form onSubmit={handleSubmit} className='md:w-[40vw] w-full flex flex-col gap-3'>
        <input type="text" placeholder='Your Name...' className={className} required/>
        <input type="email" placeholder='Your Email...' className={className} required/>

        <select className='w-full md:px-[1vw] md:py-[.5vw] px-4 py-2.5 rounded-lg outline-none text-zinc-400 md:text-[1vw] text-[1.8vh] bg-zinc-900 cursor-pointer'>
          <option value="default" disabled selected>Reason for Contact</option>
          <option value="collaboration">Collaboration</option>
          <option value="freelance">Freelance</option>
          <option value="other">Other</option>
        </select>

        <textarea placeholder='Your Message...' className="w-full md:px-[1vw] md:py-[.5vw] px-4 py-2.5 rounded-lg outline-none placeholder:text-zinc-400 placeholder:text-[1.8vh] placeholder:md:text-[1vw] text-zinc-100 md:text-[1vw] text-[1.8vh] bg-zinc-900 resize-none md:h-[20vw] h-[30vh]" required/>

        <button
          type="submit"
          className="md:text-[1vw] text-[1.8vh] md:px-[1.5vw] px-4 py-2.5 md:py-[.5vw] rounded-lg text-zinc-200 cursor-pointer bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 ease-in-out font-semibold"
        >
          Send Message
        </button>
      </form>


    </div>
  )
}

export default Page