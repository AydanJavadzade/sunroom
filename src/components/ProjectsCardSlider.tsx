 "use client"
import React, { useEffect, useState, useRef } from 'react'
import Slider from 'react-slick'
import ProjectsCard from './ProjectsCard'
import { projects } from './OurProjects'
import { useRouter } from 'next/navigation'
import NextArrow from './NextArrow'
import PrevArrow from './PrevArrow'

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // nextArrow: <NextArrow />,  // You can use your custom NextArrow component here
    // prevArrow: <PrevArrow />,  // You can use your custom PrevArrow component here
}

const ProjectsCardSlider = () => {
    const router = useRouter();
    const sliderRef = useRef<Slider>(null);  // Use ref to control the slider

    const handleFindOutMore = (id: number) => {
        router.push(`/${id}`);
    };

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
        <div className='my-14 w-full h-full p-5 border rounded-3xl flex flex-col gap-5'>
            <div className='flex justify-end pr-5'>
                <button onClick={() => handleClick('prev')}><PrevArrow /></button>
                <button onClick={() => handleClick('next')}><NextArrow /></button>
            </div>

            <Slider ref={sliderRef} {...settings}>
                {projects.map(({ image, title, address, product, id }) => (
                    <div key={id} className='px-5'>
                        <ProjectsCard
                            image={image}
                            title={title}
                            address={address}
                            product={product}
                            onClick={() => handleFindOutMore(id)}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ProjectsCardSlider
