"use client"
import React,{useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { getAllHireRequests } from '@/redux/slice/adminSlice'
import {deleteHireRequest} from "@/redux/slice/adminSlice"
import { useRouter } from 'next/navigation'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import toast from 'react-hot-toast'



const Customers = () => {

  const dispatch = useAppDispatch()
  const {error,hireRequests} = useAppSelector((state) => state.admin)


  useEffect(() => {
    dispatch(getAllHireRequests())
  }, [dispatch])

  const handleDelete = (id:string) => {
    try {
      dispatch(deleteHireRequest(id)).unwrap()
      toast.success("Hire Request deleted successfully")
      window.location.reload()
    } catch (error) {
      console.log("error in delete user",error)
    }
  }

  return (
    <div className='p-1'>
        {hireRequests && hireRequests?.length > 0 ? (
          <Table>
            <TableHeader className=''>
              <TableRow className='md:text-[1.1vw] cursor-pointer select-none bg-blue-300 '>
                <TableHead>No.</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>DeadLine</TableHead>
                <TableHead>Budget</TableHead>
                <TableHead>Project Type</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Website</TableHead>
                <TableHead >Date</TableHead>
                <TableHead >Delete</TableHead>
              </TableRow>
            </TableHeader>

            {hireRequests.map((hire,index)=>(
              <TableBody key={hire?._id} className=' bg-zinc-900 transition-all duration-300 ease-in-out text-zinc-200'>
                <TableRow>

                  <TableCell className='md:text-[1vw] font-semibold hover:underline cursor-pointer'>
                    {index + 1}
                  </TableCell>

                  <TableCell className='md:text-[1vw] font-semibold hover:underline cursor-pointer'>
                    {hire?.name}
                  </TableCell>

                  <TableCell className="md:text-[1vw] font-[500] relative group cursor-pointer">
                    <span className="hover:underline">
                      {hire?.description.slice(0, 20) + "..."}
                    </span>

                    {/* Tooltip */}
                    <div className="absolute left-1/2 top-0 mt-2 w-max max-w-[300px] -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-zinc-800 text-white text-sm rounded-lg px-4 py-2 shadow-lg z-50 break-words whitespace-pre-wrap">
                      {hire?.description}
                    </div>
                  </TableCell>

                   <TableCell className='md:text-[1vw] font-[500] hover:underline cursor-pointer leading-none'>
                    {hire?.email}
                  </TableCell>

                  <TableCell className='md:text-[1vw] font-[500] hover:underline cursor-pointer leading-none'>
                    {hire?.preferredCommunication}
                  </TableCell>

                  <TableCell className='md:text-[1vw] font-[500] hover:underline cursor-pointer leading-none'>
                    {hire?.deadline}
                  </TableCell>

                  <TableCell className='md:text-[1vw] font-[500] hover:underline cursor-pointer leading-none'>
                    {hire?.budget}
                  </TableCell>

                  <TableCell className='md:text-[1vw] font-[500] hover:underline cursor-pointer leading-none relative group'>
                    {hire?.projectType.slice(0, 20) + "..."}

                    {/* Tooltip */}
                    <div className="absolute left-1/2 top-0 mt-2 w-max max-w-[300px] -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-zinc-800 text-white text-sm rounded-lg px-4 py-2 shadow-lg z-50 break-words whitespace-pre-wrap">
                      {hire?.projectType}
                    </div>
                  </TableCell>

                  <TableCell className='md:text-[1vw] font-[500] hover:underline leading-none relative group cursor-pointer'>
                    {hire?.message?.slice(0, 20) + "..."}

                    {/* Tooltip */}
                    <div className="absolute left-1/2 top-0 mt-2 w-max max-w-[300px] -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-zinc-800 text-white text-sm rounded-lg px-4 py-2 shadow-lg z-50 break-words whitespace-pre-wrap">
                      {hire?.message}
                    </div>
                  </TableCell>

                  <TableCell className='md:text-[1vw] font-[500] hover:underline cursor-pointer leading-none'>
                    {hire?.referenceWebsite}
                  </TableCell>

                  <TableCell className='md:text-[1vw] font-[500] hover:underline cursor-pointer'>
                    {new Date(hire?.createdAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric"
                    })}
                  </TableCell>

                  <TableCell>
                    <button onClick={() => handleDelete(hire?._id)} className='md:text-[1vw] text-white bg-red-400 px-4 py-2 rounded-md cursor-pointer' >Delete</button>
                  </TableCell>
                </TableRow>
              </TableBody>
            ))}
          </Table>
      ) : (
        <div className="flex flex-col items-center">
        <h2 className='md:text-[1.5vw] font-[500] text-zinc-600 text-center mt-2 font-second'>
          No hire requests
        </h2>
        </div>
      )}

      {error && <p>{error}</p>}
    </div>
  )
}

export default Customers