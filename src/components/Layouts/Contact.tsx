"use client"
import React,{useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { getAllContact } from '@/redux/slice/adminSlice'
import { deleteContact } from '@/redux/slice/adminSlice'
import { toast } from 'react-hot-toast'

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
  const {error,contact} = useAppSelector((state) => state.admin)


  useEffect(() => {
    dispatch(getAllContact())
  }, [dispatch])

  const handleDelete = (id:string) => {
    try {
      dispatch(deleteContact(id)).unwrap()
      toast.success("Contact deleted successfully")
      window.location.reload()
    } catch (error) {
      console.log("error in delete user",error)
    }
  }


  return (
    <div className='p-1'>
        {contact && contact?.length > 0 ? (
          <Table>
            <TableHeader className=''>
              <TableRow className='md:text-[1.1vw] cursor-pointer select-none bg-blue-300 '>
                <TableHead>No.</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead >Delete</TableHead>
              </TableRow>
            </TableHeader>

            {contact.map((con,index)=>(
              <TableBody key={con?._id} className=' bg-zinc-900 transition-all duration-300 ease-in-out text-zinc-200'>
                <TableRow>

                  <TableCell className='md:text-[1vw] font-semibold hover:underline cursor-pointer'>
                    {index + 1}
                  </TableCell>

                  <TableCell className='md:text-[1vw] font-semibold hover:underline cursor-pointer'>
                    {con?.name}
                  </TableCell>

                  <TableCell className='md:text-[1vw] font-[500] hover:underline cursor-pointer'>
                    {con?.email}
                  </TableCell>

                   <TableCell className='md:text-[1vw] font-[500] hover:underline cursor-pointer leading-none'>
                    {con?.message.slice(0,20) + "..."}
                  </TableCell>

                  <TableCell className='md:text-[1vw] font-[500] hover:underline cursor-pointer'>
                    {new Date(con?.createdAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric"
                    })}
                  </TableCell>

                  <TableCell>
                    <button onClick={() => handleDelete(con?._id)} className='md:text-[1vw] text-white bg-red-400 px-4 py-2 rounded-md cursor-pointer' >Delete</button>
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