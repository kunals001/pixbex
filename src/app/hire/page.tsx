"use client";
import React, { useState } from "react";
import ThreeDCard from "@/components/Hire/GlowDiv";
import { TextAnimate } from "@/components/magicui/text-animate";
import { ShinyButton } from "@/components/magicui/shiny-button";
import Card from "@/components/Hire/Card";
import { motion, AnimatePresence } from "framer-motion";
import { BentoDemo } from "@/components/Hire/Offer";
import dynamic from "next/dynamic";

const WorkFlow = dynamic(() => import("@/components/Hire/WorkFlow"), {
  loading: () => <p className="mx-auto">Loading workflow...</p>,
  ssr: false, // Optional: only add if component depends on browser APIs
});

const Projects = dynamic(() => import("@/components/Hire/Projects"), {
  loading: () => <p className="mx-auto">Loading projects...</p>,
  ssr: false,
});

const HireForm = dynamic(() => import("@/components/Hire/HireForm"), {
  loading: () => <p className="mx-auto">Loading form...</p>,
  ssr: false,
});


const Page = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="px-[1vh] md:px-[calc(100%-84vw)] md:py-[3vw] py-[2vh] bg-gradient-to-b from-black to-[#0d0f17c9] min-h-screen">
        <ThreeDCard className="w-full md:h-[20vw] h-[20vh] rounded-xl flex ">
          <div className="h-full md:py-[3vw] py-[3vh] w-2/3 md:text-[2.5vw] text-[2.3vh] font-[700] md:leading-[2.5vw] text-zinc-100 leading-[3vh] tracking-tight flex flex-col items-center text-center">
            <TextAnimate animation="blurInUp" by="character" className="leading-none">
              Start Something Great
            </TextAnimate>

            <p className="md:text-[1vw] text-[1.2vh] md:w-[35vw] font-poppins font-[400] tracking-tighter md:leading-5.5 leading-4 font-italic pl-2 md:mt-7 mt-4 text-zinc-200">
              I design and develop modern, user-focused interfaces with a strong attention to detail and performance.
            </p>

            <ShinyButton
              onClick={() => setOpen(true)}
              className="md:mt-[5vw] py-[.2vh] mt-4 md:px-[2.5vw] md:py-[.1vw] border-none bg-gradient-to-l from-purple-500 to-blue-500"
            >
              Hire Me
            </ShinyButton>
          </div>

          <div className="w-1/3 h-full flex flex-col items-center justify-center relative">
            <div className="flex items-center justify-center shadow-lg shadow-[#000000] overflow-hidden">
              <Card className="md:w-[20vw] md:h-[13vw] w-[13vh] h-[9vh] md:px-[2vw] md:pt-[3vw] px-[2vh] pt-[1vh]">
                <div className="w-full md:h-[.5vw] h-[.5vh] rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
              </Card>
            </div>

            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <Card
                col1="600073"
                col2="500073"
                className="absolute -translate-x-1/2 md:-translate-y-[9vw] md:w-[15vw] md:h-[8vw] w-[9vh] h-[6vh] px-2 pt-2 -translate-y-[6.8vh] md:px-[2vw] md:pt-[3vw]"
              >
                <div className="w-full h-[.5vw] rounded-full bg-gradient-to-r from-purple-800 to-blue-900" />
              </Card>
            </motion.div>
          </div>
        </ThreeDCard>

        <div className="md:mt-[5vw] mt-[5vh]">
          <WorkFlow />
        </div>

        <div className="md:mt-[5vw] mt-[5vh]">
          <BentoDemo />
        </div>

        <div className="">
          <Projects />
        </div>
      </div>

      <AnimatePresence>
       {open && (
         <motion.div
           key="hire-form-overlay"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 0.3, ease: "easeInOut" }}
           className="fixed top-0 left-0 w-screen h-screen z-[999] backdrop-blur-2xl bg-black/20 flex items-center justify-center"
         >
           <div className="relative w-full max-w-[90vw] max-h-[95vh] md:py-[2vw] py-[2vh] flex justify-center items-start">
             <HireForm setOpen={setOpen} />
           </div>
         </motion.div>
       )}
     </AnimatePresence>
    </>
  );
};

export default Page;
