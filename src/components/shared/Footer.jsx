import Image from 'next/image';
import React from 'react';
import logo from "@/assets/img/logo-xl.png"
import instagram from "@/assets/img/instagram.png"
import facebook from "@/assets/img/facebook.png"
import twitter from "@/assets/img/twitter.png"

const Footer = () => {
    return (
        <div className='bg-[#244D3F]'>
            <div className='py-[80px] space-y-[15px]'>
            <div className='space-y-[15px] flex justify-center flex-col items-center'><Image src={logo} alt="logo"></Image>
            <p className='text-gray-300'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            </div>
            <div className='space-y-[15px] flex justify-center flex-col items-center'>
                <p className='text-white text-[20px]'>Social Links</p>
                <div className='flex justify-center gap-[12px]'>
                    <a href=""><Image src={instagram} alt="instagram"></Image></a>
                    <a href=""><Image src={facebook} alt={facebook}></Image></a>
                    <a href=""><Image src={twitter} alt={twitter}></Image></a>
                </div>
            </div></div>
            <div className='flex justify-center'>
                <footer className="max-w-[70%] border-t border-gray-500 py-[30px] footer sm:footer-horizontal text-gray-400 items-center">
  <aside className="grid-flow-col items-center">
    
    <p>© {new Date().getFullYear()} KeenKeeper. All right reserved</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="">Privacy Policy</a>
        <a href="">Terms of Service</a>
        <a href="">Cookies</a>
  </nav>
</footer>
            </div>
        </div>
    );
};

export default Footer;