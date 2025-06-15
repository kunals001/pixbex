"use client"
import Main from '@/components/Home/Main'
import React from 'react'
import { useLenis } from '@/components/Layouts/UseLenis'

const Page = () => {

  useLenis();

  return (
    <main>
      <Main/>
    </main>
  )
}

export default Page