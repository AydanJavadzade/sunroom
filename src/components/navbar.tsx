import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Search from './Search'
import Profile from './Profile'
import BurgerMenu from './BurgerMenu'
import { products } from './(products)/ProductsPageCard'


const Navbar = () => {

    return (
        <div className='w-[100%] relative h-24'>
            <div className='h-20 w-[100%] bg-white px-12 fixed z-50'>
                {/*MOBILE */}
                <div className=' flex items-center justify-between h-full relative md:hidden text-black '>
                    <Link href="/">
                        <div className='w-32 h-28 flex gap-2'>
                            <Image
                                style={{ objectFit: "contain" }}
                                src="/VectorBlack.png"
                                alt=""
                                width={35}
                                height={35}
                                loading="eager" />
                            <Image
                                style={{ objectFit: "contain" }}
                                src="/Plusblack.png"
                                alt=""
                                width={35}
                                height={35}
                                loading="eager" />
                            <Image
                                style={{ objectFit: "contain" }}
                                src="/Vector1Black.png"
                                alt=""
                                width={35}
                                height={35}
                                loading="eager" />
                        </div>

                    </Link>
                    <Menu />
                </div>
                {/*BIGGER SCREEN */}
                <div className='hidden md:flex items-center justify-between h-full'>
                    {/*LEFT*/}
                    <div className='1/3' >
                        <Image src="/outdoorblack.png" alt="logo" width={200} height={150} loading="eager" className='bg-grey-200' />
                    </div>
                    {/*RIGHT*/}
                    <div className='w-2/3 flex justify-center items-center gap-10 text-black font-Helvetica Now Display'>

                        {products.map((product) => {
                            return <Link
                                href={`/products/${product.type}`} className="relative group">
                                {product.title}
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        })}
                        
                        <Search />
                        <Profile />
                        <BurgerMenu />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar