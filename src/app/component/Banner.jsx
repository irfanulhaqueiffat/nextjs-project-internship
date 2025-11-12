"use client";
import React from "react";
import Image from "next/image";
import banner from "../../../public/image/project-details/Banner.png";
import overlay from "../../../public/image/project-details/Overlay.png";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { FaRegCalendarMinus } from "react-icons/fa6";

const Banner = () => {
  return (
    <section id="Opurbo Products Details Banner">
      {/* Banner Wrapper */}
      <div className="w-full h-80 sm:h-[420px] md:h-[480px] lg:h-[581px] relative overflow-hidden">
        {/* Background Banner */}
        <Image
          src={banner}
          alt="Banner Background"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Overlay Image */}
        <Image
          src={overlay}
          alt="Banner Overlay"
          fill
          className="object-cover object-center opacity-70"
        />

        {/* Back button (top-left) */}
        <div className="absolute top-4 left-4 z-20">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-3 py-2 px-3 bg-gray-700/70 border border-gray-400 rounded-lg text-white font-inter text-sm font-medium hover:bg-gray-700 transition-all"
          >
            <FaArrowLeft />
            Back to Projects
          </Link>
        </div>

        {/* Content part (bottom-left, responsive) */}
        <div className="absolute inset-0 z-10">
          <div className="container mx-auto h-full flex flex-col justify-end px-4 py-6 sm:py-8 lg:py-12">
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-inter font-bold text-white mb-2">
              Green Valley Residences
            </h1>

            {/* Location & Year */}
            <div className="flex gap-4 flex-wrap text-[#FFFFFFE6] text-sm sm:text-base">
              <Link href="/" className="flex items-center gap-2 font-inter">
                <GrLocation />
                <span>Dhaka</span>
              </Link>
              <Link href="/" className="flex items-center gap-2 font-inter">
                <FaRegCalendarMinus />
                <span>2024</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
