"use client"

import { MenuIcon } from "@/svgs"
import { X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import BookACall from "../ScheduleButton"

const navItems = [
  { name: "Why Univasity", href: "#why-univasity" },
  { name: "Features", href: "#features" },
  { name: "Testimonials", href: "#testimonial" },
  { name: "Institutions", href: "#institutions" },
  { name: "Resources", href: "#resources" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      setScrolled(window.scrollY > 20)

      // Find the active section
      const sections = navItems.map((item) => item.href.substring(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-site-bg/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-center items-center h-[70px]">
        <div className="w-full xl:w-[910px] mx-auto rounded-[12px] py-[14px] pl-5 pr-[14px]">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center">
              <Link href="#home" className="text-white font-bold text-xl">
                <Image
                  src="/logo.svg"
                  alt="univerity app logo"
                  width={100}
                  height={22.91}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg-md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-outfit text-sm/[125%] tracking-normal transition-colors ${
                    activeSection === item.href.substring(1)
                      ? "text-emerald-400 font-medium"
                      : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() => setActiveSection(item.href.substring(1))}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg-md:block">
              <BookACall buttonText="Get Started" />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg-md:hidden text-gray-300 hover:text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div
        className={`lg-md:hidden fixed inset-0 bg-site-bg z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-end mb-8">
            <button
              className="focus:outline-none"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X className="text-white h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-xl transition-colors ${
                  activeSection === item.href.substring(1)
                    ? "text-emerald-400 font-medium"
                    : "text-gray-300 hover:text-white"
                }`}
                onClick={() => {
                  setActiveSection(item.href.substring(1))
                  closeMenu()
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="mt-auto">
            <Link
              href="/"
              className="w-full h-[42px] bg-[#6E9988] hover:bg-[#6E9988]/70 text-white rounded-[8px] py-5 px-4 border border-[#8CC8A8] text-sm/[125%] font-outfit font-normal tracking-normal flex justify-center items-center cursor-pointer shadow-[0px_1px_8px_0px_#FFFFFFA3_inset,0px_4px_17.1px_0px_#43B87A2B]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
