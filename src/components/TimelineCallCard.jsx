import React from 'react';
import callLogo from '../../src/asset/call.png';
import Image from 'next/image';

const TimelineCallCard = ({ data }) => {
    const { name, type, time } = data;

    return (
        <div className="bg-base-100 shadow-sm flex gap-5 p-5 mb-5 mt-10">
            <div className='flex items-center justify-center'>
                <Image src={callLogo} alt="Call Logo" height={30} width={30} />
            </div>

            <div>
                <h3><span className="font-bold">{type}</span> with {name}</h3>
                <p>{time}</p>
            </div>
        </div>
    );
};

export default TimelineCallCard;