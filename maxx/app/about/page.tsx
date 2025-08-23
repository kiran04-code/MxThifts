"use client";
import { MapPin, Truck, Shirt, Instagram } from "lucide-react";
import Footer from "@/components/Footer";
import MobileNavbar from "@/components/MobileNavbar";
import Nvbar2 from "@/components/Nvbar2";
import ReusedCompoennts from "@/components/Navbars/ReusedCompoennts";
import { NavigationMenuDemos } from "@/components/Navbar";
import { FaInstagram } from "react-icons/fa";

export default function AboutPage() {
  return (
    <>
  <div className="md:hidden flex justify-between p-3 items-center gap-3 "> <Nvbar2/>  <MobileNavbar/></div>
    <div className="md:flex hidden md:justify-between   justify-center md:px-20 md:py-5 px-5 py-2" >
        <div><Nvbar2/></div>
      <div>  <NavigationMenuDemos/></div>
        </div>
      <div className="min-h-screen bg-gradient-to-b  flex flex-col items-center py-16 px-6">
        {/* Header */}
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 tracking-tight drop-shadow-sm">
          Maxx Thrift
        </h1>
        <p className="mt-3 text-lg sm:text-xl text-gray-600 font-light">
          Apparel & Clothing • Navi Mumbai 📍
        </p>

        {/* Intro / Brand Story */}
        <div className="mt-12 max-w-3xl text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">What is Thrifting?</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Thrifting is about giving pre-loved clothing a{" "}
            <span className="font-semibold">second chance</span>.  
            At <span className="font-semibold">Maxx Thrift</span>, each piece is{" "}
            <span className="italic">handpicked for quality, style, and sustainability</span>.  
            The result:{" "}
            <span className="font-bold">unique, affordable, and timeless fashion</span> 
            that helps protect the planet .
          </p>
        </div>

        {/* About Brand */}
        <div className="mt-16 max-w-3xl bg-white shadow-lg rounded-3xl p-10 text-center border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900">About the Brand</h3>
          <p className="mt-4 text-gray-600 leading-relaxed text-lg">
            <span className="font-semibold">Maxx Thrift</span> was founded by{" "}
            <span className="font-semibold">Mukesh Rathod</span> with the vision of making{" "}
            <span className="italic">affordable fashion</span> accessible to all.  
            The collection features{" "}
            <span className="font-semibold">new, thrifted, and handpicked apparel</span> 
            carefully curated to stand out in every wardrobe.
          </p>
        </div>

        {/* Key Info / Features */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-5xl">
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all text-center">
            <Shirt className="w-12 h-12 text-gray-800 mx-auto mb-4" />
            <h4 className="font-semibold text-lg text-gray-900">Clothing Style</h4>
            <p className="text-gray-600 text-sm mt-2">New | Thrift | Handpicked</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all text-center">
            <Truck className="w-12 h-12 text-gray-800 mx-auto mb-4" />
            <h4 className="font-semibold text-lg text-gray-900">Shipping</h4>
            <p className="text-gray-600 text-sm mt-2">📦 All over India</p>
            <p className="text-xs text-gray-500 mt-1">
              No COD •  Return •  Exchange •  Cancellation
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all text-center">
            <MapPin className="w-12 h-12 text-gray-800 mx-auto mb-4" />
            <h4 className="font-semibold text-lg text-gray-900">Location</h4>
            <p className="text-gray-600 text-sm mt-2">Navi Mumbai 📍</p>
            <p className="text-xs text-gray-500">Discover handpicked fashion online</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-gray-900">Join the Thrift Movement 🚀</h3>
          <p className="text-gray-600 mt-3 text-lg">
            Be part of the{" "}
            <span className="font-semibold">sustainable fashion revolution</span>.  
            Explore curated thrifted clothing with{" "}
            <span className="font-bold">Maxx Thrift</span>.
          </p>
        </div>

        {/* Instagram Handle */}
        <div className="mt-20 flex flex-col items-center">
          <a
            href="https://www.instagram.com/maxx.thrifts_/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-black  to-white text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition transform"
          >
            <FaInstagram className="w-6 h-6" />
            <span className="font-medium text-lg">@maxx.thrifts_</span>
          </a>
          <p className="text-gray-500 text-sm mt-3">
            Follow on Instagram for exclusive drops & latest updates ✨
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
