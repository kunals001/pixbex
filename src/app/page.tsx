"use client"
import dynamic from 'next/dynamic'
import Loading from '@/components/Layouts/Loading';

const Main = dynamic(() => import('@/components/Home/Main'), { loading: () => <Loading />, ssr: false });

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