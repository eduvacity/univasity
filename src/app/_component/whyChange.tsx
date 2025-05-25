import Image from "next/image"
import Link from "next/link"
import React from "react"

const reasons = [
  {
    title: "For Learners",
    description: "Learning is more than content, it's about connection",
    icon: "/images/whyChange/glowing-book.svg",
  },
  {
    title: "For Teachers",
    description: "Teachers want more than tools. They want impact.",
    icon: "/images/whyChange/teachere-at-board.svg",
  },
  {
    title: "For Institution",
    description:
      "Education is more than infrastructure, it's about transformation",
    icon: "/images/whyChange/school-building.svg",
  },
]
export default function WhyChange() {
  return (
    <div
      id="why-univasity"
      className="w-full container mx-auto slg:w-full xl:w-[951px] flex flex-col gap-[60px] py-20 xl:py-28"
    >
      <div className="flex flex-col gap-3">
        <h2 className="font-manrope font-semibold text-2xl xl:text-5xl leading-[130%] tracking-normal text-center text-[#E5E5E5]">
          Why change? Why now?
        </h2>
        <p className="font-outfit font-normal text-sm xl:text-base leading-[125%] tracking-normal text-white text-center">
          Your students have changed, your learning experience should too.
        </p>
      </div>
      <div className="w-full xl:w-[951px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[60px]">
        {reasons?.map((reason, index) => (
          <div
            key={index}
            className="w-full h-[150px] flex flex-col justify-center items-center"
          >
            <Image
              src={reason.icon}
              alt="reasons why univasity"
              width={159.8}
              height={44}
              className="w-auto h-auto"
            />
            <div className="flex flex-col gap-[10px]">
              <h4 className="font-manrope font-bold text-[16px]/[100%] tracking-normal text-center text-white">
                {reason.title}
              </h4>
              <p className="font-manrope font-normal text-[14px]/[100%] tracking-normal text-[#CAD5E2] text-center">
                {reason.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center mt-6">
        <Link
          href="/"
          className="w-full lg:w-fit h-[42px] bg-transparent text-[#B2DBC5] rounded-[8px] py-3 px-4 border-[0.5px] border-[#B2DBC5] hover:bg-transparent hover:text-[#B2DBC5]/80 text-sm/[125%] font-outfit font-normal tracking-normal flex justify-center items-center cursor-pointer"
        >
          Discover the new way to engage
        </Link>
      </div>
    </div>
  )
}
