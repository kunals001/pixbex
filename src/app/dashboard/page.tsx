"use client"
import React,{useEffect, useState} from 'react'
import { useAppSelector } from '@/redux/hooks'
import { useSearchParams } from 'next/navigation';
import dynamic from "next/dynamic";

const SideBar = dynamic(() => import('@/components/Layouts/SideBar'), {
  loading: () => <p>Loading sidebar...</p>,
  ssr: false,
})

const Contact = dynamic(() => import('@/components/Layouts/Contact'), {
  loading: () => <p>Loading contact...</p>,
  ssr: false, // agar browser APIs use ho to, nahi to hata do
});

const AddPost = dynamic(() => import('@/components/Layouts/AddPost'), {
  loading: () => <p>Loading add post...</p>,
  ssr: false,
});

const GetPosts = dynamic(() => import('@/components/Layouts/GetPosts'), {
  loading: () => <p>Loading posts...</p>,
  ssr: false,
});

const Hire = dynamic(() => import('@/components/Layouts/Hire'), {
  loading: () => <p>Loading hire section...</p>,
  ssr: false,
});


const Page = () => {

  const searchParams = useSearchParams();
  const [tab, setTab] = useState('/admin-dashboard/?tab=dashboard');

  useEffect(() => {
    const tabFromUrl = searchParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [searchParams]);


  const {user} = useAppSelector((state) => state.admin);

  useEffect(() => {
    if (!user || !user.isAdmin) {
      window.location.href = "/";
    }
  }, [user]);

  return (
    <div className='w-full px-[15vw] hidden md:flex gap-3'>

      <div className="w-[10vw]">
        <SideBar/>
      </div>

      <div className="w-[60vw]">
        {tab === "contact" && <Contact/>}
        {tab === "add-post" && <AddPost/>}
        {tab === "posts" && <GetPosts/>}
        {tab === "hires" && <Hire/>}
      </div>

    </div>
  )
}

export default Page