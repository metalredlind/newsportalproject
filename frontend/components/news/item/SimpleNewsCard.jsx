import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const SimpleNewsCard = ({item,type}) => {
    return (
        <div className='group relative'>
            <div className='overflow-hidden'>
                <div className={`${type ? 'h-[270px] sm:h-[470px]' : 'h-[228px]'} w-full group-hover:scale-[1.1] transition-all duration-[1s]`}>
                    <Image className='' fill src={item.image} alt='img' />
                </div>
            </div>

            <div className='w-full h-full block absolute left-0 top-0 invisible group-hover:visible bg-white cursor-pointer opacity-5 transition-all duration-300'>
            </div>
            
            <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

            <div className='left-5 absolute bottom-4 flex justify-start items-start flex-col text-white font-semibold gap-y-2'>
                
                <div className='px-[6px] capitalize py-[2px] rounded-md text-[13px] bg-[#c80000]'>
                    { item.category }
                </div>

                <Link href={`/news/${item.slug}`} className='text-xl'>
                    { item.title }
                </Link>

                <div className='flex gap-x-2 text-sm font-medium'>
                    <span>{ item.date }</span>
                    <span>By { item.writerName }</span>
                </div>

            </div>
        </div>
    );
};

export default SimpleNewsCard;