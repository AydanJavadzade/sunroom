"use client"
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2000,
}


const ThirdSectionSlider = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(true);
      }, []);
    
      if (!loaded) return null;
    return (
        <div className='className="h-[400px] w-100% flex flex-col gap-5 p-6 mb-3 '>
             <div className="h-1/5 flex flex-col justify-between ">
                <h1 className="text-4xl font-semibold font-sans  text-slate-800">WHY OUTDORRA</h1>
                <p className="w-2/3 font-medium">Enhance your living environment.
                  Unmatched quality, innovation, and affordability</p>
              </div>
             <Slider {...settings}>  <div className="w-2/3 flex flex-col gap-3 ">
            <h3 className="uppercase text-xl text-sky-600 font-semibold">Increase the value of your property</h3>
            <p className=" ">Our products are designed to improve the quality of life for homeowners and increase the value of your property.</p>
        </div> <div className="w-2/3 flex flex-col gap-3">
                <h3 className="uppercase text-xl text-sky-600 font-semibold">Increase the value of your property</h3>
                <p className=" ">Our products are designed to improve the quality of life for homeowners and increase the value of your property.</p>
            </div> <div className="w-2/3 flex flex-col gap-3">
                <h3 className="uppercase text-xl text-sky-600 font-semibold">Increase the value of your property</h3>
                <p className=" ">Our products are designed to improve the quality of life for homeowners and increase the value of your property.</p>
            </div> <div className="w-2/3 flex flex-col gap-3">
                <h3 className="uppercase text-xl text-sky-600 font-semibold">Increase the value of your property</h3>
                <p className=" ">Our products are designed to improve the quality of life for homeowners and increase the value of your property.</p>
            </div> <div className="w-2/3 flex flex-col gap-3">
                <h3 className="uppercase text-xl text-sky-600 font-semibold">Increase the value of your property</h3>
                <p className=" ">Our products are designed to improve the quality of life for homeowners and increase the value of your property.</p>
            </div> <div className="w-2/3 flex flex-col gap-3">
                <h3 className="uppercase text-xl text-sky-600 font-semibold">Increase the value of your property</h3>
                <p className=" ">Our products are designed to improve the quality of life for homeowners and increase the value of your property.</p>
            </div>
        </Slider></div>
    )
}

export default ThirdSectionSlider

function setLoaded(arg0: boolean) {
    throw new Error('Function not implemented.');
}
