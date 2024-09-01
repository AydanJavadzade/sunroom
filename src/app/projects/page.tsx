import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ProjectsCard from '@/components/ProjectsCard'
import Tabs from '@/components/ProjectsTabs'
import { Button } from '@nextui-org/button'
import Image from 'next/image'
import React from 'react'
import { SlArrowDown } from "react-icons/sl";
// import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";


const Projects = () => {
  return (
    <>
      {/* <Navbar /> */}

      {/* Projects header */}
      <header className='w-full h-[500px] rounded-t-3xl relative -mt-5'>
        <Image style={{ objectFit: "cover", borderTopLeftRadius: "24px", borderTopRightRadius: "24px" }} src={'/ProjectsHeader.png'} fill alt={''} />
      </header>

      {/* Project second section */}
      <div className='min-h-[900px] px-12 py-14  '>

        {/* Our projects section */}
        <div className='w-full h-[250px] flex justify-between mb-7 text-xl'>

          {/* left */}
          <div className='flex flex-col items-start justify-between flex-1  h-full'>
            <h1 className='text-6xl font-medium font-sans'>Our Projects</h1>
            <div className='flex items-center gap-3 font-sans'>
              <div className='w-[50px] h-[50px] rounded-full border-1 flex justify-center items-center hover:bg-black hover:text-white'><SlArrowDown /></div>
              <p>Scroll Down</p>
            </div>
          </div>

          {/* right */}
          <div className='flex flex-1 flex-col items-start justify-between'>
            <p className='w-[70%] text-xl' >Ante quis sed nibh cras. Ornare ullamcorper
              libero at elementum enim morbi pulvinar. Ac hendrerit nisl rhoncus nisl tempus.
              Ante quis sed nibh cras. Ornare ullamcorper libero at elementum enim morbi pulvinar.
              Ac hendrerit nisl.
            </p>
            <Tabs />
          </div>
        
        </div>
        <div className='w-full h-[650px] flex justify-between mt-8 p-2 bg-blue'>
      
            {/* <ProjectsCard image={''} title={''} address={''} product={''} about={''} /> */}
          </div>
      </div>

      {/* <Footer/> */}
    </>
  )
}

export default Projects