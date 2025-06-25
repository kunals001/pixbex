
"use client";
import { Webhook, SearchCheck, Cpu,Settings2 } from "lucide-react";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const BentoGrid = dynamic(() =>
  import("../magicui/bento-grid").then((mod) => mod.BentoGrid), { ssr: false }
);
const BentoCard = dynamic(() =>
  import("../magicui/bento-grid").then((mod) => mod.BentoCard), { ssr: false }
);



const files = [
  {
    name: "page.tsx",
    body: "A Next.js page component built with TypeScript. It defines the structure and behavior of a specific route in the application, supporting server-side rendering or static generation.",
  },
  {
    name: "layout.tsx",
    body: "Responsible for the shared layout of the app (header, footer, etc.) in Next.js. It wraps all page components and ensures a consistent UI across the application.",
  },
  {
    name: "api/auth.ts",
    body: "An API route in the Next.js backend that handles user authentication logic such as login, registration, and token validation, built using Node.js and TypeScript.",
  },
  {
    name: "userController.ts",
    body: "Contains business logic related to user operations (e.g. create, login, update). Acts as a bridge between routes and database models, written in Node.js with TypeScript.",
  },
  {
    name: "userModel.ts",
    body: "Defines the Mongoose schema and model for storing user data in MongoDB. Ensures structure, validation, and data integrity using TypeScript.",
  },
];


const features = [
  {
    Icon: Settings2,
    name: "Best Practices",
    description: "We automatically save your files as you type.",
    href: "/skills",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",

    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-zinc-900 bg-zinc-900 hover:bg-zinc-950/[.05]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="md:text-[.8vw] text-[1.5vh] text-zinc-200 font-medium ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs text-zinc-100">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: Webhook,
    name: "Web Designs",
    description: "Get notified when something happens.",
    href: "/skills",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Image loading="eager" property="true" src="https://ik.imagekit.io/tzq13ojas/web.webp?updatedAt=1749890797470" alt="web" width={1200} height={800} className="absolute w-full right-0 h-full object-cover border-none transition-all duration-300 ease-out group-hover:scale-105" />
    ),
  },
  {
    Icon: Cpu,
    name: "Technologies",
    description: "Supports 100+ integrations and counting.",
    href: "/skills",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Image loading="eager" property="true" src="https://ik.imagekit.io/tzq13ojas/skill.avif?updatedAt=1750833859214" alt="web" width={1200} height={800} className="absolute w-full right-0 h-full object-cover border-none transition-all duration-300 ease-out group-hover:scale-105" />
    ),
  },
  {
    Icon: SearchCheck,
    name: "SEO Optimization",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-3 lg:col-span-1",
    href: "/skills",
    cta: "Learn more",
    background: (
      <Image loading="eager" property="true" src="https://ik.imagekit.io/tzq13ojas/seo.avif?updatedAt=1750834117114" alt="seo" width={500} height={500} className="absolute w-full right-0 h-full object-cover border-none transition-all duration-300 ease-out group-hover:scale-105" />
    ),
  },
];

export default function BentoDemo() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
