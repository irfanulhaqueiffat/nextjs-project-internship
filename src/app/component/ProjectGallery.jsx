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
        <div className="container mx-auto bg-[#F9FAFB] p-10 ">
            <div className=" mb-10">
            <h1 className="text-4xl font-bold text-bold  text-black text-center mb-3">Project Gallery</h1>
            <p  className="text-sm text-[#4A5565]  text-center mb-8">Explore the visual journey of this remarkable project</p>
          </div>
          <div className="images flex flex-col gap-8 items-center mb-10 p-12 ">
          <div className=' flex justify-between gap-6'>
            <Image src={p1} alt="Project Image 1"  className="rounded w-[548px] h-[310px]"/>
            <Image src={p2} alt="Project Image 1"  className="rounded w-[548px] h-[310px]"/>
            
    
          </div>
          <div className='flex justify-between gap-6'>
            <Image src={p3} alt="Project Image 1"  className="rounded w-[548px] h-[310px]" />
            <Image src={p4} alt="Project Image 1" className="rounded w-[548px] h-[310px]" />
            
    
          </div>
          </div>
          <button className='flex justify-center items-center m-auto mb-[62px] border-[#D1D5DC] rounded-full bg-[#dadde0] text-black px-4 py-2 text-sm'>
            <a className='flex justify-between gap-2 items-center' href="#">Load More <LuArrowRight /></a>
          </button>
          
              </div> 
   
    </div>
  )
}

export default ProjectGallery