import Link from "next/link";
import { RiLoginCircleFill } from "react-icons/ri";
import Image from "next/image"; 

import logo from "../../images/Layer_1.png"

export default function Navbar() {
  return (
    <div className="container mx-auto">
      <header className="w-full border-b bg-white/60 backdrop-blur sticky top-0 z-40">
    <div className="container">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
    <Link href={logo}><Image src={logo} alt="Logo" width={120} height={40} />
    </Link>
        <nav className="flex justify-between items-center gap-4">

          <div className="flex justify-between gap-8">
            
              <Link  href={'/'} >Home</Link>
               <Link  href={'/Services'} >About</Link>

              <Link  href={'/Services'} >Services</Link>
              <Link  href={'/Projects'} >Projects</Link>
              <Link  href={'/Contact'} >Contact</Link>
            
            
          </div>
          <div>
            <Link href={""} className="rounded-full bg-green-900 text-white px-4 py-2 text-sm font-prim ">Get a Quote</Link>
          
            
          </div>









          {/* <Link href="/"  className="rounded-full bg-black text-white px-4 py-2 text-sm hover:opacity-95">
            Home
          </Link>
          <Link href="/product" className="rounded-full bg-black text-white px-4 py-2 text-sm hover:opacity-95">
            Product
          </Link>
          <Link href="/about" className="rounded-full bg-black text-white px-4 py-2 text-sm hover:opacity-95">
            about
          </Link> */}
        </nav>
      </div>
    </div>
    </header>
    </div>
  )};