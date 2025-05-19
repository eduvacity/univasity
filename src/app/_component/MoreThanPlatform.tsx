"use client"

import { SmallWiggleArrowUp, WiggleArrowUp } from "@/svgs"
import Image from "next/image"
import Link from "next/link"

export default function MoreThanPlatformSection() {
  return (
    <section className="w-full xl:w-[960px] 2xl:w-[1103px] min-h-[482.04px] container mx-auto py-24 overflow-hidden ">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-[40px] 2xl:gap-12 2xl:relative">
          <div className="w-full xl:w-[564px] space-y-8 relative px-4 lg:px-6">
            <div className="flex flex-col gap-[17px]">
              <h2 className="w-[564px] font-manrope font-semibold text-2xl 2xl:text-5xl leading-[130%] text-white tracking-normal">
                More than a platform; a <br /> true partner in growth.
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-[6px]">
                  <div className="w-[14px] h-[14px] rounded-full bg-[#6E9988] mt-1 flex-shrink-0"></div>
                  <p className="text-[#D1D5DC] font-normal font-outfit text-base leading-[125%] tracking-normal">
                    Imagine a world where students wake up excited to learn
                  </p>
                </div>

                <div className="flex items-start gap-[6px]">
                  <div className="w-[14px] h-[14px] rounded-full bg-[#6E9988] mt-1 flex-shrink-0"></div>
                  <p className="text-[#D1D5DC] font-normal font-outfit text-base leading-[125%] tracking-normal">
                    Picture instructors rediscovering their passion for teaching
                  </p>
                </div>

                <p className="text-[#D1D5DC] font-normal font-outfit text-base leading-[125%] tracking-normal">
                  Now, envision a system that supports both; with deep,
                  authentic connections that elevate learning for everyone
                </p>
              </div>
            </div>
            <Link
              href="/"
              className="w-fit h-[42px] bg-[#6E9988] hover:bg-[#6E9988]/70 text-white rounded-[8px] py-5 px-4 border border-[#8CC8A8] text-sm/[125%] font-outfit font-normal tracking-normal flex justify-center items-center shadow-[0px_1px_8px_0px_#FFFFFFA3_inset,0px_4px_17.1px_0px_#43B87A2B] cursor-pointer"
            >
              Book a consultation
            </Link>
            <div className="block xl:hidden w-[269px] h-[145px] xl:h-[303px] absolute xl:top-20 bg-[#62FFABA8] blur-[469.2px] z-1"></div>
            {/* Canvas for curved dotted line */}

            <div className="block 2xl:hidden absolute bottom-2 left-45 pointer-events-none">
              <SmallWiggleArrowUp />
            </div>
          </div>

          <div className="w-full xl:w-1/2 lg:px-4 2xl:px-0 relative">
            <div className="hidden xl:block w-[269px] h-[160px] absolute -bottom-10 bg-[#62FFAB]/66 blur-[469.16px] z-1"></div>
            <div className="overflow-hidden z-10 px-2 xl:px-0">
              <Image
                src="/images/waving-man.webp"
                alt="Student learning online"
                width={500}
                height={350}
                className="w-full h-[384px] xl:h-auto rounded-[16px] object-cover"
              />
            </div>
          </div>
          <div className="hidden 2xl:block absolute -bottom-22 left-60 pointer-events-none">
            <WiggleArrowUp />
          </div>
        </div>
      </div>
    </section>
  )
}
