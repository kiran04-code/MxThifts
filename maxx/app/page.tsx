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
import Footer2 from "@/components/Footer2";
import Cloth from "@/components/bradingComponents/Cloth";
import MarQuee from "@/components/MarQuee";
import Sell from "@/components/sellSection/sell";
import { Toaster } from "react-hot-toast"
import GoogleAuth from "./login/components/GoogleAuth";
import Feed01 from "@/components/FeeDBackSection/feed01";
import DressStype from "@/components/sellSection/DressStype";
import Carts from "@/components/sellSection/Carts";
import SearchEngine from "@/components/SearchEngine";
import BetaBanner from "@/components/Banner";
export default function Home() {
  return (
    <div className="flex-col  ">
     <BetaBanner/>
      <div className="md:flex md:justify-between flex justify-between md:px-20 md:py-5 px-5 py-2 ">
        <div>
          <Nvbar2 />
        </div>
       
        <div className="md:flex hidden md:justify-center md:items-center gap-5">
          
          <NavigationMenuDemos/>
      </div>
        <div className="md:hidden flex p-1">
          <MobileNavbar />
        </div>
      </div>
      <div>
        <HeroSectionForVideo />
      </div>
      <div className="mt-20 md:flex md:justify-start md:px-20 px-2">
        <AnimationSider />
      </div>
      <Carts/>
      <div className="flex justify-center items-center"><Link href={"/allProduct"}> <button className='p-2 cursor-pointer bg-gradient-to-l from-black to-white  text-white '>Discover More </button></Link></div>
     <div className="mt-20">
       <Sell />
      <DressStype />
          <Feed01 />
     </div>
      <div className="md:flex mt-10 md:justify-start md:px-33 md:gap-8 ">

        <FaqSection />
        <Cloth />

      </div>
      <div className="py-20">
        <ImageSections />
      </div>
      <Footer2 />
      <Footer />

    </div>
  );
}
