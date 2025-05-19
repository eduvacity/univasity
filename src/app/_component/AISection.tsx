import Image from "next/image"
import { StarsBackground } from "./stars-background"

const benefits = [
  {
    icon: "/voice-circled.svg",
    description:
      "Talk to it in Hausa, Yoruba, Swahili, Igbo, Arabic — and it responds with clarity, care, and cultural relevance.",
    list: [],
  },
  {
    icon: "/teacher-at-the-board.svg",
    description: "Students get:",
    list: [
      "Personalized learning paths",
      "Answers explained in plain, local language",
      "Encouragement that feels close to home",
    ],
  },
  {
    icon: "/school-building.svg",
    description: "Educators get:",
    list: [
      "Smarter content tools",
      "Early support signals",
      "Feedback that speaks directly to each learner",
    ],
  },
]

export default function AISection() {
  return (
    <div
      id="resources"
      className="w-full container mx-auto flex flex-col gap-[60px]"
    >
      <div className="w-full flex justify-center items-center">
        <div className="w-full lg:w-[638px] flex flex-col gap-3">
          <h2 className="font-manrope font-semibold text-2xl xl:text-5xl leading-[130%] tracking-normal text-center text-[#E5E5E5]">
            AI that understands you; in your own language
          </h2>
          <p className="font-outfit font-normal text-sm xl:text-base leading-[125%] tracking-normal text-white text-center">
            Univasity&apos;s AI doesn&apos;t just assist; it listens, supports,
            and speaks your language.
          </p>
        </div>
      </div>
      <div className="container mx-auto 3xl:w-[1087px] relative">
        <StarsBackground />
        <div className="w-[250.70px] lg:w-[340px] h-[118.69px] xl:h-[303px] absolute top-0 sm:top-[13px] xl:top-20 left-[67px] xl:left-[223px] bg-[#6E9988] blur-[183.78px] xl:blur-[469.16px] z-1"></div>
        <div className="absolute -top-30 xl:-top-40 left-0 w-full h-full pointer-events-none z-1">
          <Image
            src="/stars.svg"
            alt="Stars image"
            width={1170}
            height={574}
            className="w-full h-[118.69px] xl:h-[400px] 2xl:w-[870px] object-cover xl:object-contain"
            priority
          />
        </div>
      </div>
      {/* Feature image */}
      <div className="w-full 2xl:w-[1097px] container mx-auto h-full xl:h-[784px] rounded-[22px] overflow-hidden z-10 -mt-20 xl:-mt-[160px] px-4 xl:px-0 ">
        <Image
          src="/images/ai.webp"
          alt="Feature image"
          width={1097}
          height={784}
          priority
          className="w-full h-full rounded-[22px]"
        />
      </div>
      <div className="w-full container mx-auto 2xl:w-[1108px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 py-12 px-4">
        {benefits?.map((benefit, index) => (
          <div
            key={index}
            className="w-full h-[336px] flex flex-col gap-8 bg-[#0A0A0A] rounded-[20px] border border-[#262626] py-[35px] px-[33px]"
          >
            <Image
              src={benefit.icon}
              alt="benefits why univasity"
              width={60}
              height={60}
              className="w-[60px] h-[60px] shrink-0"
            />
            {benefit?.list.length > 0 ? (
              <div className="flex flex-col gap-3">
                <p className="font-outfit font-medium text-[20px]/[150%] tracking-normal text-white">
                  {benefit.description}
                </p>
                <div className="flex flex-col gap-[6px]">
                  {benefit?.list?.map((item, index) => (
                    <p
                      key={index}
                      className="font-outfit font-normal text-[#E2E8F0] text-[16px]/[150%] tracking-normal"
                    >
                      <span>{index + 1}.</span> {item}
                    </p>
                  ))}
                </div>
              </div>
            ) : (
              <p className="font-outfit font-normal text-[16px]/[150%] tracking-normal text-[#CAD5E2]">
                {benefit.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
