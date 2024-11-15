'use client'
import React from 'react'
import { SlArrowDown } from 'react-icons/sl'

const ScrollDown = () => {

    const HandleScroll = () => {
        window.scrollTo({
          top: document.documentElement.scrollHeight, 
          behavior: "smooth",  
        });
      };

  return (
    <div onClick={HandleScroll} className='hidden md:flex items-center gap-3 font-sans'>
    <div className=' flex w-[50px] h-[50px] rounded-full border-1  justify-center items-center hover:bg-black hover:text-white transition duration-300 ease-in-out'>
      <SlArrowDown />
    </div>
    <p>Scroll Down</p>
  </div>
  )
}

export default ScrollDown