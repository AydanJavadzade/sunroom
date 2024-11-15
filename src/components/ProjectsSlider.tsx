"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
}

const ProjectsSlider = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(true);
    }, []);

    if (!loaded) return null;
    return (
<div className='h-[50%] my-14'>
        <Slider {...settings}>
            <div className='relative h-[500px] w-full'>
                <Image
                    src="/familyhouse.png"
                    alt="foto"
                    layout="fill"
                    objectFit="cover"
                    style={{ borderRadius: "20px" }}
                />
            </div>
            <div className='relative h-[500px] w-full'>
                <Image
                    src="/ourproject2.png"
                    alt="foto"
                    layout="fill"
                    objectFit="cover"
                    style={{ borderRadius: "20px" }}
                />
            </div>
            <div className='relative h-[500px] w-full'>
                <Image
                    src="/ourproject3.png"
                    alt="foto"
                    layout="fill"
                    objectFit="cover"
                    style={{ borderRadius: "20px" }}
                />
            </div>
        </Slider>
        </div>
    )
}

export default ProjectsSlider

function setLoaded(arg0: boolean) {
    throw new Error('Function not implemented.');
}
