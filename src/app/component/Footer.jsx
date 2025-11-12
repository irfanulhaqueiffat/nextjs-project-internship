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
import About from "@/app/(pages)/About/page.jsx";

export default function Footer() {
  return (
    <footer className="w-full bg-[#09231E] mt-10">
      <div className="container mx-auto max-w-6xl px-6 py-10 text-sm text-[#979797]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Branding / About */}
          <div className="flex flex-col">
            <div>
              <Image src={logo} alt="Logo" width={117} height={39} />
            </div>
            <p className="mt-4 text-[#979797]">Building with precision and sustainability for over 15 years.</p>

            <ul className="flex gap-4 mt-6">
              <li>
                <Link href={"#"} aria-label="Facebook">
                  <LuFacebook className="text-white" />
                </Link>
              </li>
              <li>
                <Link href={"#"} aria-label="LinkedIn">
                  <LuLinkedin className="text-white" />
                </Link>
              </li>
              <li>
                <Link href={"#"} aria-label="Instagram">
                  <FaInstagram className="text-white" />
                </Link>
              </li>
            </ul>

            <p className="mt-6 text-sm">Concern of Creative Business Group</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-3">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/About" className="hover:text-white">About Us</Link>
              <Link href="#" className="hover:text-white">Services</Link>
              <Link href="#" className="hover:text-white">Projects</Link>
              <Link href="/Contact" className="hover:text-white">Contact</Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-3">Services</h3>
            <ul className="flex flex-col gap-1">
              <li>Residential Construction</li>
              <li>Commercial Projects</li>
              <li>Industrial Development</li>
              <li>Renovation & Remodeling</li>
              <li>Design & Build</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-white mb-3">Contact Info</h3>
            <ul className="flex flex-col gap-3">
              <li className="inline-flex items-start gap-3">
                <SiGooglemaps className="mt-1 text-white" />
                <span>123 Construction Ave, Dhaka, Bangladesh</span>
              </li>
              <li className="inline-flex items-center gap-3">
                <FaPhone className="text-white" />
                <span>+880 1234-567890</span>
              </li>
              <li className="inline-flex items-center gap-3">
                <CiMail className="text-white" />
                <span>info@buildtech.com</span>
              </li>
              <li className="inline-flex items-center gap-3">
                <FaRegClock className="text-white" />
                <span>Mon-Sat, 9:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
