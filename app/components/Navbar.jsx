'use client'
import Image from 'next/image';
import { assets } from '@/assets/assets';
import React, { useEffect, useRef, useState } from 'react';

const Navbar = ({isDarkMode, setIsDarkMode}) => {
    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();

    const openMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(-16rem)';
        }
    };

    const closeMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(16rem)';
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className='fixed top-0 w-full right-0 -z-10 translate-y-[-80%] dark:hidden'>
                <Image src={assets.header_bg_color} alt="" className="w-full" />
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
                <a href="#top">
                    <Image src={assets.logo} alt="Logo" className="w-28 cursor-pointer mr-14" />
                </a>
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"} `}>
                    <li><a className="ovo" href="#top">Home</a></li>
                    <li><a className="ovo" href="#about">About me</a></li>
                    <li><a className="ovo" href="#services">Services</a></li>
                    <li><a className="ovo" href="#work">My Work</a></li>
                    <li><a className="ovo" href="#contact">Contact me</a></li>
                </ul>
                <div className="flex items-center gap-4">
                    <button onClick={()=>setIsDarkMode(prev => !prev)}>
                        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="Toggle Theme" className="w-6" />
                    </button>
                    <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50">
                        Contact
                        <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="Arrow" className="w-3" />
                    </a>

                    <button className="block md:hidden ml-3" onClick={openMenu}>
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="Menu" className="w-6" />
                    </button>
                </div>

                {/* Mobile menu */}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 dark:bg-darkHover dark:text-white'>
                    <div className="absolute right-6 top-6" onClick={closeMenu}>
                        <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="Close Menu" className="w-5 cursor-pointer" />
                    </div>
                    <li><a className="ovo" onClick={closeMenu} href="#top">Home</a></li>
                    <li><a className="ovo" onClick={closeMenu} href="#about">About me</a></li>
                    <li><a className="ovo" onClick={closeMenu} href="#services">Services</a></li>
                    <li><a className="ovo" onClick={closeMenu} href="#work">My Work</a></li>
                    <li><a className="ovo" onClick={closeMenu} href="#contact">Contact me</a></li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
