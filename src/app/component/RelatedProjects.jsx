import React from 'react'
import Image from "next/image";
import last1 from '../../images/11.png';
import last2 from '../../images/22.png';
import last3 from '../../images/33.png';


const RelatedProjects = () => {
  return (
      <div className="container mx-auto bg-[#e7e8eb] p-10 mb-20">
        <div className=" mb-20">
        <h1 className="text-4xl font-bold text-bold  text-black text-center mb-3">Related Projects</h1>
        <p  className="text-sm text-[#4A5565]  text-center mb-8">Discover more projects in the residential category</p>
      </div>

          <div>
          <div className=' flex justify-center items-center gap-6 mb-12'>
            <Image src={last1} alt="Related Project 1"  className="rounded w-[424px] h-[380px]"/>
            <Image src={last2} alt="Related Project 2"  className="rounded w-[424px] h-[380px]"/>
            <Image src={last3} alt="Related Project 3" className="rounded w-[424px] h-[380px]" />

          </div>
          </div>



        </div>   
  )
}

export default RelatedProjects