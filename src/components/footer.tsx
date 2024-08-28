import Image from 'next/image'
import Link from 'next/link'
import { Input } from 'postcss';
import React from 'react'
import { FaChevronRight } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className='relative -mt-[40px] md:-mt-[100px] min-h-[900px] w-[100%]  bg-black text-white flex flex-col items-center justify-center pt-[30px] gap-10'>
      <div className='flex flex-col  h-1/4 justify-center items-center'>
        <div className='w-[400px] h-[100px] mt-10 hidden md:block'>
          <Image src={'/footerOutdoor.png'} width={400} height={100} alt={''} />
        </div>
        {/* mobile */}

        <div className='w-32 h-28 flex  gap-2 md:hidden'>
          <Image
            style={{ objectFit: "contain" }}
            src="/Vector.png"
            alt=""
            width={45}
            height={45}
            loading="eager" />
          <Image
            style={{ objectFit: "contain" }}
            src="/Plus.png"
            alt=""
            width={45}
            height={45}
            loading="eager" />
          <Image
            style={{ objectFit: "contain" }}
            src="/Vector1.png"
            alt=""
            width={45}
            height={45}
            loading="eager" />
        </div>

        <div className='text-center mx-auto w-[80%] md:w-[90%]'>
          <span>Sustainable Outdoor Living Structures I Custom Pergolas, Sunrooms, Louvers & ADU Modules</span>
        </div>
      </div>

      <div className='h-1/4 flex flex-col gap-10'>

        <div className='w-[90%] mx-auto'><Image src={'/horizontal.png'} width={1500} height={1} alt="" /></div>

        <div className='flex gap-6 md:gap-10 justify-center items-center h-2/3 md:h1/3 flex-wrap'>
          <Link className='flex items-center' href="/">Sunroom<FaChevronRight /></Link>
          <Link className='flex items-center' href="/louver">Louver<FaChevronRight /></Link>
          <Link className='flex items-center' href="/pergola">Pergola<FaChevronRight /></Link>
          <Link className='flex items-center' href="/blinds">Blinds<FaChevronRight /></Link>
          <Link className='flex items-center' href="/windows & doors">Windows & Doors<FaChevronRight /></Link>
          <Link className='flex items-center' href="/adu-modules">ADU Modules<FaChevronRight /></Link>
        </div>

        <div className='w-[90%] mx-auto'><Image src={'/horizontal.png'} width={1500} height={1} alt="" /></div>

        <div className='flex gap-5 justify-center align-center min-h-1/3 flex-wrap'>
          <Link href="#">About Us</Link>
          <Link href="#">Our Projects</Link>
          <Link href="#">Request Now</Link>
          <Link href="#">Tailored Design</Link>
        </div>

      </div>

      <div className='w-[95%] h-1/4 ml-auto  mt-3  flex flex-col xl:flex-row justify-around  gap-10 md:gap-5'>

        <div className='flex flex-col w-[100%] h-[100%] xl:w-1/4 gap-3'>
          <h1 className='text-sans text-xl font-semibold'>Contact</h1>
          <div className='w-[100%] flex justify-between   gap-5'>
            <p className='w- [150px] '>900 Pepper Tree Ln, Suit 500
              Santa Clara, CA 95051</p>
            <p>info@outdorra.com
              +1 (669) 301 0915</p>
          </div>
        </div>

        <div className='flex flex-col gap-3 w-[100%] h-[100%]  xl:w-1/4 ml-0 xl:ml-6'>
          <h1 className=' text-sans text-xl font-semibold ml-0 xl:ml-4 '>Follow us</h1>
          <div className='flex gap-1'>
            <div className='h-[40px] w-[40px]  grid place-items-center'><FaInstagramSquare /></div>
            <div className='h-[40px] w-[40px]  grid place-items-center'><FaFacebookSquare /></div>
            <div className='h-[40px] w-[40px]  grid place-items-center'>< FaLinkedin /></div>
            <div className='h-[40px] w-[40px]  grid place-items-center'><FaPinterest /></div>
          </div>
        </div>



        <div className='flex flex-col gap-3 w-[100%] h-[100%] xl:w-1/4'>
          <h1 className='  text-sans text-xl font-semibold '>Subscribe</h1>

          <div className='w-[60%]'>
            {/* <div className='  top-2'> <MdEmail /></div> */}
 
            <form >
              <input
              className='  bg-transparent border-b outline-none'
                placeholder='Enter your email address'
              />
               {/* <div className=' '><FaChevronRight /></div> */}
            </form>
          </div>
        </div>

      </div>
      <div className='w-[90%] mx-auto'><Image src={'/horizontal.png'} width={1500} height={1} alt="" /></div>
      <div className='w-[100%] h-1/4 p-4 text-center flex justify-center items-center mt-5'><p className=''>All Rights Reserved By The Outdorra Inc  /  US.California  /  2023</p></div>

    </footer>
  )
}

export default Footer