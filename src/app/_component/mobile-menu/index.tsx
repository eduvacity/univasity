"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MenuIcon } from "@/svgs"
import Link from "next/link"
import { useState } from "react"
import BookACall from "../ScheduleButton"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-gray-300">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] bg-zinc-900 border-zinc-800"
      >
        <nav className="flex flex-col gap-6 mt-10">
          <Link
            href="#"
            className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
            onClick={() => setOpen(false)}
          >
            Why Univasity
          </Link>
          <Link
            href="#"
            className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
            onClick={() => setOpen(false)}
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
            onClick={() => setOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            href="#"
            className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
            onClick={() => setOpen(false)}
          >
            Solutions
          </Link>
          <Link
            href="#"
            className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
            onClick={() => setOpen(false)}
          >
            Resources
          </Link>
          <BookACall buttonText="Get Started" />
        </nav>
      </SheetContent>
    </Sheet>
  )
}
