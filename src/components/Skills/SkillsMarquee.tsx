/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

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
const secondRow = reviews.slice(reviews.length / 2);
const thirdRow = reviews.slice(0, reviews.length / 2);
const fourthRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-fit sm:w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

function Marquee3D() {
  return (
    <div className="relative flex h-[48rem] w-full flex-row items-center justify-center gap-16 overflow-hidden bg-[#0f0f0f] [perspective:1400px]">
      <div
        className="flex flex-row items-center gap-16"
        style={{
          transform:
            "translateX(-100px) translateY(0px) translateZ(-200px) rotateX(25deg) rotateY(-12deg) rotateZ(25deg)",
        }}
      >
        <Marquee pauseOnHover vertical className="[--duration:25s] text-white">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover vertical className="[--duration:25s] text-white">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover vertical className="[--duration:25s] text-white">
          {thirdRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover vertical className="[--duration:25s] text-white">
          {fourthRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover vertical className="[--duration:25s] text-white">
          {fourthRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover vertical className="[--duration:25s] text-white">
          {fourthRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
    </div>
  );
}

export default Marquee3D;
