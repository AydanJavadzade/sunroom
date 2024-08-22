'use client'
// import { FiAlignJustify } from "react-icons/fi";
import React, { useState } from 'react'
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
const[open,setOpen]=useState(false)

  return (
    <div>
        <Image src="/menu.png" alt="menu" width={24} height={24} className="cursor-pointer text-red" onClick={()=>{setOpen((pre)=>!pre)}}/>
        
        {/* <FiAlignJustify style={{color:"red"}} className="cursor-pointer" onClick={()=>{setOpen((pre)=>!pre)}}/> */}
    {
        open && (
            <div className="flex flex-col items-center justify-center gap-4 bg-black text-white absolute left-0 top-20 w-full h-[calc(100vh-80px)] text-xl z-10">
                <Link href="/">Sunroom</Link>
                <Link href="/louver">Louver</Link>
                <Link href="/pergola">Pergola</Link>
                <Link href="/blinds">Blinds</Link>
                <Link href="/windows & doors">Windows & Doors</Link>
                <Link href="/logout"> Log out</Link>
            </div>
        )
    }
    </div>
  )
}

export default Menu