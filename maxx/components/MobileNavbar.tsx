"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const sidebarVariants = {
  hidden: { x: "-100%" },
  visible: { x: 0 },
  exit: { x: "-100%" },
};

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden z-50">
      <div
        onClick={() => setOpen(!open)}
        className="bg-white p-3 rounded-xl shadow-lg flex justify-center items-center text-2xl cursor-pointer"
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
               <img src={"/black_logo.png"} className="w-8 h-8 "/>
               <p className="text-xl font-bold"> Maxx Thrift's</p>
            </div>
              <RxCross1
                onClick={() => setOpen(false)}
                className="text-2xl cursor-pointer"
              />
            </div>

            {/* Nav Links */}
            <nav className="mt-10 flex flex-col gap-6 text-lg font-medium">
              <Link href="/" onClick={() => setOpen(false)}>Home</Link>
              <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
              <Link href="/cart" onClick={() => setOpen(false)}>Cart</Link>
              <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavbar;
