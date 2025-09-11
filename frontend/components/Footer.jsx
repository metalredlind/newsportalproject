import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import Gallery from './Gallery';
import Category from './Category';
import RecentNewsFooter from './news/RecentNewsFooter';
import Link from 'next/link';
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='w-full'>
            <div className='bg-[#1e1919]'>
                <div className='px-4 md:px-8 py-10 w-full gap-12 grid lg:grid-cols-4 grid-cols-1'>
                    <div className='w-full'>
                        <div className='w-full flex flex-col gap-y-[14px]'>
                            <Image  
                                className=''
                                width={200}
                                height={100}
                                src={logo}
                                alt="logo"
                            />
                            <h2 className='text-slate-300 text-justify'>
                                Easynews24.com is one of the most popular news portal. It has begun with commitment of fearlessness, investigative, informative, and independent journalism. Our dedicated team strives to deliver accurate and timely news updates. Stay connected with us for the latest happenings around the world.
                            </h2>
                        </div>
                    </div>

                    <Gallery />

                    <div>
                        <Category titleStyle="text-white" />
                    </div>

                    <RecentNewsFooter />
                </div>
            </div>

            <div className='bg-[#262323]'>
                <div className='pl-4 md:px-8 py-5 flex flex-col md:flex-row gap-3 justify-between items-center'>
                    <div className='flex gap-y-2 text-gray-300 justify-start items-center'>
                        <span>Copyright @ 2025</span>
                        <Link href={'#'}>Learn with Easy Learning</Link>
                    </div>

                    <div className='flex gap-x-[4px]'>
                        <a href="#" className='w-[37px] h-[35px] text-white flex justify-center items-center bg-slate-600'>
                            <FaFacebookF />
                        </a>
                        <a href="#" className='w-[37px] h-[35px] text-white flex justify-center items-center bg-slate-600'>
                            <FaXTwitter />
                        </a>
                        <a href="#" className='w-[37px] h-[35px] text-white flex justify-center items-center bg-slate-600'>
                            <FaYoutube />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;