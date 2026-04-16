import React from 'react';
import textLogo from '../../src/asset/text.png';
import Image from 'next/image';

const TimelineMessageCard = ({ data }) => {
    const { name, type, time } = data;
    
        return (
            <div className="bg-base-100 shadow-sm flex gap-5 p-5 mb-5 mt-10">
                <div className='flex items-center justify-center'>
                    <Image src={textLogo} alt="Text Logo" height={30} width={30} />
                </div>
    
                <div>
                    <h3><span className="font-bold">{type}</span> with {name}</h3>
                    <p>{time}</p>
                </div>
            </div>
        );
};

export default TimelineMessageCard;