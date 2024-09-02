'use client'
// import { FiAlignJustify } from "react-icons/fi";
import React, { useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";


const Menu = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [open, setOpen] = useState(false)

  return (
    <div className=''>
      {/* <Image src="/menu.png" alt="menu" width={24} height={24} className="cursor-pointer text-red" onClick={()=>{setOpen((pre)=>!pre)}}/> */}
      <GiHamburgerMenu onClick={() => { setOpen((pre) => !pre) }} className={`${isHomePage ? 'text-white':'text-black'} cursor-pointer`} size={25} />


      <div
        className={`fixed top-24 right-0 h-[calc(100vh-80px)] bg-black text-white text-2xl z-10 transition-all duration-300 ease-in-out transform ${open ? 'translate-x-0 w-2/3' : 'translate-x-full w-0'
          }`}
      >
        {open && <div className="flex flex-col items-center justify-center gap-4 h-full text-xl">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About Us</Link>
          <Link href="request">Request a Quote</Link>
          <Link href="/contact">Contact Us</Link>

          <Link href="/">Sunroom</Link>
          <Link href="/louver">Louver</Link>
          <Link href="/pergola">Pergola</Link>
          <Link href="/blinds">Blinds</Link>
          <Link href="/windows & doors">Windows & Doors</Link>
        </div>}
      </div>
    </div>
  )
}

export default Menu