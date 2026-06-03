"use client";
import Link from 'next/link';
import React from 'react';
import Image from "next/image"
import logo from "@/assets/img/logo.png"
import { FaHome } from 'react-icons/fa';
import { RiTimeLine } from 'react-icons/ri';
import { ImStatsDots } from 'react-icons/im';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname= usePathname();
    
    return (
        <div className='border-b border-b-gray-200'>
            <nav className='flex justify-between items-center max-w-[90%] py-[16px] mx-auto'>
                <div><Image src={logo} alt="logo" /></div>
                <div className=' flex justify-center items-center'>
                    <Link className={`btn flex justify-center items-center gap-[5px] ${pathname==="/home"  
                         ? "bg-[#244D3F] text-white" : "bg-white border-none text-gray-600"}`} href="/home" 
                        ><FaHome /> <p>Home</p></Link>
                    <Link className={`btn flex justify-center items-center gap-[5px] ${pathname==="/timeline"  
                         ? "bg-[#244D3F] text-white" : "bg-white border-none text-gray-600"}`} href="/timeline" 
                        ><RiTimeLine/> <p>Timeline</p></Link>
                    <Link className={`btn flex justify-center items-center gap-[5px] ${pathname==="/stats"  
                         ? "bg-[#244D3F] text-white" : "bg-white border-none text-gray-600"}`} href="/stats" 
                        ><ImStatsDots/> <p>Stats</p></Link>
                </div>
            
            </nav>
        </div>
    );
};

export default Navbar;