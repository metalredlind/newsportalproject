import Breadcrump from '@/components/Breadcrump';
import React from 'react';

const page = () => {
    return (
        <div>
            <div className='bg-white shadow-md py-4'>
                <div className='px-4 md:px-8 w-full'>
                    <Breadcrump one="Category" two="Sports" />
                </div>
            </div>
        </div>
    );
};

export default page;