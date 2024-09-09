"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaArrowRight, FaChevronRight } from 'react-icons/fa'
import { Button, ButtonGroup } from "@nextui-org/button";

const ContactUs = () => {

    const router = useRouter()

    const handleActiveService = () => {
        router.push("/request-service")
    }

    const handleContactUs = () => {
        router.push("/contacts")
    }
    return (

        <div className=' bg-primary w-[100%] h-[300px] p-5 rounded-2xl font-sans flex justify-center items-center mt-5'>
            <div className='w-[75%] h-[80%] flex justify-between items-center '>
            <div className='w-[40%] text-left h-[120px]'>
                <h1 className='text-4xl font-bold'>Request information or a quote</h1></div>
            <div className='w-[50%]   flex flex-col gap-5'>
                <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae, quaerat?Recusandae, quaerat?Recusandae, quaerat?</p>

                <button onClick={handleContactUs} className='rounded-full w-[75%] h-[50px] flex items-center justify-between border border-x border-black py-1 px-5 hover:bg-black hover:text-white text-base font-semibold transition duration-300 ease-in-out'>
                    <p>Contact Us</p>
                    <FaChevronRight />
                </button>
            </div>
            </div>
        </div>

    )
}

export default ContactUs