"use client"
import { TextAnimate } from '@/components/magicui/text-animate'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {contactus} from '@/redux/slice/adminSlice'
import { useState } from 'react'
import toast from 'react-hot-toast'

const Page = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [reason, setReason] = useState("")

  const dispatch = useAppDispatch()
  const { loading, error} = useAppSelector((state) => state.admin);

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !message || !reason || reason === "default") {
    toast.error("Please fill all fields including a valid reason");
    return;
    }

    try {
      await dispatch(contactus({
        name, email, message, reason,
      })).unwrap();
      toast.success("Message sent successful");
      setName("");
      setEmail("");
      setMessage("");
      setReason("");
    } catch (error) {
      console.log(error)
    }
  }

  const className = "w-full md:px-[1vw] md:py-[.5vw] px-4 py-2.5 rounded-lg outline-none placeholder:text-zinc-400 placeholder:text-[1.8vh] placeholder:md:text-[1vw] text-zinc-100 md:text-[1vw] text-[1.8vh] bg-zinc-900"

  return (
    <div className='w-full px-[1vh] md:mt-4 mt-3 md:px-[calc(100%-90vw)] text-zinc-100 flex flex-col md:gap-[2vw] gap-[2vh] items-center'>
      <div className="w-full h-[10vh] flex flex-col gap-2 items-center justify-center">
        <TextAnimate animation="slideLeft" by="character" className='md:text-[3vw] text-[3.5vh] text-zinc-100 font-[600] leading-none tracking-tighter'>Let's Connect</TextAnimate>

        <TextAnimate animation="blurIn" as="p" by="word" className='md:text-[1.3vw] text-[2vh] text-zinc-300 font-[400] leading-none tracking-tighter text-center md:w-[35vw]'>Feel free to reach out for collaborations, freelance projects, or just a friendly hello!</TextAnimate>
      </div>

      <form onSubmit={handleSubmit} className='md:w-[40vw] w-full flex flex-col gap-3'>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Your Name...' className={className} required/>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Your Email...' className={className} required/>

        <select value={reason} onChange={(e) => setReason(e.target.value)} className='w-full md:px-[1vw] md:py-[.5vw] px-4 py-2.5 rounded-lg outline-none text-zinc-400 md:text-[1vw] text-[1.8vh] bg-zinc-900 cursor-pointer'>
          <option value="default" disabled>Reason for Contact</option>
          <option value="collaboration">Collaboration</option>
          <option value="freelance">Freelance</option>
          <option value="other">Other</option>
        </select>

        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Your Message...' className="w-full md:px-[1vw] md:py-[.5vw] px-4 py-2.5 rounded-lg outline-none placeholder:text-zinc-400 placeholder:text-[1.8vh] placeholder:md:text-[1vw] text-zinc-100 md:text-[1vw] text-[1.8vh] bg-zinc-900 resize-none md:h-[20vw] h-[30vh]" required/>

        {error && <p className='text-red-500 text-[1.8vh] md:text-[1vw]'>{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="md:text-[1vw] text-[1.8vh] md:px-[1.5vw] px-4 py-2.5 md:py-[.5vw] rounded-lg text-zinc-200 cursor-pointer bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 ease-in-out font-semibold"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>


    </div>
  )
}

export default Page