import Image from 'next/image'
import React from 'react'

const ProjectsDetailCard = () => {
    return (
        <div className='w-[100%] h-fit'>

            <div className='h-[800px] px-12 mb-10 flex flex-col  '>
                {/* title describtion */}
                <div className='h-[30%] flex flex-col gap-3 bg-green-300'>
                    <div className='flex w-[100%] h-1/2 items-center justify-between bg-red-300'>
                        {/* right */}
                        <h1 className='text-6xl font-semibold font-sans w-[60%]'>Villa with garden</h1>
                        {/* left */}
                        <div className='flex w-[40%] flex-col gap-3 bg-blue-500'>
                            <div className='w-fit h-[50px] rounded-full bg-primary flex gap-2 items-center justify-center p-2'>
                                <Image style={{ width: "12px", height: "20px" }} src={'/address.png'} alt={'adress'} width={10} height={10} />
                                <p>Antibes - France</p>
                            </div>
                            <div className='w-fit h-[50px] rounded-full bg-primary flex gap-2 items-center justify-center p-3'>
                                <Image style={{ width: "15px", height: "20px" }} src={'/home.png'} alt={'adress'} width={10} height={10} />
                                <p>Sloped Pergolas, Glass walls</p>
                            </div>
                        </div>
                    </div>
                    <div className='h-1/2 w-[100%]'>
                        <p className='text-2xl font-sans'>Scelerisque netus at ornare duis facilisis diam placerat. Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. Sit gravida aliquam amet tellus vitae morbi.
                            Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis</p>
                    </div>
                </div>
                <div className='relative h-[50%] w-[100%]'>
                <Image style={{ objectFit: "cover", borderRadius: "20px" }} src={"/ourproject1.png"} alt={'foto'} fill />
            </div>

            </div>
        </div>
    )
}

export default ProjectsDetailCard