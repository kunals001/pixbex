'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { SpinningText } from "@/components/magicui/spinning-text";

const MotionImage = motion(Image);

// ✅ Custom hook to detect if screen is mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize(); // initial check
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return isMobile;
};

const MainText = () => {
  const isMobile = useIsMobile();

  return (
    <div className="relative w-full px-[1vh] md:px-[calc(100%-84vw)] flex flex-row md:pt-[8vw] pt-[10vh] items-center md:gap-[18vw] gap-[5vh] overflow-hidden">
      <div className="textstructer">
        {["Building", "Seamless", "Web Experiences"].map((item, index) => {
          return (
            <div key={index} className="markers">
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <MotionImage
                    initial={{ width: 0, opacity: 0 }}
                    animate={{
                      width: isMobile ? "7vh" : "8vw",
                      opacity: 1
                    }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    src="/Pixbex.png"
                    alt="Eye"
                    width={400}
                    height={400}
                    priority
                    className="md:w-[8vw] md:h-[4.5vw] w-[7vh] h-[3.8vh] mr-[0.5vw] relative md:top-[.1vw] rounded-md object-cover"
                  />
                )}
                <h1 className="uppercase md:text-[5vw] text-[4vh] leading-[3.6vh] md:leading-[4.5vw] tracking-tighter font-poppins font-bold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className=" pb-[6vh] md:pb-0">
        <SpinningText duration={8} radius={6} className='md:text-[1.4vw] capitalize text-[1vh]'>design better • build smarter • deliver faster •</SpinningText>
      </div>
    </div>
  );
};

export default MainText;
