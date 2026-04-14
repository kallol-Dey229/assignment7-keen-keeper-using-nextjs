'use client';
import navImg from '../../src/asset/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaChartLine, FaHome } from "react-icons/fa";
import { IoMdTime } from 'react-icons/io';

const Navbar = () => {
    const pathname = usePathname();
    return (
        <div className="navbar flex bg-base-100 shadow-sm p-5">
            <div className="flex-1 pl-10">
                { <Image src={navImg} alt="logo" width={0} height={0} />}
            </div>
            <div className="flex-none">
                <ul className="flex gap-5 pr-10">
                    <li className={`${pathname === '/' ? 'bg-green-900 text-white rounded-lg' : ''}`}><Link className='flex gap-2 justify-center items-center p-2' href="/"><FaHome /> Home</Link></li>

                    <li className={`flex gap-2 justify-center items-center ${pathname === '/timeline' ? 'bg-green-900 text-white rounded-lg' : ''}`}><Link className='flex gap-2 justify-center items-center p-2' href="/timeline"><IoMdTime /> Timeline</Link></li>

                    <li className={`flex gap-2 justify-center items-center ${pathname === '/starts' ? 'bg-green-900 text-white rounded-lg' : ''}`}><Link className='flex gap-2 justify-center items-center p-2' href="/starts"><FaChartLine /> Starts</Link></li>    
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

