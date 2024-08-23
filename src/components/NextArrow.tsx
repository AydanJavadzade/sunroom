import React from 'react'
import { FaChevronRight } from "react-icons/fa";
const NextArrow = ({ onClick}:any)  => {
    return (
        <div className='' onClick={onClick}>
            <div className='bg-grey-500  h-[40px] w-[40px] rounded-full grid place-items-center cursor-pointer'>
                <FaChevronRight />
            </div>
        </div>
    )
}

export default NextArrow