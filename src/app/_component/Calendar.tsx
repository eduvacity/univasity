"use client"

import Image from "next/image"
import BookACall from "./ScheduleButton"

export default function CalendarSection() {
  return (
    <section
      id="institutions"
      className="w-full xl:w-[960px] 2xl:w-[1103px] min-h-[482.04px] container mx-auto py-24 overflow-hidden"
    >
      <div className="container 2xl:w-[1107px] mx-auto relative">
        <div className="w-full flex flex-col items-center justify-between gap-[40px] 2xl:gap-12">
          <div className="w-full sm:w-[353px] lg:w-full flex flex-col xl:flex-row justify-between items-start gap-[16px] px-4 xl:px-0">
            <h2 className="w-full xl:w-[540px] font-manrope font-semibold text-2xl 2xl:text-5xl leading-[130%] text-white tracking-normal">
              Your time is valuable! We help you make the most of it.
            </h2>
            <div className="w-full xl:w-[501px] space-y-[28px]">
              <p className="text-[#D1D5DC] font-normal font-outfit text-base leading-[125%] tracking-normal">
                Now, envision a system that supports both; with deep, authentic
                connections that elevate learning for everyone
              </p>
              <BookACall buttonText=" Get started" />
            </div>
          </div>

          <div className="w-full relative">
            {/* Glow effect - positioned in the center behind the image */}
            <div className="absolute w-[300px] md:w-[408.18px] h-[144.93px] left-1/2 top-20 -translate-x-1/2 -translate-y-1/2 bg-[#6E9988] blur-[300px] md:blur-[479.29px] z-0"></div>

            <div className="relative overflow-hidden z-10 px-2 xl:px-0">
              <Image
                src="/images/calendar-icon.webp"
                alt="Student calendar image"
                width={1107}
                height={384}
                className="w-full h-[384px] xl:h-auto rounded-[16px] object-cover z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
