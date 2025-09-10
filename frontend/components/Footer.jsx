import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import Gallery from './Gallery';
import Category from './Category';

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
                </div>
            </div>
        </div>
    );
};

export default Footer;