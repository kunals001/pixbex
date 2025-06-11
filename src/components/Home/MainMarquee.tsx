import Image from 'next/image';
import { cn } from "@/lib/utils";
import { Marquee } from '../magicui/marquee';
import Link from 'next/link';


const reviews = [
  {
    name: "Nextjs",
    username: "@nextjs",
    body: "Enables server-side rendering for better SEO.",
    img: "/skills/next.png",
    alt: "Nextjs",
  },
  {
    name: "Nodejs",
    username: "@nodejs",
    body: "Builds fast and scalable backend services.",
    img: "/skills/Node.png",
    alt: "Nodejs",
  },
  {
    name: "Reactjs",
    username: "@reactjs",
    body: "Builds fast and interactive user interfaces.",
    img: "/skills/React.png",
    alt: "Reactjs",
  },
  {
    name: "Figma",
    username: "@figma",
    body: "Allows designing modern and responsive UI/UX.",
    img: "/skills/figma.png",
    alt: "Figma",
  },
  {
    name: "Tailwindcss",
    username: "@tailwindcss",
    body: "Speeds up styling with utility-first classes.",
    img: "/skills/tailwind.png",
    alt: "Tailwindcss",
  },
  {
    name: "Typescript",
    username: "@typescript",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/skills/ts.png",
    alt: "Typescript",
  },
];
 
const firstRow = reviews.slice(0, reviews.length / 2);
 
const ReviewCard = ({
  img,
  name,
  username,
  body,
  alt
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  alt: string;
}) => {
  return (
    <Link href={"/skills"}><figure
      className={cn(
        "relative md:h-full md:w-64 h-[10vh] w-[20vh] cursor-pointer overflow-hidden rounded-xl border-2 border-gray-500 md:p-4 p-2 hover:border-blue-600 transition-all duration-300",
      )}
    >
      <div className="flex flex-row items-center gap-2 ">
        <Image className="rounded-full" width="32" height="32" alt={alt} src={img} loading='lazy'/>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 md:text-sm leading-none text-xs">{body}</blockquote>
    </figure></Link>
  );
};
 
export function MainMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
    </div>
  );
}
