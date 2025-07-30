import React from 'react';
import profile from '../../assets/profile.png';

const Header = () => {
    return (
        <div className='pl-4 fixed w-[calc(100vw-250px)] top-4 z-50'>
            <div className='w-full rounded h-[70px] flex justify-between items-center p-4 bg-[#f1f1fb]'>
                <input type="text" placeholder='search' className='px-3 pt-2 rounded-md outline-0 border border-gray-300 focus:border-blue-500 h-10'/>
                <div className='mr-4 '>
                    <div className='flex gap-x-2'>
                        <div className='flex flex-col justify-center items-end'>
                            <span className='font-bold'>Admin1</span>
                            <span className='font-semibold'>Admin</span>
                        </div>
                        <img src={profile} alt="" className='w-10 h-10 rounded-full border-2 border-blue-500'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;