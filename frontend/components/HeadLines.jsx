import React from 'react';
import LoadingSpinnerComponent from 'react-spinners-components';
import Marquee from 'react-fast-marquee';
import Link from 'next/link';

const HeadLines = () => {

    const head = [
        {
            title: 'Daftar 10 Pulau Terbaik Dunia 2025: Bali Bertengger di Posisi Ketiga'
        },
        {
            title: 'Rapper Amerika Melly Mike Tiba di Indonesia, Hadiri Festival Pacu Jalur'
        },
        {
            title: 'Rahasia Makan Sehat Agar Awet Muda dan Panjang Umur, Terbukti dari Riset 2025'
        },
        {
            title: '5 Rahasia Panjang Umur Gratis yang Jarang Orang Tahu, Nomor 3 Paling Susah Dilakukan!'
        },
        {
            title: 'Profil Mauro Zijlstra dan Miliano Jonathans, Calon Pemain Timnas Indonesia'
        }
    ]

    return (
        <div className='bg-white shadow flex flex-wrap'>
            <div className='flex md:w-[170px] w-full bg-[#dddddd] relative after:absolute after:bg-[#dddddd] after:w-[20px] after:left-[160px] after:skew-x-[20deg] after:top-0 after:bottom-0 after:z-30'>
                <div className='md:pl-4 w-full py-2 flex justify-start items-center gap-x-1'>
                    <span>
                        <LoadingSpinnerComponent type='Ripple' colors={['#800000','#c80000']} size={'30px'} />
                    </span>
                    <h2 className='text-[#333333] font-semibold text-lg'>Headlines</h2>

                </div>
            </div>
            <div className='flex md:w-[calc(100%-170px)] w-full'>
                <div className='flex w-full justify-start items-center'>
                    <Marquee>
                        {
                            head.map((h,i) => <Link key={i} className='py-3 font-semibold hover:text-[#c80000] pr-12 text-sm' href={'/'}>
                                {h.title}
                            </Link>
                            )
                        }
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default HeadLines;