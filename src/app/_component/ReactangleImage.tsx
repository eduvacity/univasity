"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function RectangleImage() {
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch by rendering after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="container mx-auto px-4 relative z-10 -mt-[160px] sm:-mt-[220px] md:-mt-[80px] lg:-mt-[180px] xl:-mt-[340px]">
      <div className="relative w-full max-w-[1200px] mx-auto aspect-[1200/854] ">
        {/* Background rectangles - using percentage-based positioning */}
        <div className="absolute w-[95%] h-[86%] left-[2%] top-0 rounded-[17px] bg-[#0F211A]" />
        <div className="absolute w-[97%] h-[92%] left-[1%] top-[2%] rounded-[19px] bg-[#1B332A]" />
        <div className="absolute w-[99%] h-[96%] left-[0.5%] top-[3.5%] rounded-[20px] bg-[#2F5043]" />

        {/* Hero image - stays on top of the stack */}
        <div className="absolute w-full h-full top-[5%] rounded-[20px] overflow-hidden ">
          <Image
            src="/images/hero-dasboard_img.webp"
            alt="Dashboard image"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            className="object-cover rounded-[20px]"
          />
        </div>
      </div>
    </div>
  )
}
