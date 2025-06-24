import { Globe } from "@/components/magicui/globe";

function PixbexGlobe() {
  return (
    <div className="relative w-full px-[1vh] md:px-[calc(100%-84vw)] flex flex-col md:pt-[8vw] pt-[6vh] items-center justify-center">
    <div className="w-full md:h-[30vw] relative flex size-full items-center justify-center overflow-hidden rounded-lg  px-40 pb-40 pt-8 md:pb-60">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-zinc-200 to-zinc-900 bg-clip-text text-center md:text-[6vw] text-[5vh] font-semibold leading-none text-transparent md:pb-[12vw]">
        Pixbex
      </span>
      <Globe className="md:top-10 top-14 w-full" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
    </div>
  );
}

export default PixbexGlobe
