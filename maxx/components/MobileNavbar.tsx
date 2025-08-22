"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import { CiShoppingCart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaBlogger } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import Link from "next/link";
import { useAuth } from "@/context/UserAuth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbrmobile from "./reUsed/Navbrmobile";

const sidebarVariants = {
  hidden: { x: "-100%" },
  visible: { x: 0 },
  exit: { x: "-100%" },
};

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const  {user,CartIteam,getCartCout} = useAuth()!
  const router = useRouter()
  return (
    <div className="md:hidden z-50  justify-center items-center  gap-2 flex bg-white shadow-lg px-2 rounded-2xl">
        <Navbrmobile/>
      <div
        onClick={() => setOpen(!open)}
        className=" p-3 rounded-xl flex justify-center items-center text-2xl cursor-pointer"
      >
        <FaBars />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="sidebar"
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "spring", stiffness: 600, damping: 50 }}
            className="fixed top-0 left-0 h-screen w-3/4 bg-white shadow-lg z-40 flex flex-col p-6"
          >
            {/* Close Icon */}
            <div className="flex justify-between">
            <div className="flex gap-2 justify-center items-center">
               <Image height={25}  width={25} src="/black_logo.png" alt="" className="w-8 h-8 "/>
               <p className="text-xl font-bold"> Maxx Thrift's</p>
            </div>
              <RxCross1
                onClick={() => setOpen(false)}
                className="text-2xl cursor-pointer"
              />
            </div>

            {/* Nav Links */}
            <nav className="mt-10 flex flex-col gap-6 text-lg font-medium">
              <Link href="/" onClick={() => setOpen(false)} className="flex gap-3 items-center" ><FaHome/>Home</Link>
             {
              user? null : <Link href="/login" onClick={() => setOpen(false)} className="flex gap-3 items-center"  ><IoMdLogIn/>Login</Link>
             }
              <Link href="/blog" onClick={() => setOpen(false)} className="flex gap-3 items-center" ><FaBlogger/>Blog</Link>
             {
              user ? <Link href="/CartPage" onClick={() => setOpen(false)} className="flex gap-3 items-center" ><CiShoppingCart/>Cart <p className="bg-black text-white rounded-full px-2">{Object.values(CartIteam)}</p></Link>:null
             }
             {
              user ? <Link href="/Profile" onClick={() => setOpen(false)} className="flex gap-3 items-center"><CgProfile/>Profile</Link>:null
             }
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavbar;
