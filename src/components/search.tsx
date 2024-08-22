"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';

const Search = () => {
    const [searchOpen, setSearchOpen] = useState(false)
    const [name, setName] = useState("");
    const router = useRouter()

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const name = formData.get("name") as string;

        if (name) {
            router.push(`/products?name=${name}`)
            setName("")
        }
    }

    const toggleSearch = () => {
        setSearchOpen(!searchOpen)
    }

    return (
        <form
            onSubmit={handleSearch}
            className='px-1 hidden lg:flex relative items-center
             bg-gray-200 rounded-2xl transition-all duration-500 ease-out'>
            <div
                className={`absolute left-0 top-0 flex items-center pl-3 h-full transition-transform transform 
                    ${searchOpen ? 'translate-x-0' : '-translate-x-full'} duration-600 ease-out`}>
                <AiOutlineSearch className='text-gray-600' size={18} />
            </div>

         {searchOpen &&  <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                name="name"
                type="text"
                className={`p-2 pl-10 text-black rounded-2xl outline-none bg-transparent transition-all duration-600 ease-out transform ${
                    searchOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                }`}
                placeholder="Search..."
                style={{ transitionProperty: 'opacity, transform' }}
            />}

            <button
                type='button'
                onClick={toggleSearch}
                className={`absolute top-2.3 right-0 flex items-center justify-center w-8 h-8 text-white transition-all duration-600 ease-out`}
            >
                {searchOpen ? (
                    <AiOutlineClose size={20} />
                ) : (
                    <AiOutlineSearch size={20} />
                )}
            </button>
        </form>
    )
}

export default Search;

