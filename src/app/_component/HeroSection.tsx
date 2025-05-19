import { StarsBackground } from "@/app/_component/stars-background"
import Image from "next/image"
import Link from "next/link"
import BookACall from "./ScheduleButton"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[800.5px] xl:min-h-[1000.5px] flex items-center justify-center overflow-hidden"
    >
      <div className="container mx-auto 3xl:w-[1440px]">
        <div className="absolute top-0 left-0 w-full h-full xl:h-[601.36px] pointer-events-none z-10">
          <StarsBackground />
          <Image
            src="/stars.svg"
            alt="Stars image"
            width={1170}
            height={574}
            className="w-full h-[500px] xl:h-auto object-cover"
            priority
          />
        </div>
        <div className="absolute bottom-0 top-[106px] xl:top-[138px] 4xl:top-[140px] left-0 2xl:left-[60px] 3xl:left-[135px] 4xl:left-[340px] 5xl:left-[5%] right-0 5xl:right-[5%] w-full 2xl:w-[1170px] 5xl:w-[90%] 5xl:mx-auto h-[573.5px] z-1">
          <Image
            src="/ellipse.svg"
            alt="Ellipse background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container mx-auto px-4 absolute top-[171px] lg:top-[263px] z-10">
          <div className="w-full lg:w-[568px] min-h-[310px] flex flex-col gap-[45px] mx-auto">
            <div className="w-full flex flex-col gap-[18px]">
              <h1 className="font-manrope font-medium text-[32px] md:text-[48px] tracking-normal text-center">
                The Future of Education Is Here and It Feels Personal
              </h1>
              <p className="font-outfit text-[14px]/[145%] text-[#CAD5E2] lg:w-[492px] text-center">
                Univasity helps you design a learning experience that&apos;s
                flexible, deeply human, and built for how people actually learn
                today, wherever they are
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 justify-center">
              <BookACall buttonText=" Schedule a conversation" />
              <Link
                href="/"
                className="w-full lg:w-fit h-[42px] bg-transparent text-[#B2DBC5] rounded-[8px] py-5 px-4 border border-[#B2DBC5] hover:bg-transparent hover:text-[#B2DBC5]/80 text-sm/[125%] font-outfit font-normal tracking-normal flex justify-center items-center cursor-pointer"
              >
                Explore how it works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
