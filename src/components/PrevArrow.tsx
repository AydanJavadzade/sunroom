import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
const PrevArrow = ({ onClick }:any) => {
    return (
        <div className=' ' onClick={onClick}>
            <div className= 'h-[40px] w-[40px] rounded-full grid place-items-center border-slate-900 border-solid cursor-pointer'>
                <FaChevronLeft />
            </div>
        </div>
    )
}

export default PrevArrow;