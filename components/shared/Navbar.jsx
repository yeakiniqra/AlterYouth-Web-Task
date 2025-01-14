'use client';

import React, { useState, useEffect } from 'react';
import { FiMenu, FiHome, FiInfo, FiBookOpen, FiUsers, FiPhone, FiDownload, FiLogIn } from 'react-icons/fi';
import LogoAy1 from '@/public/LogoAy1';
import LogoAy2 from '@/public/LogoAy2';

const SidebarItem = ({ icon, text, active }) => (
    <div className={`flex items-center space-x-2 p-4 ${active ? 'bg-green-100' : 'hover:bg-gray-100'}`}>
        <div className="text-sm text-gray-500">{icon}</div>
        <div className="text-sm text-gray-500 font-semibold hover:text-green-400">{text}</div>
    </div>
);

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-4">
                        <FiMenu className="text-2xl cursor-pointer" onClick={() => setSidebarOpen(!sidebarOpen)} />
                        {scrolled ? <LogoAy2 className="h-8 w-auto" /> : <LogoAy1 className="h-36 w-auto" />}
                    </div>
                    <div className={`hidden md:flex items-center space-x-8 ${scrolled ? 'text-green-500' : 'text-white'}`}>
                        <a href="#about" className={`hover:text-green-500 ${scrolled ? 'text-green-500' : 'text-white'}`}>About</a>
                        <a href="#how-it-works" className={`hover:text-green-500 ${scrolled ? 'text-green-500' : 'text-white'}`}>How it works</a>
                        <a href="#scholarships" className={`hover:text-green-500 ${scrolled ? 'text-green-500' : 'text-white'}`}>Scholarships</a>
                        <a href="#collaborate" className={`hover:text-green-500 ${scrolled ? 'text-green-500' : 'text-white'}`}>Collaborate</a>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                            Login
                        </button>
                    </div>
                </div>
            </div>

            <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setSidebarOpen(false)}>
                <div className={`fixed top-0 left-0 w-64 bg-white h-full z-50 p-4 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <SidebarItem icon={<FiHome />} text="Home" active />
                    <SidebarItem icon={<FiInfo />} text="How it works" />
                    <SidebarItem icon={<FiBookOpen />} text="About" />
                    <SidebarItem icon={<FiUsers />} text="Collaborate" />
                    <SidebarItem icon={<FiBookOpen />} text="Scholarship Policy" />
                    <SidebarItem icon={<FiPhone />} text="Get in touch" />
                    <SidebarItem icon={<FiDownload />} text="Get the app" />
                    <SidebarItem icon={<FiLogIn />} text="Log In" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
