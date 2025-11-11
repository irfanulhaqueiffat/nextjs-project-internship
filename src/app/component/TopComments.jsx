import React from 'react'
import Image from "next/image";
import comment from "../../images/comment.png";

const TopComments = () => {
  return (
    <div className="container mx-auto my-16 px-4">
      <div className="relative w-full h-40 sm:h-56 md:h-64 lg:h-72 rounded overflow-hidden">
        <Image src={comment} alt="Comment Image" fill className="object-cover object-center" />
      </div>
    </div>
  )
}

export default TopComments