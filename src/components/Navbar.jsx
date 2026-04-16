'use client';
import navImg from '../../src/asset/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaChartLine, FaHome } from "react-icons/fa";
import { IoMdMenu, IoMdTime } from 'react-icons/io';

const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className="navbar bg-base-100 shadow-sm px-4 md:px-10 py-4">

            <div className="navbar-start">

                <div className="dropdown md:hidden">
                    <label tabIndex={0} className="btn btn-ghost text-2xl">
                        <IoMdMenu />
                    </label>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li className={`${pathname === '/' ? 'bg-green-900 text-white rounded-lg' : ''}`}>
                            <Link className="flex gap-2 items-center p-2" href="/">
                                <FaHome /> Home </Link>
                        </li>

                        <li className={`${pathname === '/timeline' ? 'bg-green-900 text-white rounded-lg' : ''}`}>
                            <Link className="flex gap-2 items-center p-2" href="/timeline">
                                <IoMdTime /> Timeline </Link>
                        </li>

                        <li className={`${pathname === '/starts' ? 'bg-green-900 text-white rounded-lg' : ''}`}>
                            <Link className="flex gap-2 items-center p-2" href="/starts">
                                <FaChartLine /> Starts </Link>
                        </li>
                    </ul>
                </div>

                
                <Image src={navImg} alt="logo" className="w-24 md:w-32 h-auto ml-2" />
            </div>

            
            <div className="navbar-end hidden md:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    <li className={`${pathname === '/' ? 'bg-green-900 text-white rounded-lg' : ''}`}>
                        <Link className='flex gap-2 items-center p-2' href="/">
                            <FaHome /> Home
                        </Link>
                    </li>

                    <li className={`${pathname === '/timeline' ? 'bg-green-900 text-white rounded-lg' : ''}`}>
                        <Link className='flex gap-2 items-center p-2' href="/timeline">
                            <IoMdTime /> Timeline
                        </Link>
                    </li>

                    <li className={`${pathname === '/starts' ? 'bg-green-900 text-white rounded-lg' : ''}`}>
                        <Link className='flex gap-2 items-center p-2' href="/starts">
                            <FaChartLine /> Starts
                        </Link>
                    </li>    
                </ul>
            </div>
        </div>
    );
};

export default Navbar;