'use client';
import React from 'react';
import twitter from '../../src/asset/twitter.png';
import facebook from '../../src/asset/facebook.png';
import instagram from '../../src/asset/instagram.png';
import Image from 'next/image';


const Footer = () => {
    return (
        <div className='bg-[#073c2a] text-white px-65 text-center py-20 mt-20 space-y-6'>
            <h2 className='text-5xl'><span className='font-bold'>Keen</span>Keeper</h2>
            <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <p className='font-bold'>Social Links</p>
            <ul className='flex gap-1 items-center justify-center'>
                <li><a href="https://twitter.com"><Image src={twitter} alt="Twitter" width={30} height={30} /></a></li>
                <li><a href="https://facebook.com"><Image src={facebook} alt="Facebook" width={30} height={30} /></a></li>
                <li><a href="https://instagram.com"><Image src={instagram} alt="Instagram" width={30} height={30} /></a></li>
            </ul>

            <hr className=" text-gray-500 opacity-50 mt-10 "/>

            <div className='flex justify-between mt-10 items-center'>
                <p>&copy; 2026 KeenKeeper. All rights reserved.</p>
                <ul className='text-gray-400 flex gap-4 justify-center mt-2'>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Terms of Service</a></li>
                    <li><a href="">Cookies</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;