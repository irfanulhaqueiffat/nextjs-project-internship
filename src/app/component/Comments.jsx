import React from "react";
import img from "../../../public/image/project-details/Ellipse 2.png";
import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

const Comments = () => {
  return (
    <>
      <section id="OpurboEffat Comments section" className="w-full">
        <div className="container mx-auto bg-[rgba(46,125,50,0.2)] rounded-lg lg:my-20 my-10 px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 lg:py-14">
          <div className="content-part text-center flex flex-col items-center justify-center">
            {/* ---------- Quote & Text ---------- */}
            <div className="text-part mb-6 sm:mb-8 w-full">
              <div className="flex flex-col lg:flex-row justify-center items-center gap-3 sm:gap-4 lg:gap-6 text-center">
                {/* Left Icon - Hidden on mobile, visible on desktop */}
                <FaQuoteLeft className="text-3xl sm:text-4xl md:text-5xl text-[rgba(46,125,50,0.4)] rotate-180 hidden lg:block shrink-0" />

                {/* Text */}
                <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-mono text-primary max-w-2xl leading-relaxed px-2">
                  The team exceeded our expectations in every way. The attention
                  to sustainability and modern design has created a residential
                  complex that our clients absolutely love.
                </h2>

                {/* Right Icon - Hidden on mobile, visible on desktop */}
                <FaQuoteRight className="text-3xl sm:text-4xl md:text-5xl text-[rgba(46,125,50,0.4)] hidden lg:block shrink-0" />
              </div>
            </div>

            {/* ---------- Author Part ---------- */}
            <div className="image-part flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-4 sm:mt-6">
              <div className="img w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden shrink-0">
                <Image
                  src={img}
                  alt="img"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="content text-center sm:text-left">
                <h2 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold font-mono text-primary mb-1">
                  Ahmed Hassan
                </h2>
                <p className="text-xs sm:text-sm md:text-sm lg:text-base font-normal font-mono text-secondary">
                  CEO, Green Valley Development Ltd.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Comments;
