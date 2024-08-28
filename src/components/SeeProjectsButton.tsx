"use client"
import { Button } from '@nextui-org/button'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const SeeProjectsButton = () => {
    const router = useRouter()

    const handleSeeProjectsButton = () => {
        router.push("/projects")
    }

    return (
        
            <Button className="text-blue-500 border border-blue-500  bg-transparent w-[80%] m-auto" onClick={handleSeeProjectsButton} radius="full" >
                <div className="flex items-center g-5">
                    <FaArrowRightLong />
                    <p className='ml-2'>
                        See All Our Projects
                    </p>
                </div>
            </Button>
    )
}

export default SeeProjectsButton