"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

import logo from "../../images/Layer_1.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white/60 backdrop-blur sticky top-0 z-40">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="Logo" width={120} height={40} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 text-sm">
              <Link href="/" className="hover:text-black">Home</Link>
              <Link href="/About" className="hover:text-black">About</Link>
              <Link href="/Services" className="hover:text-black">Services</Link>
              <Link href="/Projects" className="hover:text-black">Projects</Link>
              <Link href="/Contact" className="hover:text-black">Contact</Link>
            </div>

            <Link href="#" className="rounded-full bg-green-900 text-white px-4 py-2 text-sm">Get a Quote</Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 bg-white/60 hover:bg-gray-100"
            >
              {open ? <HiOutlineX size={22} /> : <HiOutlineMenu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <div className={`${open ? "block" : "hidden"} md:hidden pb-6`}>
          <div className="flex flex-col gap-4 text-sm px-2">
            <Link href="/" className="block px-3 py-2 rounded hover:bg-gray-100">Home</Link>
            <Link href="/About" className="block px-3 py-2 rounded hover:bg-gray-100">About</Link>
            <Link href="/Services" className="block px-3 py-2 rounded hover:bg-gray-100">Services</Link>
            <Link href="/Projects" className="block px-3 py-2 rounded hover:bg-gray-100">Projects</Link>
            <Link href="/Contact" className="block px-3 py-2 rounded hover:bg-gray-100">Contact</Link>

            <div className="mt-2 px-2">
              <Link href="#" className="w-full inline-flex justify-center rounded-full bg-green-900 text-white px-4 py-2 text-sm">Get a Quote</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
