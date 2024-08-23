"use client"
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Card from "./card";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";

const images = [
  { img: "/pergola.png" },
  { img: "/louver.png" },
  { img: "/sunroom.png" },
  { img: "/pergola.png" },
  { img: "/louver.png" },
  { img: "/sunroom.png" },
]



function DynamicSlides() {
  const [slides, setSlides] = useState([1, 2, 3, 4, 5, 6]);
  const handleClick = () => {
    setSlides(prevSlides =>
      prevSlides.length === 6
        ? [1, 2, 3, 4, 5, 6, 7, 8, 9]
        : [1, 2, 3, 4, 5, 6]
    );

  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2000,
    // lazyLoad: "ondemand",
    // nextArrow: <PrevArrow onClick={handleClick} />,
    // prevArrow: <NextArrow onClick={handleClick} />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1
        }
      },
    ]

  };

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null; // Slider component only renders after it's loaded


  return (
    <div className='flex flex-col h-3/4  w-[100%] gap-5'>

      <div className="flex justify-between">
      <h1 className="text-3xl font-sans font-bold ml-10">Meet our collection</h1>
        {/* <div className="flex">
         <button onClick={handleClick}><PrevArrow/></button> 
         <button onClick={handleClick}><NextArrow /></button> 
        </div> */}
      </div>

      <div className=" w-[100%] ml-10 h-[100%]">
        <Slider {...settings}>{images.map((el, index) => {
          const title = (el.img.slice(1, -4)).toUpperCase()
          return <Card key={index} img={el.img} title={title} />
        })}</Slider>
      </div>
    </div>
  );
}

export default DynamicSlides;
