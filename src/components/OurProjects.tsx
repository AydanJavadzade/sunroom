"use client"
import React, { useContext, useState } from 'react'
import ProjectsCard from './ProjectsCard';
import { Category } from './ProjectsTabs';
import { useRouter } from 'next/navigation';

interface OurProjectsProps {
    category: Category['category'];
}


export interface Project {
    id: number;
    image: string;
    title: string;
    address: string;
    product: string;
    category: "home" | "business";
    describtion: string;
    need: string;
    features: string;
    used: {
        title: string;
        describtion: string
    };
    productImage: string
}

export const projects: Project[] = [
    {
        id: 0,
        image: "/ourproject1.png",
        title: "Villa with garden",
        address: "Trani-Italy",
        product: "Sloped Pergolas, Glass walls",
        category: "home",
        describtion: "Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis",
        need: "Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget duis elit lectus turpis leo molestie. Cras quis libero porttitor faucibus. Scelerisque nec mattis.",
        features: "Id lorem sapien lectus hendrerit dignissim dui facilisis viverra eleifend. A non vehicula sit eget consequat. Nisi erat at mattis quisque.Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget duis elit lectus turpis leo molestie. Cras quis libero porttitor faucibus. Scelerisque nec mattis.",
        used: {
            title: "Sloped Pergola used in this Project",
            describtion: "Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget duis elit lectus turpis leo molestie. Cras quis libero porttitor faucibus. Scelerisque nec mattis."
        },
        productImage: "/product.png",
    },
    {
        id: 1,
        image: "/ourproject2.png",
        title: "Contemporary house with swimming pool",
        address: "Portorose - Slovenia",
        product: "Bioclimatic Pergolas",
        category: "business",
        describtion: "Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis",
        need: "Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget duis elit lectus turpis leo molestie. Cras quis libero porttitor faucibus. Scelerisque nec mattis.",
        features: "Id lorem sapien lectus hendrerit dignissim dui facilisis viverra eleifend. A non vehicula sit eget consequat. Nisi erat at mattis quisque.Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget duis elit lectus turpis leo molestie. Cras quis libero porttitor faucibus. Scelerisque nec mattis.",
        used: {
            title: "Sloped Pergola used in this Project",
            describtion: "Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget duis elit lectus turpis leo molestie. Cras quis libero porttitor faucibus. Scelerisque nec mattis."
        },
        productImage: "/product.png"
    },
    {
        id: 2,
        image: "/ourproject3.png",
        title: "Family house with garden",
        address: "Antibes - France",
        product: "Sloped Pergolas, Glass walls",
        category: "home",
        describtion: "Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis",
        need: "Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget duis elit lectus turpis leo molestie. Cras quis libero porttitor faucibus. Scelerisque nec mattis.",
        features: "Id lorem sapien lectus hendrerit dignissim dui facilisis viverra eleifend. A non vehicula sit eget consequat. Nisi erat at mattis quisque.Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget duis elit lectus turpis leo molestie. Cras quis libero porttitor faucibus. Scelerisque nec mattis.",
        used: {
            title: "Sloped Pergola used in this Project",
            describtion: "Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget duis elit lectus turpis leo molestie. Cras quis libero porttitor faucibus. Scelerisque nec mattis."
        },
        productImage: "/product.png"

    },
    {
        id: 3,
        image: "/ourproject2.png",
        title: "Contemporary house with swimming pool",
        address: "Portorose - Slovenia",
        product: "Bioclimatic Pergolas",
        category: "business",
        describtion: "Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis",
        need: "Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget duis elit lectus turpis leo molestie. Cras quis libero porttitor faucibus. Scelerisque nec mattis.",
        features: "Id lorem sapien lectus hendrerit dignissim dui facilisis viverra eleifend. A non vehicula sit eget consequat. Nisi erat at mattis quisque.Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget duis elit lectus turpis leo molestie. Cras quis libero porttitor faucibus. Scelerisque nec mattis.",
        used: {
            title: "Sloped Pergola used in this Project",
            describtion: "Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget duis elit lectus turpis leo molestie. Cras quis libero porttitor faucibus. Scelerisque nec mattis."
        },
        productImage: "/product.png"

    },
    {
        id: 4,
        image: "/ourproject3.png",
        title: "Family house with garden",
        address: "Antibes - France",
        product: "Sloped Pergolas, Glass walls",
        category: "home",
        describtion: "Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis",
        need: "Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget duis elit lectus turpis leo molestie. Cras quis libero porttitor faucibus. Scelerisque nec mattis.",
        features: "Id lorem sapien lectus hendrerit dignissim dui facilisis viverra eleifend. A non vehicula sit eget consequat. Nisi erat at mattis quisque.Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget duis elit lectus turpis leo molestie. Cras quis libero porttitor faucibus. Scelerisque nec mattis.",
        used: {
            title: "Sloped Pergola used in this Project",
            describtion: "Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget duis elit lectus turpis leo molestie. Cras quis libero porttitor faucibus. Scelerisque nec mattis."
        },
        productImage: "/product.png"

    },
    {
        id: 5,
        image: "/ourproject1.png",
        title: "Villa with garden",
        address: "Trani-Italy",
        product: "Sloped Pergolas, Glass walls",
        category: "business",
        describtion: "Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis",
        need: "Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget duis elit lectus turpis leo molestie. Cras quis libero porttitor faucibus. Scelerisque nec mattis.",
        features: "Id lorem sapien lectus hendrerit dignissim dui facilisis viverra eleifend. A non vehicula sit eget consequat. Nisi erat at mattis quisque.Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget duis elit lectus turpis leo molestie. Cras quis libero porttitor faucibus. Scelerisque nec mattis.",
        used: {
            title: "Sloped Pergola used in this Project",
            describtion: "Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget duis elit lectus turpis leo molestie. Cras quis libero porttitor faucibus. Scelerisque nec mattis."
        },
        productImage: "/product.png"

    },
];

const OurProjects: React.FC<OurProjectsProps> = ({ category }) => {

    const router = useRouter();

    const handleFindOutMore = (id: number) => {
        router.push(`/${id}`);
    };
    return (
        <div className="w-full flex flex-col h-[90%] my-8 p-2  md:flex-wrap md:flex-row justify-between gap-14">
            {projects
                .filter(
                    (project) => category === "all" || project.category === category
                )
                .map(({ id, image, title, address, product }) => (
                    <div className='w-[30%]'>
                        <ProjectsCard
                        key={id}
                        image={image}
                        title={title}
                        address={address}
                        product={product}
                        onClick={() => handleFindOutMore(id)} />
                        </div>

                ))}
        </div>

    )
}

export default OurProjects