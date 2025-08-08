import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"
import { NavigationMenuDemos } from "@/components/Navbar";
import Nvbar2 from "@/components/Nvbar2";
import HeroSection from "@/components/HeroSection";
import AnimationSider from "@/components/AnimationSider";
import FaqSection from "@/components/FaqSection";
import MobileNavbar from "@/components/MobileNavbar";
export default function Home() {

  return (
    <div className="flex-col  ">
      <div className="flex md:ap-5 p-2 justify-between md:px-50 md:py-8 ">
        <div>
          <Nvbar2 />
        </div>
        <div className="md:flex hidden">
          <NavigationMenuDemos />
        </div>
        <div className="md:hidden flex">
          <MobileNavbar />
        </div>
      </div>
      <div>
        <HeroSection />
      </div>
      <div className="mt-20">
        <AnimationSider/>
      </div>
      <FaqSection/>
    </div>
  );
}
