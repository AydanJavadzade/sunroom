import Image from 'next/image'
import React from 'react'
import ThirdSectionSlider from './MainThirdSectionSlider'
import ProjectsButton from './ProjectsButton'
import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'

const ThirdSectionMain = () => {
  return (
    <div className="min-h-[700px] w-100% flex flex-col gap-5 p-6">
{/* WHU OUTDOORA */}
    <div className=" gap-9 h-1/2 md:w-[95%] w-[100%] mx-auto py-5 justify-between hidden xl:flex" >
      <div className="w-[15%] h-[70%] mt-3">
        <Image style={{ objectFit: "cover" }} src={"/3rd-section.png"} alt={" "} width={200} height={300} loading="eager" layout="responsive" />
      </div>

      <div className="w-[65%] font-sans flex flex-col gap-6  mt-3">

        {/* why outdoora text */}
        <div className="h-1/5 flex flex-col  gap-4">
          <h1 className="text-4xl font-semibold font-sans  text-slate-800">WHY OUTDORRA</h1>
          <p className="w-2/3 font-medium">Enhance your living environment.
            Unmatched quality, innovation, and affordability</p>
        </div>
        {/* reasons */}
        <div className="flex  flex-col w-[100%] justify-between  gap-6">
          {/* 1st line */}
          <div className="flex gap-3 ">
            <div className="w-2/3 flex flex-col gap-3">
              <h3 className="uppercase text-xl text-sky-600 font-semibold">Increase the value of your property</h3>
              <p className="font-thin">Our products are designed to improve the quality of life for homeowners and increase the value of your property.</p>
            </div>
            <div className="w-2/3 flex flex-col gap-3">
              <h3 className="uppercase text-xl text-sky-600 font-semibold">Innovation and performance</h3>
              <p className="font-thin">Our product development teams ensure that our products are always at the forefront of industry innovation and performance.</p>
            </div>
          </div>
          {/* 2nd line */}
          <div className="flex gap-3 ">
            <div className="w-2/3 flex flex-col gap-3">
              <h3 className="uppercase text-xl text-sky-600 font-semibold">Top quality material</h3>
              <p className="font-thin">Our products are manufactured in many countries using top quality materials, ensuring that they are both durable and aesthetically pleasing.</p>
            </div>
            <div className="w-2/3 flex flex-col gap-3">
              <h3 className="uppercase text-xl text-sky-600 font-semibold">Competitive pricing</h3>
              <p className="font-thin">Our competitive pricing makes it possible for homeowners to invest in high quality glazing solutions without breaking the bank.</p>
            </div>
          </div>
          {/* 3rd line */}
          <div className=" flex  gap-3 ">
            <div className="w-2/3 flex flex-col gap-3">
              <h3 className="uppercase text-xl text-sky-600 font-semibold">Best value for your money</h3>
              <p className="font-thin">You can trust that you are getting the best value for your money when it comes to customized glazing for your home.</p>
            </div>
            <div className="w-2/3 flex flex-col gap-3">
              <h3 className="uppercase text-xl text-sky-600 font-semibold">Customized solutions</h3>
              <p className="font-thin">We offer customized solutions to meet the unique needs and preferences of our customers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

{/* LET US INSPIRE YOU */}
    <div className=" hidden xl:flex md:w-[95%] w-[100%] h-screen mx-auto flex-col gap-3 p-2">
      <div className="p-1">
        <h1 className="text-3xl font-sans font-bold h-[100%]  ">Let Us Inspire You!</h1>
      </div>

      <div className="w-[100%] h-full flex justify-between gap-3 p">
        <div className="w-[30%] h-[95%]  p-1">
          <Image style={{ objectFit: "cover" }} src={"/home1.png"} alt={""} width={200} height={400} layout="responsive" />
        </div>

        <div className="w-[30%] p-1 h-[95%] flex flex-col justify-between">
          <div className="h-1/3 w-[100%]">
            <Image style={{ objectFit: "cover" }} src={"/home2.png"} alt={""} width={150} height={150} layout="responsive" />
          </div>

          <div className="h-[55%] w-[100%] flex flex-col justify-between p-5 bg-[#F0F2F3] rounded-2xl">
            <div className="font-sans text-left flex flex-col gap-2 w-[80%]"><h1 className="text-2xl font-medium ">Do you have a new project? Talk to our sales experts now</h1>
              <p className="text-[18px] ">Please join to the hot line or
                call to +1 (669) 301 0915</p>
            </div>
            <Link href={"/contact"} target="_blank">
              <div className="w-[120px] h-[120px] rounded-full bg-black flex justify-center items-center ml-auto">
                <Image src={"/talk.png"} alt={""} width={50} height={50} />
              </div>
            </Link>
          </div>
        </div>

        <div className="w-[30%] p-1 h-[95%] flex flex-col justify-between text-blue-500">
          <div>
            <Image style={{ objectFit: "cover" }} src={"/home3.png"} alt={""} width={200} height={300} layout="responsive" />
          </div>
          <Link target="_blank" href={"/projects"}><div className="flex items-center g-3"><FaArrowRightLong /><p className="ml-2">See All Our Projects</p></div></Link>
       
        </div>
      </div>
    </div>
    {/* 3rd section mobile */}
    <div className="xl:hidden p-4 flex flex-col justify-between h-full ml-5">
      <ThirdSectionSlider />
      <ProjectsButton />
    </div>
  </div>
  )
}

export default ThirdSectionMain