import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Menu from './menu'
import Search from './search'
import Profile from './profile'


const Navbar = () => {

    return (
        <div className='h-20 px-4  bg-red-100 '>
            {/*MOBILE */}
            <div className=' flex items-center justify-between h-full relative md:hidden text-black '>
                <Link href="/">
                <div className='w-32 h-28 flex gap-2'>
                        <Image
                            style={{ objectFit: "contain" }}
                            src="/Vector.png"
                            alt=""
                            width={35}
                            height={35}
                            loading="eager" />
                        <Image
                            style={{ objectFit: "contain" }}
                            src="/Plus.png"
                            alt=""
                            width={35}
                            height={35}
                            loading="eager" />
                        <Image
                            style={{ objectFit: "contain" }}
                            src="/Vector1.png"
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
                    <Image src="/logo.png" alt="logo" width={200} height={150} loading="eager" className='bg-grey-200' />
                </div>
                {/*RIGHT*/}
                <div className='w-2/3 flex justify-center items-center gap-10 text-white font-Helvetica Now Display'>

                    <Link href="/">Sunroom</Link>
                    <Link href="/louver">Louver</Link>
                    <Link href="/pergola">Pergola</Link>
                    <Link href="/blinds">Blinds</Link>
                    <Link href="/windows & doors">Windows & Doors</Link>
                    <Search />
                    <Profile/>

                </div>
            </div>
        </div>

    )
}

export default Navbar