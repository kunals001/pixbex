import { TrendingUp } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

type Props = {
  text: string;
  href: string;
  desc: string;
  ref?: React.Ref<HTMLDivElement>;
  num: string;
  className?: string;
};

const FastCard = ({ text, href, desc, ref, num, className }: Props) => {
  const targetNum = parseInt(num);
  const [displayNum, setDisplayNum] = useState(targetNum);
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isHovered) {
      controls.start({ y: 0, opacity: 1 });
      let current = 20;
      setDisplayNum(current);

      interval = setInterval(() => {
        current--;
        if (current <= targetNum) {
          clearInterval(interval);
          setDisplayNum(targetNum);
        } else {
          setDisplayNum(current);
        }
      },  20); 
    } else {
      setDisplayNum(targetNum);
    }

    return () => clearInterval(interval);
  }, [isHovered, targetNum, controls]);

  return (
    <motion.div
      ref={ref}
      className="relative md:h-[13vw] h-[18vh] p-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.015 }}
      transition={{
        type: "spring",
        stiffness: 140,
        damping: 18,
        mass: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="rounded-lg flex items-center justify-center w-full h-full bg-[#18181B] md:px-[1vw] md:py-[.5vw] px-[1vh] py-[1vh] shadow-[inset_0_4px_10px_rgba(0,0,0,0.6)] border-t-1 border-l-2 border-r-0.5 border-b-0.5 border-t-[#1d1b23e1] border-l-[#211c29]">
        <div className="w-full h-full">
          <div className="flex justify-between">
            <Image
              className={className}
              width={100}
              height={100}
              src={href}
              alt={text}
              loading="lazy"
            />

            <motion.p
              className="md:text-[1vw] text-[1.6vh] font-poppins font-[400] tracking-tighter font-italic text-zinc-400 md:mt-2"
              animate={controls}
              initial={{ y: 6, opacity: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.25, 1, 0.5, 1],
              }}
            >
              <span className="text-zinc-700">/</span>
              <span className="text-zinc-600">/</span>
              <span>0{displayNum}</span>
            </motion.p>
          </div>

          <h2 className="md:text-[1.3vw] flex items-center gap-2 text-[1.8vh] font-[600] tracking-tighter cursor-pointer pl-2 md:mt-[2vw] mt-2">
            {text} <TrendingUp />
          </h2>

          <p className="md:text-[1vw] text-[1.5vh] font-poppins font-[400] tracking-tighter md:leading-5.5 leading-4 font-italic pl-2 md:mt-4 mt-4 text-zinc-400">
            {desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FastCard;
