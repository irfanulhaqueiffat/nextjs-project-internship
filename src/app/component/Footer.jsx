import Image from "next/image";
import logo from "../../images/Layer_1.png";
import Link from "next/link";

import { LuFacebook } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="container mx-auto">
      <footer className="w-full border-t bg-[#09231E] py-4 mt-10">
        <div className=" flex justify-between mx-auto max-w-5xl px-6 text-center text-sm text-[#979797]">
          <div className="flex justify-between gap-[90px] ">
            <div className="flex flex-col gap-2">
              <div>
                <Image src={logo} alt="Logo" width={117} height={39} />
              </div>
              <div>
                {" "}
                <p className=" mt-4 text-[#979797] text-sm text-left">
                  Building with precision and sustainability for over 15 years.
                </p>
              </div>

              <div className="mt-8">
                {" "}
                <ul className="flex  gap-4">
                  <li>
                    <Link href={""}>
                      <LuFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link href={""}>
                      <LuLinkedin />
                    </Link>
                  </li>
                  <li>
                    <Link href={""}>
                      <FaInstagram />
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="text-left mt-4">
                <p>Concern of Creative Business Group</p>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-white ">Quick Links</h3>

                <Link href={""}>About Us</Link>
                <Link href={""}>Services</Link>
                <Link href={""}>Projects</Link>
                <Link href={""}>Contact</Link>
              </div>
            </div>

            <div>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-white">Services</h3>
                <ul>
                  <li>Residential Construction</li>
                  <li>Commercial Projects</li>
                  <li>Industrial Development</li>
                  <li>Renovation & Remodeling</li>
                  <li>Design & Build</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-white">Contact Info</h3>

                <ul>
                  <li className="flex items-center gap-3px flex-wrap">
                    {" "}
                    <SiGooglemaps />
                    123 Construction Ave, Dhaka, Bangladesh
                  </li>
                  <li className="flex items-center  gap-3px">
                    {" "}
                    <FaPhone /> +880 1234-567890
                  </li>
                  <li className="flex items- centergap-3px">
                    {" "}
                    <CiMail /> info@buildtech.com
                  </li>
                  <li className="flex gap-3px">
                    {" "}
                    <FaRegClock /> Mon-Sat, 9:00 AM – 6:00 PM
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
