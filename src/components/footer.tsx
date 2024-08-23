import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='h-[700px] w-[100%]  bg-black text-white '>
      <div className='flex flex-col  h-1/3 justify-center items-center'>
      <div className='w-[400px] h-[100px] mt-10'>
        <Image  src={'/footerOutdoor.png'}  width={400} height={100} alt={''}/>
        </div>
        <span>Sustainable Outdoor Living Structures I Custom Pergolas, Sunrooms, Louvers & ADU Modules</span>
      </div>


    </footer>
  )
}

export default Footer