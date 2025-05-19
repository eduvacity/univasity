import Image from "next/image"
import React from "react"

export default function BuiltForFuture() {
  return (
    <div
      id="why-univasity"
      className="w-full container mx-auto sm:w-[270.08px] md:w-full lg:w-[650px] xl:w-[951px] flex flex-col gap-[60px]"
    >
      <div className="flex flex-col gap-3">
        <p className="font-outfit font-normal text-sm xl:text-base leading-[125%] tracking-normal text-white text-center pt-28">
          Built for Those Who Believe Education Can Be Better
        </p>
        <h2 className="font-manrope font-semibold text-2xl xl:text-5xl leading-[130%] tracking-normal text-center text-[#E5E5E5]">
          We know change is hard. But falling behind is harder.We built
          Univasity for those who are ready to lead — not follow.Whether
          you&apos;re training 100 or 10,000, we&apos;ll walk with you every
          step of the way.
        </h2>
      </div>
      <div className="hidden w-full xl:block">
        <Image
          src="/features.svg"
          alt="Features svgs"
          width={919.48}
          height={406.1}
          className="w-full h-full"
        />
      </div>
      <div className="block w-full xl:hidden">
        <Image
          src="/small-features.svg"
          alt="Features svgs"
          width={363.89}
          height={261.94}
          className="w-full h-full"
        />
      </div>
    </div>
  )
}
