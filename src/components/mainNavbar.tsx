"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Menu from './Menu';
import Search from './Search';
import Profile from './Profile';
import BurgerMenu from './BurgerMenu';
import { products } from './(products)/ProductsPageCard';

const MainNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`w-full h-20 px-8 text-white transition-all duration-300 ${isScrolled ? 'fixed top-0 left-0 bg-black shadow-lg z-50' : 'bg-transparent'} `}>
            {/*MOBILE */}
            <div className='flex items-center justify-between h-full relative md:hidden'>
                <Link href="/">
                    <div className='w-32 h-28 flex gap-2'>
                        <Image
                            style={{ objectFit: "contain" }}
                            src="/Vector.png"
                            alt=""
                            width={35}
                            height={35}
                            loading="eager"
                        />
                        <Image
                            style={{ objectFit: "contain" }}
                            src="/Plus.png"
                            alt=""
                            width={35}
                            height={35}
                            loading="eager"
                        />
                        <Image
                            style={{ objectFit: "contain" }}
                            src="/Vector1.png"
                            alt=""
                            width={35}
                            height={35}
                            loading="eager"
                        />
                    </div>
                </Link>
                <Menu />
            </div>
            {/*BIGGER SCREEN */}
            <div className='hidden md:flex items-center justify-between h-full'>
                {/*LEFT*/}
                <div className='mr-5'>
                    <Image src="/logo.png" alt="logo" width={200} height={150} loading="eager" className='bg-grey-200' />
                </div>
                {/*RIGHT*/}
                <div className='w-2/3 ml-9 p-2 hidden md:flex justify-center items-center gap-10 font-Helvetica text-[12px] md:text-[14px] xl:text-[16px]'>
                    {products.map((product) => {
                        return <Link
                            href={`/products/${product.type}`} className="relative group">
                            {product.title}
                            <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    })}

                    <Search />
                    <Profile />
                    <BurgerMenu />
                </div>
            </div>
        </div>
    );
};

export default MainNavbar;
