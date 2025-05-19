"use client"
import { Button } from "@/components/ui/button"
import { DialogClose, DialogTitle } from "@/components/ui/dialog"
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import React from "react"

interface ButtonProps {
  className?: string
  buttonText?: string | React.ReactNode
}

const BookACall: React.FC<ButtonProps> = ({
  className = "",
  buttonText = "Book a call",
}) => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [open, setOpen] = React.useState(false)

  const calLink = "https://calendly.com/univasity-ai/30min"

  const fullUrl = calLink.startsWith("http")
    ? calLink
    : `https://cal.com/${calLink}`

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="default"
          className={cn(
            "w-full lg:w-fit h-[42px] bg-[#6E9988] hover:bg-[#6E9988]/70 text-white rounded-[8px] py-5 px-4 border border-[#8CC8A8] text-sm/[125%] font-outfit font-normal tracking-normal flex justify-center items-center shadow-[0px_1px_8px_0px_#FFFFFFA3_inset,0px_4px_17.1px_0px_#43B87A2B] cursor-pointer",
            className
          )}
        >
          {buttonText}
        </Button>
      </DrawerTrigger>
      <DrawerOverlay />
      <DrawerContent className="max-w-screen h-screen min-h-screen shadow-none rounded-none bg-transparent border-0">
        <DialogTitle className="sr-only"> Book a call</DialogTitle>

        <DialogClose className="absolute right-2 top-2 sm:right-4 sm:top-4 z-50 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-all">
          <X className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
          <span className="sr-only">Close</span>
        </DialogClose>

        <div className="w-full min-h-[100vh] relative">
          <div className="w-full overflow-hidden rounded-none">
            <div className="w-full flex justify-center items-center">
              <div className="w-full flex flex-col gap-4 flex-1">
                <div className="w-full flex flex-col">
                  <div className="relative flex-1 h-[100vh]">
                    {isLoading && (
                      <div className="absolute inset-0 flex items-center justify-center rounded bg-[#0A0A0A]">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                      </div>
                    )}
                    <iframe
                      src={fullUrl}
                      className="w-full h-[100vh] border-none bg-[#0A0A0A]"
                      onLoad={() => setIsLoading(false)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default BookACall
