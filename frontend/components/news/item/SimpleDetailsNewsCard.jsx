import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SimpleDetailsNewsCard = ({news,type}) => {
    return (
        <div className='bg-white shadow'>
            <div className='group relative overflow-hidden'>

                <div className='w-full h-[250px] group-hover:scale-[1.1] transition-all duration-[1s]'>
                    <Image className='' layout='fill' src={'https://res.cloudinary.com/dklvaehhq/image/upload/v1756133540/news_images/g6bpqqikiuyvupaje6uy.jpg'} alt='img' />
                </div>
                <div className='w-full h-full block absolute left-0 top-0 invisible group-hover:visible bg-white cursor-pointer opacity-5 transition-all duration-300' />
                <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                <div className='left-5 absolute bottom-4 flex justify-start items-start flex-col text-white font-semibold gap-y-2'>
                
                    <div className='px-[6px] py-[2px] rounded-md text-[13px] bg-[#c80000]'>
                        Category
                    </div>

                </div>
            </div>

            <div className='p-5'>

                <Link href={'/'} className='text-[15px] font-semibold text-[#333333] hover:text-[#c80000]'>
                    Daftar 10 Pulau Terbaik Dunia 2025: Bali Bertengger di Posisi Ketiga
                </Link>
                <div className='flex gap-x-2 text-xs font-normal text-slate-600'>
                    <span className='font-semibold'>04-09-2025</span>
                    <span className='font-semibold'>By Nami</span>
                </div>
                {
                    type === 'details_news' && 
                    <p className='text-sm text-slate-600 pt-3'>
                        TNI melalui Komandan Satuan Siber (Dansatsiber) TNI Brigjen Juinta Omboh Sembiring berencana melaporkan influencer Ferry Irwandi ke Polda Metro Jaya..
                    </p>
                }

            </div>
            
        </div>
    );
};

export default SimpleDetailsNewsCard;