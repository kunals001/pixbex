import React from 'react';
import { AuroraText } from "@/components/magicui/aurora-text";
import Card from './Card';
import { ArrowRight } from 'lucide-react';
import { TextAnimate } from '../magicui/text-animate';

const steps = ["Discover", "Design", "Develop", "Launch"];

const WorkFlow = () => {
  return (
    <div className="w-full flex flex-col items-center text-center md:py-[3vw] py-[2vh]">
      {/* Heading */}
      <div className="w-full relative flex justify-center">
        <h2 className="relative z-10 rounded-md bg-black text-zinc-100 font-[700] tracking-tight md:text-[2.7vw] text-[2.7vh] md:leading-[2.5vw] leading-[3vh]">
          <AuroraText className="md:mt-0 mt-[2vh]">Work Flow</AuroraText>
        </h2>

        {/* Decorative Lines Behind Text */}
        <div className="absolute w-full top-1/2 -translate-y-1/2 mt-2 z-0">
          <div className="flex flex-col items-center w-full">
            <div className="w-full bg-zinc-200 md:h-[.15vw] h-[.1vh] mb-[.3vh]" />
            <div className="w-full bg-zinc-200 md:h-[.15vw] h-[.1vh]" />
          </div>
        </div>
      </div>

      {/* Workflow Steps */}
      <div className="flex items-center md:gap-[1.5vw] md:mt-[5vw] mt-[3vh]">
        {steps.map((step, index) => (
          <React.Fragment key={step}>
            <div className="text-purple-300 shadow-xl shadow-gray-900 font-poppins font-[500] tracking-tighter md:text-[2vw] text-[1.5vh]">
              <Card col1="0B1D51" col2="0B1D51" className="md:rounded-3xl rounded-xl">
                <TextAnimate
                  animation="slideLeft"
                  by="word"
                  className="md:px-[2vw] md:py-[.4vw] px-[1.5vh] py-[.5vh]"
                >
                  {step}
                </TextAnimate>
              </Card>
            </div>
            {index < steps.length - 1 && (
              <ArrowRight className="text-purple-400 md:size-9 size-5" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default WorkFlow;
