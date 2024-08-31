"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaArrowRight, FaChevronRight } from 'react-icons/fa'
import {Button, ButtonGroup} from "@nextui-org/button";

const RequestProject = () => {

    const router = useRouter()

    const handleActiveService = () => {
        router.push("/request-service")
    }
    return (

        <div className='text-white text-center flex flex-col justify-center items-center bg-black w-[600px] h-[90%] p-2 rounded-2xl'>
            <h1 className='mb-4 text-2xl'>Couldn’t Find What You Are Looking For ?</h1>
            <span className='text-[12px]'>We are always ready to help you to get the best out of our services</span>
            <div className='text-blue-500 mb-5 cursor-pointer' onClick={handleActiveService}><p>7/24 Active Service</p> </div>
            
            <Button onClick={handleActiveService} radius="full">
            <span className="mr-6">Request a Project</span>
                <div className="flex items-center justify-center w-8 h-8 bg-black text-white rounded-full ml-6">
                <FaChevronRight />
                </div>
      </Button>
        </div>

    )
}

export default RequestProject