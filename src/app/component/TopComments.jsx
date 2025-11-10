import React from 'react'
import Image from "next/image";
import comment from "../../images/comment.png";

const TopComments = () => {
  return (
    <div className="container mx-auto mt-40 mb-40 ">
            <div className="comment-image">
              <Image src={comment} alt="Comment Image" className="m-auto w-[1319px] h-[309px] "/>

            </div>

            </div> 
  )
}

export default TopComments