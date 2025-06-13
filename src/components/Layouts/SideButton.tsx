"use client"
import Link from 'next/link'
import React from 'react'

interface Button {
    Icon: React.ComponentType<{ className?: string }>,
    SelectIcon: React.ComponentType<{ className?: string }>,
    text: string,
    href: string,
    selected: boolean,
    onClick: () => void
}

const SideButton = ({ Icon, text, SelectIcon, href, selected, onClick }: Button) => {
    return (
        <Link href={href}>
            <button
                onClick={onClick}
                className={`px-1 py-0.5 relative flex items-center justify-start gap-1 hover:bg-zinc-800 transition-all duration-300 ease-in-out ${selected ? "bg-zinc-800" : ""} w-full cursor-pointer pl-4.5`}
            >
                <div className={`${selected ? "bg-blue-500" : ""} absolute top-0 left-0 w-[1vh] h-full transition-all duration-300 ease-in-out`}></div>

                {selected ? (
                    <SelectIcon className='size-7 text-zinc-200' />
                ) : (
                    <Icon className='size-7 text-zinc-200' />
                )}
                <p className='text-[1.2vw] font-second font-[500] text-zinc-100'>{text}</p>
            </button>
        </Link>
    )
}

export default SideButton;
