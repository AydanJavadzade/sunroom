'use client'
// import { FiAlignJustify } from "react-icons/fi";
import React, { useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from 'react-icons/gi';

const BurgerMenu = () => {
const[open,setOpen]=useState(false)

  return (
    <div>
     <GiHamburgerMenu onClick={()=>{setOpen((pre)=>!pre)}}   className='cursor-pointer ' size={20}/>   
         
    {
        open && (
            <div className="flex flex-col items-center justify-center gap-4 bg-black text-white absolute right-0 top-20 w-1/3 h-[calc(100vh-80px)] text-2xl z-10">
                <Link href="/">Home</Link>
                <Link href="/louver">Projects</Link>
                <Link href="/pergola">About Us</Link>
                <Link href="/blinds">Request a Quote</Link>
                <Link href="/windows & doors">Contact Us</Link>
            </div>
        )
    }
    </div>
  )
}

export default BurgerMenu