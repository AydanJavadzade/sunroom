"use client"
import React, { useContext, useState } from 'react'
import ProjectsCard from './ProjectsCard';
import CategoryContextProvider, { categoryContext } from './CategoryContext';
import { Category } from './ProjectsTabs';

interface OurProjectsProps {
    category: Category['category'];
}


interface Project {
    id: number;
    image: string;
    title: string;
    address: string;
    product: string;
    category: "home" | "business";
    describtion:string
}

export const projects: Project[] = [
    {
        id: 0,
        image: "/ourproject1.png",
        title: "Villa with garden",
        address: "Trani-Italy",
        product: "Sloped Pergolas, Glass walls",
        category: "home",
        describtion:"Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis"
    },
    {
        id: 1,
        image: "/ourproject2.png",
        title: "Contemporary house with swimming pool",
        address: "Portorose - Slovenia",
        product: "Bioclimatic Pergolas",
        category: "business",
        describtion:"Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis"
    },
    {
        id: 2,
        image: "/ourproject3.png",
        title: "Family house with garden",
        address: "Antibes - France",
        product: "Sloped Pergolas, Glass walls",
        category: "home",
        describtion:"Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis"

    },
    {
        id: 3,
        image: "/ourproject2.png",
        title: "Contemporary house with swimming pool",
        address: "Portorose - Slovenia",
        product: "Bioclimatic Pergolas",
        category: "business",
        describtion:"Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis"

    },
    {
        id: 4,
        image: "/ourproject3.png",
        title: "Family house with garden",
        address: "Antibes - France",
        product: "Sloped Pergolas, Glass walls",
        category: "home",
        describtion:"Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis"

    },
    {
        id: 5,
        image: "/ourproject1.png",
        title: "Villa with garden",
        address: "Trani-Italy",
        product: "Sloped Pergolas, Glass walls",
        category: "business",
        describtion:"Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis"

    },
];

const OurProjects: React.FC<OurProjectsProps> = ({ category }) => {


    return (
        <div className="w-full flex flex-col h-[90%] my-8 p-2  md:flex-wrap md:flex-row justify-between gap-14">
            {projects
                .filter(
                    (project) => category === "all" || project.category === category
                )
                .map(({ id, image, title, address, product }) => (

                    <ProjectsCard
                        id={id}
                        image={image}
                        title={title}
                        address={address}
                        product={product} />
                ))}
        </div>

    )
}

export default OurProjects