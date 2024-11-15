"use client"
import React, { useEffect, useState, useRef } from 'react'
import Slider from 'react-slick'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import PrevArrow from '../PrevArrow'
import NextArrow from '../NextArrow'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // nextArrow: <NextArrow />,  
    // prevArrow: <PrevArrow />,   
}

const ProductDetailHeaderSLider = () => {
    const router = useRouter();
    const sliderRef = useRef<Slider>(null);  


    const handleClick = (direction: 'prev' | 'next') => {
        if (sliderRef.current) {
            direction === 'next' ? sliderRef.current.slickNext() : sliderRef.current.slickPrev();
        }
    };

    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(true);
    }, []);

    if (!loaded) return null;

    return (
        <div className='my-14 w-full h-[400px] px-5 flex gap-5 flex-col'>
            {/* <div className='flex justify-end pr-5 h-[50px]'>
                <button onClick={() => handleClick('prev')}><PrevArrow /></button>
                <button onClick={() => handleClick('next')}><NextArrow /></button>
            </div> */}

         
                <Slider ref={sliderRef}  {...settings}>
                    <div className='relative h-[380px] w-[15%] mr-2'>
                        <Image
                            src={'/ProductDetail.png'}
                            alt="foto"
                            fill
                            className="object-cover rounded-[20px]"
                        />
                    </div>
                    <div className='relative h-[380px] w-[30%]'>
                        <Image
                            src={'/ProductDetail1.png'}
                            alt="foto"
                            fill
                            className="object-cover rounded-[20px]"
                        />
                    </div>
                    <div className='relative h-[380px] w-[50%]'>
                        <Image
                            src={'/ProductDetail2.png'}
                            alt="foto"
                            fill
                            className="object-cover rounded-[20px]"
                        />
                    </div>
                </Slider>
        </div>
    )
}

export default ProductDetailHeaderSLider 
