"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { usePathname } from "next/navigation";


const Search = () => {
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    const [searchOpen, setSearchOpen] = useState(false)
    const [name, setName] = useState("");
    const router = useRouter()

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const name = formData.get("name") as string;

        if (name) {
            // router.push(`/products?name=${name}`)
            router.push(`/products/${name}`)
            setName("")
        }
    }

    const toggleSearch = () => {
        setSearchOpen(!searchOpen)
    }

    return (
        <form
            onSubmit={handleSearch}
            className='hidden lg:flex relative items-center
              rounded-2xl transition-all duration-500 ease-out'>
            {/* <div
                className={`absolute left-0 top-0 flex items-center pl-3 h-full transition-transform transform 
                    ${searchOpen ? 'translate-x-0' : '-translate-x-full'} duration-600 ease-out`}>
                <AiOutlineSearch className='text-white' size={18} />
            </div> */ }

          <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                name="name"
                placeholder="Search..."
                type="text"
                className={`p-1 pl-10  bg-gray-200 text-black rounded-2xl outline-none transition-all duration-500 ease-in-out transform
                    ${searchOpen ? 'opacity-100 w-56 translate-x-0' : 'opacity-0 w-0 translate-x-full'} `}
                    style={{ transitionProperty: 'width, opacity, transform' }}
            />

            <button
                type='button'
                onClick={toggleSearch}
                className={`absolute top-2.3  right-0 flex items-center justify-center w-8 h-8 `}
            >
                {searchOpen ? (
                    <AiOutlineClose className="text-gray-700" size={18} />
                ) : (
                    <AiOutlineSearch className={`${isHomePage ? 'text-white':'text-black'}`} size={20} />
                )}
            </button>
        </form>
    )
}

export default Search;

