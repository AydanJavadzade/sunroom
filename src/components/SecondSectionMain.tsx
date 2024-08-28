import React from 'react'
import LearnMoreContent from './LearnMore'
import DynamicSlides from './Slider'

const SecondSectionMain = () => {
    return (
        <div className="relative w-full min-h-[700px] p-14 rounded-t-3xl bg-slate-200 flex flex-col gap-4 -mt-20">
            <div className="md:w-[95%] w-[100%] mx-auto flex flex-col gap-3 h-1/2 md:h-1/4">
                <span className="font-sans text-xs">Sustainable Outdoor Living Structures I Custom Pergolas, Sunrooms, Louvers & ADU Modules</span>
                <LearnMoreContent/>
                <DynamicSlides/>
            </div>
        </div>
    )
}

export default SecondSectionMain