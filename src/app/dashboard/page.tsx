"use client"
import React,{useEffect, useState} from 'react'
import { useAppSelector } from '@/redux/hooks'
import SideBar from '@/components/Layouts/SideBar';
import { useSearchParams } from 'next/navigation';
import Contact from '@/components/Layouts/Contact';
import AddPost from '@/components/Layouts/AddPost';
import GetPosts from '@/components/Layouts/GetPosts';

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
      </div>

    </div>
  )
}

export default Page