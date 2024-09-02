import { Button } from '@nextui-org/button'
import Image from 'next/image'
import React from 'react'
import { FaChevronRight } from "react-icons/fa";


 interface Project{
    image:string;
    title:string;
    address:string;
    product:string;
  }
  

const ProjectsCard:React.FC<Project> = ({image,title,address,product}) => {
    return (
        <div className='flex flex-col h-[600px] w-[30%] font-sans shadow-md pb-1'>
            {/* foto */}
            <div className='relative h-1/2 w-[100%]'>
                <Image style={{ objectFit: "cover", borderRadius: "20px" }} src={image} alt={'foto'} fill />
            </div>
            {/* describtion */}
            <div className='h-1/2 p-3 flex flex-col justify-between'>

                <div className='flex flex-col gap-3'>
                    <h1 className='text-2xl font-bold'>{title}</h1>
                    <div className='w-fit h-[50px] rounded-full bg-primary flex gap-2 items-center justify-center p-2'>
                        <Image style={{ width: "12px", height: "20px" }} src={'/address.png'} alt={'adress'} width={10} height={10} />
                        <p>{address}</p>
                    </div>
                    <div className='w-fit h-[50px] rounded-full bg-primary flex gap-2 items-center justify-center p-3'>
                        <Image style={{ width: "15px", height: "20px" }} src={'/home.png'} alt={'adress'} width={10} height={10} />
                        <p>{product}</p>
                    </div>
                </div>
              <button className='rounded-full w-[75%] h-[50px] flex items-center justify-between border border-x border-black py-1 px-4 hover:bg-primary text-base font-semibold transition duration-300 ease-in-out'>
                <p>Find Out More</p>
                <FaChevronRight/>
                </button>
            </div>
        </div>
    )
}

export default ProjectsCard