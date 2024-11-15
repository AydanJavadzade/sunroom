"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaChevronRight } from "react-icons/fa";


interface Product {
    image: string;
    title: string;
    describtion: string;
    onClick: any
}

// const router = useRouter();

// const handleFindOutMore = (id: number) => {
//     router.push(`/${id}`);
// };
const ProductCard: React.FC<Product> = ({ image, title, describtion, onClick}) => {
   
    return (
        <div className='flex flex-col h-[450px] w-[100%] font-sans shadow-md pb-1'>
            {/* foto */}
            <div className='relative h-[70%] w-[100%] transition-transform duration-500 ease-in-out transform hover:scale-95'>
                <Image style={{ objectFit: "cover", borderRadius: "20px" }} src={image} alt={'foto'} fill />
            </div>
            {/* describtion */}
            <div className='h-1/2 p-3 flex flex-col justify-between'>

                <div className='flex flex-col gap-3'>
                    <h1 className='text-2xl font-bold'>{title}</h1>
                    <p>{describtion}</p>

                </div>
                <button onClick={onClick} className='rounded-full w-[75%] h-[50px] flex items-center justify-between border border-x border-black py-1 px-5 hover:bg-black hover:text-white text-base font-semibold transition duration-300 ease-in-out'>
                    <p>Find Out More</p>
                    <FaChevronRight />
                </button>
            </div>
        </div>
    )
}

export default ProductCard