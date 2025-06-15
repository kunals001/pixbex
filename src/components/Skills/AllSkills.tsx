import React from 'react';
import SkillCard from './SkillCard';
import {
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandNodejs,
  IconRoute,
  IconBrandTypescript
} from '@tabler/icons-react';
import { BentoGrid } from "../magicui/bento-grid";

const AllSkills = () => {
  return (
    <div className="md:mt-[3vw] mt-[3vh] w-full ">
      <BentoGrid className='grid-cols-2 grid'>
        <SkillCard
          src="/fast/next.js-min.png"
          Icon={IconBrandNextjs}
          name="Next.js for Fast, Modern & SEO-Optimized Apps"
          href="https://nextjs.org"
          cta="Explore Next.js"
          desc="I use Next.js to build blazing fast, SEO-friendly websites and applications with modern architecture and server-side rendering."
          className="md:w-[15vw] md:h-[15vw] w-[30vh] h-[30vh]"
        />

        <SkillCard
          src="/fast/mongodb-min.png"
          Icon={IconBrandMongodb}
          name="MongoDB for Flexible & Scalable Data Storage"
          href="https://www.mongodb.com/"
          cta="Explore MongoDB"
          desc="I use MongoDB as a NoSQL database solution for building fast, scalable, and flexible data architectures in modern web apps."
          className="md:w-[6vw] md:h-[12vw] w-[15vh] h-[30vh]"
        />

        <SkillCard
          src="/fast/react-min.png"
          Icon={IconBrandReact}
          name="React for Interactive UI Development"
          href="https://reactjs.org"
          cta="Explore React"
          desc="I use React to build fast, dynamic, and interactive user interfaces using reusable component architecture."
          className="md:w-[17.7vw] md:h-[16vw] w-[32vh] h-[30vh]"
        />

        <SkillCard
          src="/fast/nodejs-min.png"
          Icon={IconBrandNodejs}
          name="Node.js for High-Performance Backend Services"
          href="https://nodejs.org"
          cta="Explore Node.js"
          desc="I use Node.js to build scalable backend services and RESTful APIs with high performance and efficiency."
          className="md:w-[15vw] md:h-[17vw] w-[30vh] h-[33vh]"
        />

        <SkillCard
          src="/express-js.svg"
          Icon={IconRoute}
          name="Express.js for Lightweight API Development"
          href="https://expressjs.com"
          cta="Explore Express.js"
          desc="I use Express.js to structure and develop RESTful APIs, handling backend routing and middleware with ease."
          className="md:w-[15vw] md:h-[15vw] w-[30vh] h-[30vh]"
        />

        <SkillCard
          src="/fast/ts-min.png"
          Icon={IconBrandTypescript}
          name="TypeScript for Type-Safe and Scalable Code"
          href="https://www.typescriptlang.org"
          cta="Explore TypeScript"
          desc="I use TypeScript to write clean, maintainable, and type-safe code for better collaboration and fewer bugs."
          className="md:w-[15vw] md:h-[15vw] w-[30vh] h-[30vh]"
        />
      </BentoGrid>
    </div>
  );
};

export default AllSkills;
