import Image from 'next/image'
import React from 'react'

interface CardProps {
  img: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ img, title }) => {
  return (
 
    <div className=' w-3/4'>
      <Image style={{ objectFit: "contain" }} width={250} height={250} src={img} alt="img" loading='eager' />
      <h1 className='text-sans mt-3 text-md'>{title}</h1>
    </div>
    

  );
}

export default Card;