import Link from "next/link"
import BookACall from "./ScheduleButton"

export default function GetStarted() {
  return (
    <div className="w-full container mx-auto sm:w-[270.08px] md:w-full lg:w-[560px] xl:w-[951px] flex flex-col gap-[60px] py-20 xl:py-28">
      <div className="w-full flex justify-center items-center">
        <div className="w-full lg:w-[588px] flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h2 className="font-manrope font-semibold text-2xl xl:text-5xl leading-[130%] tracking-normal text-center text-[#E5E5E5]">
              Let&apos;s talk about the future you want to build
            </h2>
            <p className="font-outfit font-normal text-sm xl:text-base leading-[125%] tracking-normal text-white text-center">
              No hard pitch. No pressure. Just a genuine conversation about what
              matters to your learners, and how we can help
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 justify-center">
            <BookACall buttonText="Book a call" />
            <Link
              href="/"
              className="w-full lg:w-fit h-[42px] bg-transparent text-[#B2DBC5] rounded-[8px] py-5 px-4 border border-[#B2DBC5] hover:bg-transparent hover:text-[#B2DBC5]/80 text-sm/[125%] font-outfit font-normal tracking-normal flex justify-center items-center cursor-pointer"
            >
              Download our guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
