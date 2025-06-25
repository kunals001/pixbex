"use client"
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Main = dynamic(() => import('@/components/Home/Main'), { ssr: false });

const Footer = dynamic(() => import("@/components/Footer/Footer"), {
  ssr: false,
})

const Page = () => {

  return (
    <main>
      <Head>
        <title>Kunal| Full Stack MERN Developer</title>
        <meta name="description" content="I build fast and scalable web apps using MERN stack. Open for freelance & full-time roles." />
      </Head>
      
      <Main/>

      <Footer/>
    </main>
  )
}

export default Page