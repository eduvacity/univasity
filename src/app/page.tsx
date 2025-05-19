import { Navigation } from "@/app/_component/navigation"
import HeroSection from "./_component/HeroSection"
import PartnersSection from "./_component/Partners"
import ReactangleImage from "./_component/ReactangleImage"
import WhyChange from "./_component/whyChange"
import UnivasityFeatures from "./_component/Features"
import MoreThanPlatformSection from "./_component/MoreThanPlatform"
import BuiltForFuture from "./_component/BuiltForFuture"
import RealLifeConversationSection from "./_component/RealConversation"
import TestimonialsSection from "./_component/Testimonials"
import CalendarSection from "./_component/Calendar"
import AISection from "./_component/AISection"
import GetStarted from "./_component/GetStarted"
import Footer from "./_component/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-site-bg text-white relative">
      <Navigation />
      {/* Hero Section */}
      <HeroSection />
      <ReactangleImage />
      {/* Partner Section */}
      <PartnersSection />
      {/* WHy change Section */}
      <WhyChange />
      {/* Features */}
      <UnivasityFeatures />
      <MoreThanPlatformSection />
      <BuiltForFuture />
      <RealLifeConversationSection />
      {/* Testimonials */}
      <TestimonialsSection />
      <CalendarSection />
      <AISection />
      <GetStarted />
      {/* footer */}
      <Footer />
    </div>
  )
}
