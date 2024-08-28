"use client"
import { Button } from '@nextui-org/button'
import React, { useState } from 'react'
import {FaArrowRightLong } from 'react-icons/fa6';

const LearnMoreContent = () => {
    const [showMore, setShowMore] = useState(false);

    const handleLearnMore = () => {
        setShowMore(!showMore);
    }

    return (
        <div>
            <p>Ante quis sed nibh cras. Ornare ullamcorper libero at elementum enim
                morbi pulvinar. Ac hendrerit nisl rhoncus nisl tempus.
                Ante quis sed nibh cras. Ornare ullamcorper libero at elementum enim
                morbi pulvinar. Ac hendrerit nisl rhoncus nisl tempus. </p>
                {showMore && (
                <div className="mt-4">
                    <p>
                    Ante quis sed nibh cras. Ornare ullamcorper libero at elementum enim
                morbi pulvinar. Ac hendrerit nisl rhoncus nisl tempus.
                Ante quis sed nibh cras. Ornare ullamcorper libero at elementum enim
                morbi pulvinar. Ac hendrerit nisl rhoncus nisl tempus.
                    </p>
                    
                </div>
            )}
          
                <Button className='bg-transparent text-blue-500' onClick={handleLearnMore} size="sm"  disableRipple >
                <FaArrowRightLong />
                    {showMore ? "Show less" : "Learn more"}
                </Button>
        </div>
    );
}

export default LearnMoreContent;
