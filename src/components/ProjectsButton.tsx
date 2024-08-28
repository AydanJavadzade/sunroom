"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { FaArrowRightLong } from 'react-icons/fa6'
import Link from 'next/link'
import SeeProjectsButton from './SeeProjectsButton'


const ProjectsButton = () => {
    const router = useRouter()
    const handleProjectsButton = () => {
        router.push("/projects")
    }
    return (
        <div className='mt-8  w-full'>
            <div className=" flex flex-col gap-3 w-[100%] rounded-2xl ">
                <div className='h-1/3 w-[80%] md:w-[60%] m-auto'>
                    <Image src={"/home2.png"} alt={""} width={200} height={200} layout='responsive' />
                </div>

               <SeeProjectsButton/>

                <div className='min-w-[80%] md:w-[60%] min-h-[150px]  flex m-auto gap-4 items-center p-3 bg-primary rounded-2xl'>
                        <div className="h-[55%]  font-sans text-left flex flex-col gap-2 w-[100%] p-2">
                            <h1 className="text-2xl font-medium ">Do you have a new project? Talk to our sales experts now</h1>
                            <p className="text-[18px] ">Please join to the hot line or
                                call to +1 (669) 301 0915
                            </p>
                        </div>
                    <Link href={"/contact"} target="_blank">
                        <div className="w-[70px] h-[70px]  md:w-[100px] md:h-[100px] rounded-full bg-black flex justify-center items-center ml-auto">
                            <Image src={"/talk.png"} alt={""} width={30} height={30} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectsButton