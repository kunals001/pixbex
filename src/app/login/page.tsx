"use client"
import Input from "@/components/Layouts/Input"
import {Key, Loader2, Mail} from "lucide-react"
import React, { useState ,useEffect} from "react"
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { login } from "@/redux/slice/adminSlice";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Page = () => {

  const dispatch = useAppDispatch()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const router = useRouter()

  const { loading, error ,user} = useAppSelector((state) => state.admin);

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    await dispatch(login({ email, password })).unwrap();
    toast.success("Login successful");
    router.push("/");
  } catch (error) {
    console.log("Catch error:", error);
  }
  };

  return (
    <div className="w-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center md:w-[30vw] w-full md:h-[40vw] h-[60vh] relative md:px-0 px-6">

            <h2 className="md:text-[2.2vw] text-[2vh] font-second font-[600] select-none text-transparent background-clip-text bg-clip-text bg-gradient-to-r from-[#8d81ff] to-[#8d3cf7] ">Welcome Back</h2>

            <form onSubmit={handleSubmit} className="w-full flex flex-col md:px-[2vw] mt-4">

              <Input
                icon={Mail}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />

              <Input
                icon={Key}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                required
              />

              {error && (
               <p className='md:text-[.8vw] text-[1.5vh] text-red-400 font-[400] mt-2'>{error}</p>
              )}

              <button type="submit" disabled={loading} className="bg-gradient-to-l from-[#8d81ff] to-[#8d3cf7] md:text-[1vw] text-[1.8vh] text-zinc-100 font-[600] cursor-pointer  py-2 rounded-lg mt-4">{loading ? <Loader2 className="animate-spin mx-auto" /> : "Login"}</button>

            </form>
        </div>
    </div>
  )
}

export default Page