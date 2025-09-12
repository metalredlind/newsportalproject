import React from 'react';
import Title from './../Title';
import SimpleDetailsNewsCard from './item/SimpleDetailsNewsCard';
import NewsCard from './item/NewsCard';

const DetailNewsCol = ({news,category}) => {
    return (
        <div className='w-full flex flex-col gap-[14px] pl-2'>
            <Title title={category} />
            <div className='grid grid-cols-1 gap-y-6'>
                <SimpleDetailsNewsCard news={news[0]} type="details_news" height={300} />
            </div>
            <div className='grid grid-cols-1 gap-y-[8px]'>
                {
                    news.map((item,i) => {
                        if (i < 4) {
                            return <NewsCard item={item} key={i} />;
                        }
                    })
                }
            </div>
            
        </div>
    );
};

export default DetailNewsCol;