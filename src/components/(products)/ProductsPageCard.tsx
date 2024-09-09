"use client"
import Image from 'next/image'
import React from 'react'
import { SlArrowDown } from 'react-icons/sl'
import ContactUs from './ContactUs'
import ProductCard from './ProductCard'
import { useParams, useRouter } from 'next/navigation'

export interface ProductCard {
  id: number,
  image: string,
  title: string,
  describtion: string
}

export interface Product {
  type: string,
  image: string,
  title: string,
  describtion: string,
  productCard: ProductCard[]
}

const products: Product[] = [
  {
    type: "pergola",
    image: "/pergolaBg.png",
    title: "Pergola",
    describtion: "Ante quis sed nibh cras. Ornare ullamcorper libero at elementum enim morbi pulvinar. Ac hendrerit nisl rhoncus nisl tempus. Ante quis sed nibh cras. Ornare ullamcorper libero at elementum enim morbi pulvinar. Ac hendrerit nisl.",

    productCard: [
      {
        id: 1,
        image: '/SlopedPergola.png',
        title: 'Sloped Pergolas',
        describtion: 'Ante quis sed nibh cras'
      },
      {
        id: 2,
        image: '/90degPergola.png',
        title: '90 pergolas Pergolas',
        describtion: 'To accommodate the linearity of the horizon'
      },
      {
        id: 3,
        image: '/SlopedPergola.png',
        title: 'Sloped Pergolas',
        describtion: 'Ante quis sed nibh cras'
      },
      {
        id: 4,
        image: '/90degPergola.png',
        title: '90 pergolas Pergolas',
        describtion: 'To accommodate the linearity of the horizon'
      },
      {
        id: 5,
        image: '/SlopedPergola.png',
        title: 'Sloped Pergolas',
        describtion: 'Ante quis sed nibh cras'
      },
      {
        id: 6,
        image: '/90degPergola.png',
        title: '90 pergolas Pergolas',
        describtion: 'To accommodate the linearity of the horizon'
      },
    ]
  },
  {
    type: "sunroom",
    image: "/ProjectsHeader.png",
    title: "Sunroom",
    describtion: "Ante quis sed nibh cras. Ornare ullamcorper libero at elementum enim morbi pulvinar. Ac hendrerit nisl rhoncus nisl tempus. Ante quis sed nibh cras. Ornare ullamcorper libero at elementum enim morbi pulvinar. Ac hendrerit nisl.",
    productCard: [
      {
        id: 1,
        image: '/SlopedPergola.png',
        title: 'Sloped Pergolas',
        describtion: 'Ante quis sed nibh cras'
      },
      {
        id: 2,
        image: '/90degPergola.png',
        title: '90 pergolas Pergolas',
        describtion: 'To accommodate the linearity of the horizon'
      },
      {
        id: 3,
        image: '/SlopedPergola.png',
        title: 'Sloped Pergolas',
        describtion: 'Ante quis sed nibh cras'
      },
      {
        id: 4,
        image: '/90degPergola.png',
        title: '90 pergolas Pergolas',
        describtion: 'To accommodate the linearity of the horizon'
      },
      {
        id: 5,
        image: '/SlopedPergola.png',
        title: 'Sloped Pergolas',
        describtion: 'Ante quis sed nibh cras'
      },
      {
        id: 6,
        image: '/90degPergola.png',
        title: '90 pergolas Pergolas',
        describtion: 'To accommodate the linearity of the horizon'
      },
    ]
  }

]



const ProductsPageCard = ({ params }: { params: { product: string } }) => {
  const product = products.find(p => p.type === params.product);

  if (!product) {
    return <div>Not found</div>;
  }
    <>
      <div key={product.type} className='h-full w-[100%]'>
        
       
                <header className='w-full h-[500px] rounded-t-3xl relative'>
                  <Image
                    style={{ objectFit: "cover", borderTopLeftRadius: "24px", borderTopRightRadius: "24px" }}
                    src={product.image}
                    fill
                    alt={''} />
                </header>

                {/* Project second section */}
                <div className='h-2/3 px-12 py-14 relative bg-white z-10 rounded-t-3xl -mt-24 border-t-2 border-gray-300'>
                  {/* Our projects section */}
                  <div className='w-full h-[100%] flex flex-col justify-between mb-10 text-xl'>
                    <div className='flex flex-col gap-5 md:flex-row items-start justify-between  md:h-[150px] mb-10 '>
                      <h1 className='w-[100%] md:w-50% flex-1  text-3xl md:text-4xl xl:text-6xl font-medium font-sans'>{product.title}</h1>
                      <p className='w-[100%]  flex-1 md:w-[40%] text-lg md:text-xl'>
                        {product.describtion}
                      </p>
                    </div>
                    <div className='hidden md:flex items-center gap-3 font-sans'>
                      <div className=' flex w-[50px] h-[50px] rounded-full border-1  justify-center items-center hover:bg-black hover:text-white transition duration-300 ease-in-out'>
                        <SlArrowDown />
                      </div>
                      <p>Scroll Down</p>
                    </div>
                  </div>

                  {/* Contact us card */}
                  <ContactUs />

                  {/*Products Cards*/}
                  <div className="w-full flex flex-col h-[90%] my-8 p-2 md:flex-wrap md:flex-row justify-between gap-14">
                    {product.productCard.map((card: { image: string,title:string,describtion:string,id:number }) => {
                      return <div key={card.id} className='w-[30%]'> <ProductCard image={card.image} title={card.title} describtion={card.describtion}  /></div>
                    })}
                  </div>
                </div>
        
       
        {/* Products header */}

      </div>
    </>
 
}

export default ProductsPageCard
