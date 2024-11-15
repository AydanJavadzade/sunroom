import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectsDetailCard from '@/components/ProjectsDetailCard'
import ProjectSlider from '@/components/ProjectsSlider'
import DynamicSlides from '@/components/Slider'
import React from 'react'
import ProductsPageCard from '@/components/(products)/ProductsPageCard';
import ProductDetailHeaderSLider from '@/components/(products)/ProductDetailHeaderSlider';

const LoginPage = () => {
  return (
    <>
      {/* <Navbar /> */}
       
      {/* <ProductsPageCard/> */}
      
   <div className='w-full h-full px-3'>
    <ProductDetailHeaderSLider/>
   </div>
 
      {/* <Footer/> */}
    </>
  )
}

export default LoginPage