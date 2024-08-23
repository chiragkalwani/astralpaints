'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Logo from '../../../public/logo.svg';

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const closeDrawer = () => setIsDrawerOpen(false);

  const navItems = [
    { name: 'About', path: '#about' },
    { name: 'Category', path: '#paints' },
    { name: 'Services', path: '#services' },
    { name: 'Colours', path: '#colors' },
    { name: 'Downloads', path: '#downloads' },
    { name: 'Become A Dealer', path: '#dealer' },
    { name: 'Blogs', path: '#blogs' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <header className="bg-[#0060AF] text-white fixed top-0 w-full z-50 py-2">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-lg font-bold flex items-center">
          <Link href="/" onClick={closeDrawer}>
<Logo/>
          </Link>
        </div>
        <button
          onClick={toggleDrawer}
          className="block lg:hidden p-2 text-white hover:text-gray-200 focus:outline-none"
        >
          {isDrawerOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
        <nav className={`lg:flex lg:space-x-8 font-poppins font-medium ${isDrawerOpen ? 'block' : 'hidden'} lg:block`}>
          {navItems.map((item, index) => (
            <Link key={index} href={item.path} onClick={closeDrawer}>
              <li className="block lg:inline-block py-2 hover:text-gray-200 cursor-pointer max-sm:hidden">{item.name}</li>
            </Link>
          ))}
         <Link href="/" onClick={closeDrawer}>
         <li className="block lg:inline-block py-2 px-4 rounded-full hover:bg-transparent order hover:text-gray-200 border cursor-pointer max-sm:hidden bg-white text-[#0060AF] ">
         Enquire Now
            </li>
         </Link>
        </nav>
      </div>
      <div
        className={`fixed inset-0 bg-[#0060AF] text-white transform ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out lg:hidden z-50`}
      >
        <button
          onClick={toggleDrawer}
          className="p-4 absolute top-4 right-4 text-white"
        >
          <XIcon className="h-6 w-6" />
        </button>
        <nav className="flex flex-col items-center mt-16 space-y-4">
          {navItems.map((item, index) => (
            <Link key={index} href={item.path} onClick={closeDrawer}>
              <div className="text-lg hover:text-gray-300 cursor-pointer">{item.name}</div>
            </Link>
          ))}
                  <Link href="/" onClick={closeDrawer}>
         <li className="block py-2 px-4 rounded-full hover:bg-transparent order hover:text-gray-200 border  bg-white text-[#0060AF] ">
         Enquire Now
            </li>
            </Link>
        </nav>
      </div>
    </header>
  );
}
