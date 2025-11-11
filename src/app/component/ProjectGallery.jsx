import React from 'react'
import Image from "next/image";
import p1 from "../../images/1.png";
import p2 from "../../images/2.png";
import p3 from "../../images/3.png";
import p4 from "../../images/4.png";
import { LuArrowRight } from "react-icons/lu";

const ProjectGallery = () => {
  return (
    <div className="section">
      <div className="container mx-auto bg-[#F9FAFB] px-4 py-10">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center mb-3">Project Gallery</h1>
          <p className="text-sm sm:text-base text-[#4A5565] text-center mb-6">Explore the visual journey of this remarkable project</p>
        </div>

        {/* Responsive gallery: 1 column on mobile, 2 on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded overflow-hidden shadow-sm">
            <Image src={p1} alt="Project Image 1" fill className="object-cover object-center hover:scale-105 transition-transform duration-500" />
          </div>

          <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded overflow-hidden shadow-sm">
            <Image src={p2} alt="Project Image 2" fill className="object-cover object-center hover:scale-105 transition-transform duration-500" />
          </div>

          <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded overflow-hidden shadow-sm">
            <Image src={p3} alt="Project Image 3" fill className="object-cover object-center hover:scale-105 transition-transform duration-500" />
          </div>

          <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded overflow-hidden shadow-sm">
            <Image src={p4} alt="Project Image 4" fill className="object-cover object-center hover:scale-105 transition-transform duration-500" />
          </div>
        </div>

        <button className="flex justify-center items-center m-auto mb-16 border border-[#D1D5DC] rounded-full bg-[#dadde0] text-black px-4 py-2 text-sm">
          <a className="flex justify-between gap-2 items-center" href="#">Load More <LuArrowRight /></a>
        </button>
      </div>
    </div>
  )
}

export default ProjectGallery