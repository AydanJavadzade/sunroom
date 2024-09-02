"use client";
import { SetStateAction, useContext, useState } from "react";
import ProjectsCard from "./ProjectsCard";
import CategoryContextProvider, { categoryContext } from "./CategoryContext";
import { SlArrowDown } from "react-icons/sl";
import OurProjects from "./OurProjects";

export interface Category{
    category:"all"|"home"|"business"
}

const Tabs = () => { 
const [category,setCategory]=useState<Category["category"]>("all")
    const handleClick = (category: Category["category"]) => {
        setCategory(category);
    };

    return (
        <>
        <div>
        <div className="flex items-start justify-between h-1/5">
                <div className='flex items-center gap-3 font-sans'>
                    <div className='w-[50px] h-[50px] rounded-full border-1 flex justify-center items-center hover:bg-black hover:text-white transition duration-300 ease-in-out'>
                        <SlArrowDown />
                    </div>
                    <p>Scroll Down</p>
                </div>


                <div className=" w-[300px] flex justify-center items-center border border-black rounded-full p-2">
                    <button
                        className={`${category === "all" ? "bg-black text-white" : "bg-white text-black"
                            } py-2 px-4 rounded-full transition duration-300 ease-in-out`}
                        onClick={() => handleClick("all")}
                    >
                        All
                    </button>

                    <button
                        className={`${category === "home" ? "bg-black text-white" : "bg-white text-black"
                            } py-2 px-4 rounded-full transition duration-300 ease-in-out`}
                        onClick={() => handleClick("home")}
                    >
                        Home
                    </button>

                    <button
                        className={`${category === "business"
                            ? "bg-black text-white"
                            : "bg-white text-black"
                            } py-2 px-4 rounded-full transition duration-300 ease-in-out`}
                        onClick={() => handleClick("business")}
                    >
                        Business
                    </button>
                </div>
            </div>
        <OurProjects category={category} />
        </div>
   
        
           
        </>
    );
};

export default Tabs;
