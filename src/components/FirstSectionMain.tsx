import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MainNavbar from './MainNavbar'

const Header = () => {
    return (
        <header className="relative w-full h-[700px] bg-[url(/fon.png)] bg-cover bg-no-repeat p-3 md:pd-0 ">
            <div className="md:w-[95%] w-[100%] mx-auto h-[100%]">
                <MainNavbar/>
                <div className="w-full md:w-2/3 h-56 text-white ml-5 my-24">
                    <h1 className="text-6xl font-sans font-semibold">Live Sustainable</h1>
                    <div className="flex items-center flex-wrap mt-8">
                        <h3 className="text-5xl md:text-7xl font-sans font-normal">Feel The Nature</h3>
                        <div className="flex items-center gap-5 ml-0 2xl:ml-5">
                            <h3 className="text-7xl font-sans font-normal">With</h3>
                            <Image style={{ objectFit: "contain", marginTop: "7px" }} src={"/Vector.png"} alt="" width={47} height={72} />
                            <Image style={{ objectFit: "contain", marginTop: "7px" }} src={"/Plus.png"} alt="" width={47} height={72} />
                            <Image style={{ objectFit: "contain", marginTop: "7px" }} src={"/Vector1.png"} alt="" width={47} height={52} />
                        </div>
                    </div>
                </div>
                <Link href={"/sunroom"}>
                    <div className="ml-4 mt-32">
                        <Image style={{ objectFit: "contain" }} src={"/circle.png"} alt="" width={130} height={130} />
                    </div>
                </Link>
            </div>
        </header>
    )
}

export default Header