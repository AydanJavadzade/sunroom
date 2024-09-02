'use client'
import React, { useState } from 'react'
import Link from "next/link";
import { GiHamburgerMenu } from 'react-icons/gi';

const BurgerMenu = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className=''>
      <GiHamburgerMenu
        onClick={() => { setOpen((pre) => !pre) }}
        className='cursor-pointer '
        size={25}
      />


      <div
        className={`fixed top-24 right-0 h-[calc(100vh-80px)] bg-black text-white rounded-xl text-2xl z-10 transition-all duration-300 ease-in-out transform ${
          open ? 'translate-x-0 w-1/3' : 'translate-x-full w-0'
        }`}
      >
       {open && <div className="flex flex-col items-center justify-center gap-4 h-full">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About Us</Link>
          <Link href="request">Request a Quote</Link>
          <Link href="/contact">Contact Us</Link>
        </div>}
      </div>
    </div>
  )
}

export default BurgerMenu
