"use client"
import React,{useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { getAllPosts } from '@/redux/slice/adminSlice'
import { useRouter } from 'next/navigation'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"



const Customers = () => {

  const dispatch = useAppDispatch()
  const {error,posts} = useAppSelector((state) => state.admin)

  const router = useRouter()


  useEffect(() => {
    dispatch(getAllPosts())
  }, [dispatch])



  return (
    <div className='p-1'>
        {posts && posts?.length > 0 ? (
          <Table>
            <TableHeader className=''>
              <TableRow className='md:text-[1.1vw] cursor-pointer select-none bg-blue-300 '>
                <TableHead>No.</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead >Delete</TableHead>
              </TableRow>
            </TableHeader>

            {posts.map((con,index)=>(
              <TableBody key={con?._id} className=' bg-zinc-900 transition-all duration-300 ease-in-out text-zinc-200'>
                <TableRow>

                  <TableCell className='md:text-[1vw] font-semibold hover:underline cursor-pointer'>
                    {index + 1}
                  </TableCell>

                  <TableCell className='md:text-[1vw] font-semibold hover:underline cursor-pointer'>
                    {con?.title}
                  </TableCell>

                  <TableCell className='md:text-[1vw] font-[500] hover:underline cursor-pointer'>
                    {con?.desc.slice(0,20) + "..."}
                  </TableCell>

                   <TableCell className='md:text-[1vw] font-[500] hover:underline cursor-pointer leading-none'>
                    {con?.cate}
                  </TableCell>

                  <TableCell className='md:text-[1vw] font-[500] hover:underline cursor-pointer'>
                    {new Date(con?.createdAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric"
                    })}
                  </TableCell>

                  <TableCell>
                    <button onClick={() => router.push(`/update-post/${con?._id}`)} className='md:text-[1vw] text-white bg-blue-400 px-4 py-2 rounded-md cursor-pointer' >Update</button>
                  </TableCell>
                </TableRow>
              </TableBody>
            ))}
          </Table>
      ) : (
        <div className="flex flex-col items-center">
        <h2 className='md:text-[1.5vw] font-[500] text-zinc-600 text-center mt-2 font-second'>No Contact found
        </h2>
        </div>
      )}

      {error && <p>{error}</p>}
    </div>
  )
}

export default Customers