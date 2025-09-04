import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const SimpleNewsCard = ({item,type}) => {
    return (
        <div className='group relative'>
            <div className='overflow-hidden'>
                <div className={`${type ? 'h-[270px] sm:h-[470px]' : 'h-[228px]'} w-full group-hover:scale-[1.1] transition-all duration-[1s]`}>
                    <Image className='' layout='fill' src={'https://res.cloudinary.com/dklvaehhq/image/upload/v1755266846/cld-sample-5.jpg'} alt='img' />
                </div>
            </div>

            <div className='w-full h-full block absolute left-0 top-0 invisible group-hover:visible bg-white cursor-pointer opacity-5 transition-all duration-300'>
            </div>
            
                <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

            <div className='left-5 absolute bottom-4 flex justify-start items-start flex-col text-white font-semibold gap-y-2'>
                
                <div className='px-[6px] py-[2px] rounded-md text-[13px] bg-[#c80000]'>
                    Category
                </div>

                <Link href={'/'} className='text-xl'>
                    Daftar 10 Pulau Terbaik Dunia 2025: Bali Bertengger di Posisi Ketiga
                </Link>

                <div className='flex gap-x-2 text-sm font-medium'>
                    <span>04-09-2025</span>
                    <span>By Nami</span>
                </div>

            </div>
        </div>
    );
};

export default SimpleNewsCard;