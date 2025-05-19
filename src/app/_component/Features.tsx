import Image from "next/image"
import { StarsBackground } from "./stars-background"

const benefits = [
  {
    id: "01",
    title: "Modern Management Portal",
    description: `We help universities and other institutions build a customized, modern management portal tailored to their administrative and academic needs.`,
  },
  {
    id: "02",
    title: "Access to Our Learning Management System (LMS)",
    description: `Institutions get full access to our LMS, allowing students to learn anytime, anywhere, at their own pace.`,
  },
  {
    id: "03",
    title: "Instructor Management System",
    description: `Our platform includes a powerful instructor management system that enables lecturers to efficiently manage students, track progress, and streamline class activities`,
  },
  {
    id: "04",
    title: "AI-Assisted Teaching",
    description: `Lecturers can assign an AI to attend or assist with their classes, helping them handle academic workloads more effectively.`,
  },
  {
    id: "05",
    title: "24/7 AI Support for Students",
    description: `Students will have access to a 24/7 AI assistant that can help them with learning, assignments, and navigating the platform.`,
  },
  {
    id: "06",
    title: "Access to Our CBT Platform",
    description: `Institutions are provided access to our secure Computer-Based Testing (CBT) platform, making it easy to conduct and manage student examinations online`,
  },
  {
    id: "07",
    title: "Support in Content Development",
    description: `We collaborate with institutions to build and organize high-quality study content that enhances the learning experience.`,
  },
]

export default function UnivasityFeatures() {
  return (
    <div
      id="features"
      className="w-full container mx-auto xl:w-[951px] flex flex-col gap-[60px]"
    >
      <div className="w-full flex justify-center items-center">
        <div className="w-full lg:w-[560px] flex flex-col gap-3">
          <h2 className="font-manrope font-semibold text-2xl xl:text-5xl leading-[130%] tracking-normal text-center text-[#E5E5E5]">
            Empower every learner,
            <br />
            every step of the way
          </h2>
          <p className="font-outfit font-normal text-sm xl:text-base leading-[125%] tracking-normal text-white text-center">
            Break into emotional benefit-focused categories
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
      <div className="w-full 2xl:w-[1087px] h-full xl:h-[772.98px] rounded-[22px] overflow-hidden z-10 -mt-20 xl:-mt-[60px] px-4 xl:px-0 ">
        <Image
          src="/images/feature-image.webp"
          alt="Feature image"
          width={1087}
          height={772.98}
          priority
          className="w-full h-full rounded-[22px]"
        />
      </div>
      {/* Features */}
      <div className="container mx-auto xl:w-[991px] relative flex flex-col gap-[32px]">
        <div className="absolute top-40 left-0 w-full h-full pointer-events-none z-1">
          <StarsBackground />
          <Image
            src="/stars.svg"
            alt="Stars image"
            width={1087}
            height={574}
            className="w-auto h-auto"
            priority
          />
        </div>
        <h2 className="font-bradley font-bold text-white text-[16px]/[100%] tracking-normal text-center pt-16">
          Benefit of our solutions
        </h2>
        <div className="w-full xl:w-[951px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[20px] xl:gap-[50px] z-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`w-full h-[294px] rounded-[12px] flex flex-col justify-center items-center gap-[10px] border py-6 px-5 ${
                index === benefits.length - 1
                  ? "xl:col-span-3 xl:max-w-[320px] xl:mx-auto"
                  : ""
              }`}
              style={{
                background: `linear-gradient(180deg, #010E07 0%, #000000 27.88%)`,
                borderImageSource: `linear-gradient(116.44deg, rgba(110, 153, 136, 0.32) 1.96%, rgba(110, 153, 136, 0) 11.77%, rgba(110, 153, 136, 0) 45.16%)`,
              }}
            >
              <div className="font-manrope font-semibold text-[64px] leading-[100%] tracking-normal text-center bg-gradient-to-b from-[#6E9988] to-[#010E07] bg-clip-text text-transparent">
                {benefit.id}
              </div>
              <div className="flex flex-col gap-[10px] justify-center items-center">
                <h4 className="w-[257px] font-manrope font-bold text-[16px]/[100%] tracking-normal text-center text-white">
                  {benefit.title}
                </h4>
                <p className="font-manrope font-normal text-[14px]/[150%] tracking-normal text-[#CAD5E2] text-center">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
