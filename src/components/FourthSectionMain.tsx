import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import RequestProject from './RequestProject'

const FourthSectionMain = () => {
    return (
        <div className='min-h-[1000px] p-5 w-100% bg-primary relative z-20 rounded-b-3xl'>

            <div className='h-1/2 xl:h-[420px] w-[87%] flex flex-col xl:flex-row ml-[40px] gap-5 '>
                <div className='w-[80%] md:w-[60%] xl:w-[45%] mx-auto md:h-[100%] rounded-2xl'>
                    <Image style={{ objectFit: "cover", height: '100%' }} src={'/tailored.png'} alt={''} width={200} height={300} layout='responsive' />
                </div>


                <div className='bg-black h-1/2  md:h-[100%] xl:w-[35%] w-[80%] mx-auto text-white flex flex-col justify-between p-7 rounded-2xl'>

                    <div className='flex flex-col h-[50%]  justify-between font-sans'>
                        <h1 className='text-3xl  font-bold'>
                            <span className="text-blue-600">Tailored</span><br />Project Design
                        </h1>
                        <p >We design your outdoor and backyard space to maximize the usage, ultimately all year around.
                            Let’s make your dreams come true now.
                        </p>
                    </div>

                    <Link target="_blank" href={"/projects"}>
                        <div className=" h-[10%] flex items-center flex- gap-2 text-blue-500 right-0 ">
                            <p>Explore</p>
                            <FaArrowRightLong />
                        </div>
                    </Link>

                </div>
            </div>
            <div className='md:bg-[url(/leaves.png)] min-h-[800px] bg-no-repeat bg-[right_top_-3px]  flex items-end'>
                <div className='mt-6 w-[87%] h-[70%] mx-auto flex flex-col items-center md:items-baseline gap-5 '>
                    <div className='text-3xl font-bold font-sans w-[389px] h-[89px]'><h1>We Support<br />
                        <span className="text-green-800">The Sustainability</span></h1>
                    </div>
                    <div className='flex flex-col gap-5 md:flex-row justify-between mt-3'>
                        <div className='border-solid w-[300px] h-[110px]  flex flex-col justify-between'>
                            <Image src={'/tailored1.png'} alt={''} width={30} height={30}  />
                            <p>Lightweight, but sturdy and durable. Small foot-printed structures.</p>
                        </div>
                        <div className='border-solid w-[300px] h-[110px]  flex flex-col justify-between'>
                            <Image src={'/tailored2.png'} alt={''} width={30} height={30}  />
                            <p>Lightweight, but sturdy and durable. Small foot-printed structures.</p>
                        </div>
                        <div className='border-solid w-[300px] h-[110px]  flex flex-col justify-between'>
                            <Image src={'/tailored3.png'} alt={''} width={30} height={30}  />
                            <p>Lightweight, but sturdy and durable. Small foot-printed structures.</p>
                        </div>
                        <div className='border-solid w-[300px] h-[110px]  flex flex-col justify-between'>
                            <Image src={'/tailored4.png'} alt={''} width={30} height={30}  />
                            <p>Lightweight, but sturdy and durable. Small foot-printed structures.</p>
                        </div>
                    </div>
                    <div className='w-[100%] mx-auto mt-5'><Image src={'/blackline.png'} width={1500} height={1} alt="" /></div>
            <div className="w-[100%] md:w-[50%] md:h-[300px] h-1/3 p-2 flex items-center justify-center mx-auto bg-black rounded-3xl"><RequestProject/></div>
                </div>
            </div>
        </div>
    )
}

export default FourthSectionMain

