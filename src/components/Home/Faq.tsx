import React, { useState } from 'react';
import { TextAnimate } from '../magicui/text-animate';
import { ChevronDown } from 'lucide-react'; 

const faqData = [
  {
    question: "How does your service work?",
    answer: "Our service provides an intuitive platform that allows users to create, manage, and scale their projects efficiently.",
  },
  {
    question: "Is this product free to use?",
    answer: "Yes, we offer a free plan with essential features. You can upgrade anytime for more advanced tools.",
  },
  {
    question: "How can I reset my password?",
    answer: "You can reset your password by clicking on 'Forgot Password' at the login screen and following the steps.",
  },
  {
    question: "Do you offer customer support?",
    answer: "Absolutely. We offer 24/7 chat and email support for all users.",
  },
  {
    question: "Can I use this on mobile devices?",
    answer: "Yes, our platform is fully responsive and optimized for mobile, tablet, and desktop screens.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className='w-full px-[1vh] md:px-[calc(100%-84vw)] md:mt-[5vw] mt-[5vh]'>
      <div className="md:text-[4vw] text-[3vh] font-[700] font-poppins md:leading-[4.5vw] pl-[3vh] md:pb-[2vw]">
        <TextAnimate animation="slideLeft" by="text">Frequently Asked</TextAnimate>
        <TextAnimate animation="slideRight" by="text">Questions</TextAnimate>
      </div>

      <div className="questions border-t border-zinc-800 w-full">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-zinc-800">
            <button
              className="w-full flex justify-between items-center text-left px-4 py-6 transition-all duration-300 hover:bg-zinc-900"
              onClick={() => toggleQuestion(index)}
            >
              <span className="font-semibold text-[1.8vh] md:text-[1vw]">{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 md:w-6 md:h-6 text-zinc-200 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`px-4 text-zinc-400 text-[1.6vh] md:text-[.9vw]  overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out  ${ openIndex === index ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
