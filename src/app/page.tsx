"use client"
import dynamic from 'next/dynamic'

const Main = dynamic(() => import('@/components/Home/Main'), { ssr: false });

const Footer = dynamic(() => import("@/components/Footer/Footer"), {
  ssr: false,
})

const Page = () => {

  return (
    <main>
      
      <Main/>

      <Footer/>
    </main>
  )
}

export default Page