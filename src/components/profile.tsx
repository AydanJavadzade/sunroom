"use client"

import { CgProfile } from "react-icons/cg";
import React, { useState } from 'react'
import Link from "next/link";
import { useRouter } from "next/navigation";


const Profile = () => {

    const [profileOpen, setProfileOpen] = useState(false)
    const router = useRouter()
    const isLoggedIn = false

    const handleProfile = () => {
        if (!isLoggedIn) {
            router.push("/login")
        }
        setProfileOpen((pre) => !pre)

    }

    return (
        <div className="relative ">
        <div
            onClick={handleProfile}
            className="  w-5 h-5 -ml-8">

            <CgProfile size={20} />

            {profileOpen && <div className="absolute p-4 rounded-md top-9 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
                <Link href="/">Profile</Link>
                <div>Logout</div>
            </div>}
        </div>
        </div>
    )

}

export default Profile