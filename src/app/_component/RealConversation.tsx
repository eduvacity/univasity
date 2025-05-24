"use client"

import Image from "next/image"
import BookACall from "./ScheduleButton"

export default function RealLifeConversationSection() {
  return (
    <section className="w-full xl:w-[960px] 2xl:w-[1103px] min-h-[482.04px] container mx-auto py-24 overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-[40px] 2xl:gap-12 2xl:relative">
          <div className="w-full xl:w-1/2 lg:px-4 2xl:px-0 relative">
            <div className="rounded-[16px] overflow-hidden">
              <Image
                src="/videos/realtime-convo.gif"
                alt="Student learning online"
                width={700}
                height={500}
                className="w-full h-[384px] xl:h-[450px] object-cover"
              />
            </div>
          </div>
          <div className="w-full xl:w-[564px] space-y-8 relative  lg:pt-20 xl:pt-0 px-4 lg:px-6">
            <div className="w-full md:w-[455px] flex flex-col gap-[17px]">
              <Image
                src="/stacked-avatar.svg"
                alt="Stacked avatars"
                width={135}
                height={52.94}
                className="w-[135px] h-[52.94px]"
              />
              <h2 className="w-[564px] font-manrope font-semibold text-2xl lg:text-5xl leading-[130%] text-white tracking-normal">
                Real conversations <br /> Real connection
              </h2>
              <p className="text-[#D1D5DC] font-normal font-outfit text-base leading-[125%] tracking-normal">
                Chat with fellow students in real time, build study circles, and
                never feel like you&apos;re learning alone.
              </p>
            </div>
            <BookACall buttonText="Get Started" />
          </div>
        </div>
      </div>
    </section>
  )
}
