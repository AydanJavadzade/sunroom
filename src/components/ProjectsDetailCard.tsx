"use client"
import Image from 'next/image'
import React from 'react'
import ProjectsSlider from './ProjectsSlider'
import { FaChevronRight } from 'react-icons/fa'
// import { useRouter } from 'next/navigation'

export interface ProjectDetail {
    title: string;
    address: string;
    product: string;
    describtion: string;
    need: string;
    features: string;
    usedTitle: string;
    usedDescribtion: string;
    productImage:string
    id: number
}


const ProjectsDetailCard: React.FC<ProjectDetail> = ({
    title,
    address,
    product,
    describtion,
    need,
    features,
    usedTitle,
    usedDescribtion,
    productImage}) => {


    return (
        <div className='w-[100%] h-fit font-sans overflow-x-hidden'>

            <div className='h-full px-12 mb-10 flex flex-col  '>
                {/* title describtion */}
                <div className='h-[40%] flex flex-col gap-3 mb-5'>
                    <div className='flex w-[100%] h-1/2 items-center justify-between'>
                        {/* right */}
                        <h1 className='text-6xl font-semibold font-sans w-[60%]'> {title}</h1>
                        {/* left */}
                        <div className='flex w-[40%] flex-col gap-3 '>
                            <div className='w-fit h-[50px] rounded-full bg-primary flex gap-2 items-center justify-center p-2'>
                                <Image style={{ width: "12px", height: "20px" }} src={'/address.png'} alt={'adress'} width={10} height={10} />
                                <p>{address}</p>
                            </div>
                            <div className='w-fit h-[50px] rounded-full bg-primary flex gap-2 items-center justify-center p-3'>
                                <Image style={{ width: "15px", height: "20px" }} src={'/home.png'} alt={'adress'} width={10} height={10} />
                                <p> {product}</p>
                            </div>
                        </div>
                    </div>
                    <div className='h-1/2 w-[100%]'>
                        <p className='text-2xl font-sans'>{describtion}</p>
                    </div>
                </div>

                <ProjectsSlider />

                <div className='flex flex-col w-[100%] h-[700px] gap-5'>
                    <div className='flex w-[100%] h-1/3 justify-between items-center gap-5'>
                        <div className='flex flex-col gap-2 flex-1 border rounded-2xl p-5 h-[100%] w-[100px]'>
                            <h1 className='w-1/2 text-xl font-semibold '>Project needs</h1>
                            <p className='w-[70%]'>{need} </p>
                        </div>
                        <div className='flex flex-col gap-2 flex-1 border rounded-2xl p-5 h-[100%] w-[100px]'>
                            <h1 className='w-1/2 text-xl font-semibold '>Project features</h1>
                            <p className='w-[70%]'>{features} </p>
                        </div>
                    </div>
                    <div className='flex w-[100%] h-2/3 justify-between items-center gap-5'>
                        <div className='h-[100%] flex flex-col flex-1 justify-between gap-3 border rounded-2xl p-5 w-[100px]'>
                            <div className='flex flex-col gap-5'>
                                <h1>USED PRODUCT</h1>
                                <h1 className='text-3xl font-bold'>
                                    {usedTitle}
                                </h1>
                                <p className='text-xl'>{usedDescribtion}</p>
                            </div>
                            <button className='rounded-full w-[75%] h-[50px] flex items-center justify-between border border-x border-black py-1 px-5 hover:bg-black hover:text-white font-semibold transition duration-300 ease-in-out '>
                                <p>Find Out More</p>
                                <FaChevronRight />
                            </button>
                        </div>
                        <div className='h-[100%] flex-1 relative border rounded-2xl p-5 w-[100px]'>
                            <Image src={productImage} alt={'foto'} fill />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsDetailCard