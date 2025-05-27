
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { AnimatedGradientTextDemo} from "../Layouts/ButtonShine";



const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

const Header = () => {
  const navItemClass = "btnClass text-[1.4vh] px-[.2vh]  py-[.2vh] md:text-[1.1vw] md:px-[.4vw] md:py-[.2vw] rounded-full md:rounded-[.1vw] overflow-hidden relative inline-block hover:cursor-pointer ";
  const underlineClass = "underClass hidden md:block under-1 w-full md:h-[.3vh] h-[.5vw] bg-[#E8F9FF]";
  const fontClass = "font-barlow px-[.3vh] md:px-0";

  return (
    <header className='sticky top-0 z-20 w-full md:h-[5vw] h-[6vh]  bg-transparent flex items-center justify-center'>
      <div className="nav absolute md:w-[70vw] w-[90vw] rounded-full md:h-[4vw] h-[5vh] bg-[rgba(196,217,255,.1)] border-[.3vh] backdrop-blur-md border-[#C4D9FF] flex items-center justify-between px-[1vw] py-[.5vw]">
        
        {/* Logo */}
        <Link href="/">
          <Image
            width={1200}
            height={800}
            className='md:w-[4.9vw] md:h-[2.8vw] w-[5vh]  h-[3vh] bg-cover select-none ml-[.2vh] md:ml-0'
            src="/pixbex.png"
            alt="main banner"
            loading='eager'
            priority
          />
        </Link>

        {/* Navigation Links */}
        <div className="Nav-Links text-white flex gap-[.5vw] items-center select-none">
          {navLinks.map(({ name, href }) => (
            <Link key={name} href={href} className={navItemClass}>
              <p className={fontClass}>{name}</p>
              <div className={underlineClass}></div>
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="Auth flex gap-[.5vw] font-barlow font-[600] items-center">
          <Link href="/login">
            <AnimatedGradientTextDemo text={"Login"} className='md:text-[1.1vw]'/>
          </Link>
          <Link href="/signup">
            <InteractiveHoverButton className='hidden md:block border-2 border-[#78c7e4] text-zinc-900 bg-gradient-to-r from-[#93a3fc] to-[#398cff]'>Become a client</InteractiveHoverButton>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
