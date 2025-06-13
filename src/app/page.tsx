"use client"
import Main from '@/components/Home/Main'
import React from 'react'
import { useLenis } from '@/components/Layouts/UseLenis'

const Page = () => {

  useLenis();

  return (
    <div>
      <Main/>
    </div>
  )
}

export default Page