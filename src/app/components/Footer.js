import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/logo.svg';
import FooterBg from '../../../public/footer.png'; // Import background image
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

import { MailIcon, PhoneIcon, LocationMarkerIcon } from '@heroicons/react/outline';

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white pt-8 md:pt-14" style={{ backgroundImage: `url(${FooterBg.src})` }}>
            <div className="container mx-auto px-4 md:px-6">
                {/* Group Company */}
                <h2 className="title w-full md:w-auto text-center mb-8">Group Company</h2>
                <div className="flex flex-wrap justify-center space-y-4 md:space-y-0 md:space-x-6 mb-8 md:mb-14">
                    <Image src="/image15.png" alt="Astral Pipes" width={160} height={64} />
                    <Image src="/image16.png" alt="Astral Adhesives" width={160} height={64} />
                    <Image src="/image17.png" alt="Bond It" width={160} height={64} />
                    <Image src="/image18.png" alt="Astral Bathware" width={160} height={64} />
                    <Image src="/image19.png" alt="Gem Paints" width={160} height={64} />
                </div>
                <hr className="border-t border-white opacity-20 my-8 md:my-16" />

                <div className="flex flex-wrap justify-between items-center mb-8">
                    <div className="w-full md:w-1/2 xl:w-1/3 mb-8 md:mb-0">
                        <Logo />
                    </div>

                    <div className="w-full md:w-3/5 mb-6 md:mb-0">
                        <div className="flex flex-wrap flex-col md:flex-row items-center">
                            <div className="w-full md:w-1/3 mb-4 md:mb-0">
                                <h3 className="font-bold text-[#EEDCB2]">Sign Up To Our Newsletter</h3>
                                <p className="text-xs">Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className="w-full md:w-2/3">
                                <form className="flex">
                                    <input
                                        type="email"
                                        placeholder="Enter Email Address"
                                        className="p-3 md:p-4  max-sm:p-2 flex-grow rounded-l-full bg-transparent border text-white placeholder:text-white"
                                    />
                                    <button className="bg-[#0060AF] hover:bg-blue-800 text-white p-3 max-sm:p-2  md:p-4 rounded-r-full">
                                        Enquire Now
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Footer */}
                <div className="flex flex-wrap justify-between mt-8 md:mt-16">
                    {/* Left Section */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                    <h3 className="font-bold mb-4 text-[#EEDCB2]">React us at</h3>

                        <div className="flex items-start">
                            <LocationMarkerIcon className="w-6 h-6 mr-2" />
                            <p className="text-sm">#417/418, 11th Cross, 4th Phase, Peenya Industrial Area, Bangalore - 560 058</p>
                        </div>
                        <div className="flex items-center mt-2">
                            <PhoneIcon className="w-6 h-6 mr-2" />
                            <p className="text-sm">+91 - 80 - 42525255</p>
                        </div>
                        <div className="flex items-center mt-2">
                            <MailIcon className="w-6 h-6 mr-2" />
                            <p className="text-sm">info@gem-paints.com</p>
                        </div>
                    </div>

                    {/* Middle Section */}
                    <div className="w-full md:w-1/3 flex flex-wrap mb-6 md:mb-0">
                        <div className="w-1/2">
                            <h3 className="font-bold mb-4 text-[#EEDCB2]">About</h3>
                            <ul className="space-y-2 text-sm">
                                <li>About Astrals</li>
                                <li>Paint Journey</li>
                                <li>Group Companies</li>
                            </ul>
                        </div>
                        <div className="w-1/2">
                            <h3 className="font-bold mb-4 text-[#EEDCB2]">Category</h3>
                            <ul className="space-y-2 text-sm">
                                <li>Interior Paints</li>
                                <li>Exterior Paints</li>
                                <li>Undercoats</li>
                                <li>Painting Tools</li>
                                <li>Water Proofing</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-full md:w-1/3 flex flex-wrap">
                        <div className="w-1/2">
                            <h3 className="font-bold mb-4 text-[#EEDCB2]">Services</h3>
                            <ul className="space-y-2 text-sm">
                                <li>Wall Painting</li>
                                <li>Water Solution</li>
                                <li>Painting</li>
                                <li>Colour Shades</li>
                            </ul>
                        </div>
                        <div className="w-1/2">
                            <h3 className="font-bold mb-4 text-[#EEDCB2]">Downloads</h3>
                            <ul className="space-y-2 text-sm">
                                <li>Become A Dealer</li>
                                <li>Blogs</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Links */}
                <div className="mt-10 flex flex-wrap justify-center md:justify-end items-center text-sm space-y-4 md:space-y-0">
                    <div className="flex space-x-4 mb-5">
                        <a href="#" aria-label="Facebook" className="hover:text-gray-400 transition duration-200 border rounded-full p-2 md:p-3">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="#" aria-label="Instagram" className="hover:text-gray-400 transition duration-200 border rounded-full p-2 md:p-3">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" aria-label="YouTube" className="hover:text-gray-400 transition duration-200 border rounded-full p-2 md:p-3">
                            <FaYoutube size={20} />
                        </a>
                        <a href="#" aria-label="LinkedIn" className="hover:text-gray-400 transition duration-200 border rounded-full p-2 md:p-3">
                            <FaLinkedinIn size={20} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#0060AF] py-3">
                <div className="container mx-auto flex flex-col md:flex-row  items-center justify-between text-xs md:text-sm px-4 md:px-6">
                    <a href="#" className='max-sm:mt-3'>Terms & Conditions</a>
                    <a href="#"  className='max-sm:mt-3'>ALL RIGHTS RESERVED</a>
                    <a href="#"  className='max-sm:mt-3'>Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
