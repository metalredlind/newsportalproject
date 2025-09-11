import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const RecentNewsFooter = () => {
    return (
        <div className='w-full flex flex-col gap-y-[14px]'>
            <div className={`text-xl font-bold text-white relative before:absolute before:w-[4px] before:bg-[#5271ff] before:h-full before:-left-0 pl-3`}>
                Recent News
            </div>

            <div className='grid grid-cols-1 gap-y-2 py-1'>
                {
                    [1,2,3].map((r,i) => {
                        if (i < 4) {
                            return <Link key={i} href={'/'} className='flex w-full'>
                                <div className='group relative overflow-hidden w-[80px] h-[65px]'>
                                    <div className='w-[80px] h-[65px] block group-hover:scale-[1.1] transition-all duration-[1s]'>

                                        <Image 
                                            className=''
                                            fill={true}
                                            src={'https://res.cloudinary.com/dklvaehhq/image/upload/v1756295701/news_images/j4w2hzaezr29ro3ywqmu.jpg'}
                                            alt='image'
                                        />
                                        <div className='w-full h-full block absolute left-0 top-0 invisible group-hover:visible bg-white cursor-pointer opacity-5 transition-all duration-300' href={'#'}>
                                        </div>
                                    </div>
                                </div>

                                <div className='w-[calc(100%-90px)] pl-2'>
                                    <div className='flex flex-col gap-y-1'>
                                        <h2 className='text-sm font-semibold text-white hover:text-[#c80000]'>iPhone 17 Mulai Dijual di Indonesia Awal Oktober</h2>
                                        <div className='flex gap-x-2 text-xs font-normal text-white'>
                                            <span>11-09-2025</span>
                                            <span>By Nami</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        }
                    })
                }

            </div>
        </div>
    );
};

export default RecentNewsFooter;