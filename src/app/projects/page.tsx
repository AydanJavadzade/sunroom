
import Tabs from '@/components/ProjectsTabs'
import RequestProject from '@/components/RequestProject';
import Image from 'next/image'
import React from 'react'


const Projects = () => {
  return (
    <>
      <div className='h-full w-[100%]'>
        {/* Projects header */}
        <header className='w-full h-[500px] rounded-t-3xl relative'>
          <Image
            style={{ objectFit: "cover", borderTopLeftRadius: "24px", borderTopRightRadius: "24px" }}
            src={'/ProjectsHeader.png'}
            fill
            alt={''} />
        </header>

        {/* Project second section */}
        <div className='h-2/3 px-12 py-14 relative bg-white z-10 rounded-t-3xl -mt-24 border-t-2 border-gray-300'>
          {/* Our projects section */}
          <div className='w-full h-[100%] flex flex-col justify-between mb-3 text-xl'>
            {/* 1st line */}
            <div className='flex flex-col gap-5 md:flex-row items-start justify-between  md:h-[150px] mb-10 '>
              <h1 className='w-[100%] md:w-50% flex-1  text-3xl md:text-4xl xl:text-6xl font-medium font-sans'>Our Projects</h1>
              <p className='w-[100%]  flex-1 md:w-[40%] text-lg md:text-xl'>
                Ante quis sed nibh cras. Ornare ullamcorper libero at elementum enim morbi pulvinar. Ac hendrerit nisl rhoncus nisl tempus. Ante quis sed nibh cras. Ornare ullamcorper libero at elementum enim morbi pulvinar. Ac hendrerit nisl.
              </p>
            </div>

            {/* 2nd line */}
            <Tabs />
          </div>

          <div className='h-1/3 w-[100%] md:w-[60%] m-auto flex justify-center items-center'>
            <RequestProject />
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects;
