import FastCard from "../Layouts/FastCard"

const FastBuild = () => {
  return (
    <div className='w-full md:mt-[6vw] md:py-[7vw] py-[7vh]'>
      <div className='w-full flex justify-center'>
        <button className="md:text-[2vw] text-[1.7vh] font-[700] tracking-tighter md:px-3 md:py-1 px-2 py- bg-zinc-900 rounded-md ">
          <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-[#b9c4c8] to-[#202630]'>Fast Build</h2>
        </button>
      </div>

      <div className="w-full flex md:gap-3 gap-2 md:mt-[10vw] mt-[5vh]">
        <FastCard
          co1="#000000"
          co2="#4b5563"
          co3="#000000"
          text="Next.js"
          href="/next.js.svg"
          desc="The React framework for production"
        />

        <FastCard
          co1="#000000"
          co2="#2C6B2D"
          co3="#000000"
          text="Node.js"
          href="/nodejs.svg"
          desc="Event-driven, non-blocking I/O runtime"
        />

        <FastCard
          co1="#000000"
          co2="#11A150"
          co3="#000000"
          text="MongoDB"
          href="/mongodb.svg"
          desc="Flexible NoSQL document database"
        />
      </div>
    </div>
  )
}

export default FastBuild
