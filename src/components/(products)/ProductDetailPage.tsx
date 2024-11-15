"use client"
import React from 'react';
import ProductDetailHeaderSlider from './ProductDetailHeaderSlider';
import ScrollDown from '../ScrollDown';
import { Product, ProductCard, products } from './ProductsPageCard';
import ContactUs from './ContactUs';
import Image from 'next/image';
import RequestProject from '../RequestProject';
import { useParams } from 'next/navigation';

const ProductDetailPageCard = () => {
    
    const { slug} = useParams()
    console.log('Slug:', slug);

    let foundProduct: { product: Product; productDetail: ProductCard } | null = null;
    products.forEach(product => {
        const productDetail = product.productCard.find(card => card.slug === slug);
        console.log(productDetail)
        if (productDetail) {
            foundProduct = { product, productDetail };
        }
    });

    if (!foundProduct) {
        return <p>Product not found</p>;
    }
    const { product, productDetail } = foundProduct as { product: Product; productDetail: ProductCard };
    return (
    <div className='h-full w-[100%]'>
        <ProductDetailHeaderSlider />
        <div className='px-12 py-14'>
            <div className='w-full h-[100%] flex flex-col justify-between mb-10 text-xl'>
                <div className='flex flex-col gap-5 md:flex-row items-start justify-between md:h-[150px] mb-10 '>
                    <h1 className='w-[100%] md:w-50% flex-1 text-3xl md:text-4xl xl:text-6xl font-medium font-sans'>
                        {productDetail.title}
                    </h1>
                    <p className='w-[100%] flex-1 md:w-[40%] text-lg md:text-xl'>
                        {productDetail.describtion}
                    </p>
                </div>
                <ScrollDown />
            </div>

            <div>
                <p>Scelerisque netus at ornare duis facilisis diam placerat...</p>
            </div>

            <ContactUs />

            <div className='flex w-[100%] h-[500px] gap-5'>
                <div className='flex w-1/3 h-[100%]'>
                    <h1>Features</h1>
                    <p>Vel viverra in mi quis. Egestas neque</p>
                </div>

                <div className='flex gap-5 w-2/3 h-[100%] p-2 flex-wrap'>
                    {/* { 
                        <div key={productDetail.id}>
                            <h2>{productDetail.title}</h2>
                            <p>{productDetail.describtion}</p>
                            <div className='h-[50px] w-[40px]'>
                                <Image src={productDetail.image} alt={productDetail.title} fill />
                            </div>
                        </div>
                  } */}

                  {productDetail.features.map((card)=>{
                  return   <div key={card.id}>
                     <h2>{card.title}</h2>
                     <p>{card.describtion}</p>
                     <div className='h-[50px] w-[40px]'>
                         <Image src={card.icon} alt={productDetail.title} fill />
                     </div>
                 </div>
                  })}
                </div>
            </div>

            <RequestProject />
        </div>
    </div>
)
 
}
export default ProductDetailPageCard;
