import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"
import { NavigationMenuDemos } from "@/components/Navbar";
import Nvbar2 from "@/components/Nvbar2";
import HeroSection from "@/components/HeroSection";
import AnimationSider from "@/components/AnimationSider";
import FaqSection from "@/components/FaqSection";
import MobileNavbar from "@/components/MobileNavbar";
import Footer from "@/components/Footer";
import HeroSectionForVideo from "@/components/heroSectionForVideo";
import ImageSections from "@/components/image";
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
        <div className="md:hidden flex p-1">
          <MobileNavbar />
        </div>
      </div>
      <div>
        <HeroSectionForVideo/>
      </div>
      <div className="mt-20 md:flex md:justify-start md:px-20 px-2">
        <AnimationSider/>
      </div>
 
      <div className="md:flex mt-10 md:justify-start md:px-20">
        <FaqSection/>
      </div>
       <div className="py-20">
    <ImageSections/>
  </div>
      <Footer/>
    </div>
  );
}
