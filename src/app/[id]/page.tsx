"use client"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { usePathname } from 'next/navigation';
import { projects } from '@/components/OurProjects';
import ProjectsDetailCard from '@/components/ProjectsDetailCard';
import ProjectsCardSlider from '@/components/ProjectsCardSlider';
import RequestProject from '@/components/RequestProject';

const ProjectDetailPage = () => {
    const pathname = usePathname();
    const id = pathname.split('/').pop();


    const projectId = id ? Number(id) : null;

    const project = projects.find(p => p.id === projectId);

    if (!project) return <div>Project not found</div>;

    return (
        <div className='h-full w-full'>
            <ProjectsDetailCard
                id={project.id}
                title={project.title}
                address={project.address}
                product={project.product}
                describtion={project.describtion}
                need={project.need}
                features={project.features}
                usedTitle={project.used.title}
                usedDescribtion={project.used.describtion}
                productImage={project.productImage}
            />
            <ProjectsCardSlider />

            <div className='h-1/3 w-[100%] m-auto flex justify-center items-center mb-7 bg-black'>
                <RequestProject />
            </div>

        </div>
    );
};

export default ProjectDetailPage;
