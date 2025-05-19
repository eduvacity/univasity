"use client"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import { useEffect } from "react"

const testimonials = [
  {
    name: "Amina T., PhD Candidate, Sociology",
    text: `"For the first time, I actually feel part of a learning community. It's not just about grades anymore — it's about growing together."`,
    img: "/images/testimonials/01.webp",
  },
  {
    name: "Dr. Helen M., Lecturer, Digital Pedagogy",
    text: `"Univasity brought joy back into teaching. I can focus on helping students instead of fighting with tools that don't talk to each other."`,
    img: "/images/testimonials/02.webp",
  },
  {
    name: "Education Strategy Lead, InnovateU",
    text: `"This isn't just edtech. It's a vision for the future of our institution — and our students."`,
    img: "/images/testimonials/03.webp",
  },
]
export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  )

  useEffect(() => {
    return () => {
      if (emblaApi) {
        emblaApi.off("select", () => {})
      }
    }
  }, [emblaApi])

  return (
    <div
      id="why-univasity"
      className="w-full container mx-auto flex flex-col gap-[60px]  px-4 xl:pl-[166px] pb-20 xl:pb-28"
    >
      <div className="flex flex-col gap-3">
        <h2 className="font-manrope font-semibold text-2xl xl:text-5xl leading-[130%] tracking-normal text-left text-[#E5E5E5]">
          Voices that matter
        </h2>
        <p className="font-outfit font-normal text-sm xl:text-base leading-[125%] tracking-normal text-white">
          What educators and students are saying
        </p>
      </div>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimony, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_85%] lg:flex-[0_0_45%] xl:flex-[0_0_30%] lg:pl-2 xl:pl-4 first:pl-0"
              >
                <div className="h-full flex flex-col gap-6 rounded-[24px] border-[0.5px] border-[#262626] bg-[#0A0A0A] p-6 md:p-8">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex justify-center items-center">
                    <Image
                      src={
                        testimony.img || "/placeholder.svg?height=80&width=80"
                      }
                      alt={`${testimony.name} testimonial`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover object-top rounded-full"
                    />
                  </div>
                  <p className="font-manrope font-normal text-[16px]/[150%] tracking-normal text-[#E5E5E5] flex-grow">
                    {testimony.text}
                  </p>
                  <h4 className="font-manrope font-bold text-[14px] md:text-[16px]/[130%] tracking-normal text-[#A0C2B5]">
                    — {testimony.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center py-14">
        <p className="w-full lg:w-[600px] xl:w-[914px] h-[150px] xl:h-[240px] font-manrope font-semibold text-[24px] xl:text-[48px] leading-[125%] tracking-normal text-center text-white pt-20">
          Univasity <span className="text-[#6E9988]">is not just about</span>{" "}
          content; <span className="text-[#6E9988]">it&apos;s about</span>{" "}
          creating a lasting impact <span className="text-[#6E9988]">and</span>{" "}
          building confidence for a better future, one learner at a time.
        </p>
      </div>
    </div>
  )
}
