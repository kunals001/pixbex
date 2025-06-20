
import { TextAnimate } from '../magicui/text-animate';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Which technologies do you specialize in?",
    answer: "I build fast, responsive, and scalable web applications using modern technologies like Next.js, TypeScript, Tailwind CSS, Node.js, Express, and MongoDB. From designing beautiful user interfaces to creating powerful backend systems, I handle the entire development process.",
  },
  {
    question: "Are you open to freelance or full-time opportunities?",
    answer: "Yes, I'm open to both freelance and full-time opportunities. I enjoy collaborating on meaningful projects where I can solve real problems and create smooth user experiences.",
  },
  {
    question: "How do you ensure performance and scalability in your projects?",
    answer: "I use Next.js for fast rendering and SEO optimization, and TypeScript for scalable, maintainable code. By combining efficient frontend design with well-structured backend logic and optimized APIs, I ensure my projects perform well and scale smoothly.",
  },
  {
    question: "Have you worked on any real-world or live projects?",
    answer: "Yes, I've built and deployed multiple real-world web apps using full-stack technologies. You can explore them on my Projects page!",
  },
  {
    question: "How can I contact you or collaborate with you?",
    answer: "You can easily reach out to me through the Contact page on this website or directly via email or LinkedIn. Whether you have a project idea, collaboration offer, or just want to connect — I'd love to hear from you!",
  },
];

const Faq = () => {

  return (
    <div className='w-full px-[1vh] md:px-[calc(100%-84vw)] md:mt-[5vw] mt-[5vh] md:pb-[6vw] pb-[8vh]'>
      <div className="md:text-[4vw] text-[3vh] font-[700] font-poppins md:leading-[4.5vw] md:pb-[2vw]">
        <TextAnimate animation="slideLeft" by="text">Frequently Asked</TextAnimate>
        <TextAnimate animation="slideRight" by="text">Questions</TextAnimate>
      </div>

      <div className="questions border-t border-zinc-800 w-full ">
        {faqData.map((item, index) => (
           <Accordion
              key={index}
              type="single"
              collapsible
              className="w-full border-b border-zinc-800 transition-all duration-300 ease-in-out group hover:px-[1vw] hover:bg-zinc-900"
              defaultValue="item-1"

            >
            <AccordionItem value="item-1">
              <AccordionTrigger className='md:text-[1.2vw] text-[1.5vh]'>{item.question}</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className='md:text-[1vw] text-[1.2vh] text-zinc-300'>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Faq;
