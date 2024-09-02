// import Footer from '@/components/Footer'
// import Navbar from '@/components/Navbar'
// import ProjectsCard from '@/components/ProjectsCard'
import OurProjects from '@/components/OurProjects';
import Tabs from '@/components/ProjectsTabs'
import RequestProject from '@/components/RequestProject';
// import { Button } from '@nextui-org/button'
import Image from 'next/image'
import React from 'react'
import { SlArrowDown } from "react-icons/sl";


const Projects = () => {
  return (
    <>
    <div className='h-full w-[100%]'>
      {/* <Navbar /> */}

      {/* Projects header */}
      <header className='w-full h-[500px] rounded-t-3xl relative -mt-5'>
        <Image
          style={{ objectFit: "cover", borderTopLeftRadius: "24px", borderTopRightRadius: "24px" }}
          src={'/ProjectsHeader.png'}
          fill
          alt={''} />
      </header>

      {/* Project second section */}
      <div className='min-h-2/3 px-12 py-14  '>

        {/* Our projects section */}
        <div className='w-full h-[100%] flex flex-col justify-between mb-3 text-xl'>

          {/* 1st line */}
          <div className='flex items-start justify-between h-[150px]'>
            <h1 className='flex-1 text-6xl font-medium font-sans'>Our Projects</h1>
            <p className='flex-1 w-[40%] text-xl' >Ante quis sed nibh cras. Ornare ullamcorper
              libero at elementum enim morbi pulvinar. Ac hendrerit nisl rhoncus nisl tempus.
              Ante quis sed nibh cras. Ornare ullamcorper libero at elementum enim morbi pulvinar.
              Ac hendrerit nisl.
            </p>
          </div>

          {/* 2nd line */}
              <Tabs />
            </div>
            <div className='h-1/3 w-[60%] m-auto  flex justify-center items-center'> <RequestProject/></div>
          

        {/* <Footer/> */}
      </div >
      </div>
    </>
  )
}

export default Projects