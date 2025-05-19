import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full pt-20 pb-10 relative">
      <div
        className="bg-no-repeat bg-cover absolute top-0 left-0 right-0 bottom-0 z-0"
        style={{ backgroundImage: `url('/footer-bg.svg')` }}
      >
        <div className="absolute inset-0 bg-[#040303]/30"></div>
      </div>

      <div className="relative z-10 w-full container mx-auto 2xl:w-[1221.5px] flex flex-col gap-[35px]">
        <div className="w-full px-4 flex flex-col lg:flex-row gap-[69px] justify-between">
          <div className="w-full lg:w-[450px] flex flex-col gap-6">
            <div className="w-full flex flex-col gap-[9px]">
              <h4 className="font-mada font-semibold text-[20px]/[125%] tracking-normal text-white">
                Become a Founding Partner
              </h4>
              <p className="w-full text-[#F1F5F9] text-[14px]/[145%] font-mada tracking-normal">
                As a Founding Partner, you won&apos;t just be using Univasity.
                You&apos;ll help shape it. We&apos;re inviting visionary
                institutions and forward-thinking educators to co-create a
                platform built around real needs, real insights, and real
                impact.
              </p>
            </div>
            <Link
              href="/"
              className="w-full lg:w-fit h-[42px] bg-[#6E9988] hover:bg-[#6E9988]/70 text-white rounded-[8px] py-5 px-4 border border-[#8CC8A8] text-sm/[125%] font-outfit font-normal tracking-normal flex justify-center items-center shadow-[0px_1px_8px_0px_#FFFFFFA3_inset,0px_4px_17.1px_0px_#43B87A2B] cursor-pointer"
            >
              Become a founding partner
            </Link>
          </div>

          <div className="w-[147px] flex flex-col gap-[2px]">
            <h3 className="py-[10px] px-[14px] font-outfit text-[14px]/[125%] text-white tracking-normal font-semibold">
              Legal
            </h3>
            <ul className="space-y- w-full">
              <li className="h-[38px] flex gap-[10px] py-[10px] px-[14px]">
                <Link
                  href="#"
                  className="w-fit font-outfit text-[14px]/[125%] text-white tracking-normal font-normal hover:text-white transition-colors hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="h-[38px] flex gap-[10px] py-[10px] px-[14px]">
                <Link
                  href="#"
                  className="font-outfit text-[14px]/[145%] text-[#E5E5E5] tracking-normal font-normal hover:text-white transition-colors hover:underline"
                >
                  Terms & Condition
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-px w-full border-[0.25px] border-[#19422C]"></div>
        <div className="w-full flex justify-center items-center">
          <p className="font-outfit font-normal text-[14px]/[125%] text-[#CAD5E2] tracking-normal">
            © {new Date().getFullYear()} Univasity. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
