import Image from "next/image"
import React from "react"

export default function PartnersSection() {
  return (
    <div className="w-full container mx-auto sm:w-[270.08px] xl:w-[968.72px] flex flex-col gap-[35px] h-[270.08px] xl:h-[100px] py-20 xl:pb-32 xl:pt-45">
      <h2 className="font-manrope font-semibold text-[14px]/[150%] tracking-normal text-center text-[#E5E5E5] uppercase">
        Partnered with
      </h2>
      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-[65px]">
        <Image
          src="/images/partners/abuz.svg"
          alt=""
          width={159.8}
          height={44}
        />
        <Image
          src="/images/partners/bayero.svg"
          alt=""
          width={221.2}
          height={42}
        />
        <Image
          src="/images/partners/assertium.svg"
          alt=""
          width={236.71}
          height={42}
        />
        <Image
          src="/images/partners/eduvacity.svg"
          alt=""
          width={156}
          height={42}
        />
      </div>
    </div>
  )
}
