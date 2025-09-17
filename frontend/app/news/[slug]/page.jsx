import Breadcrump from '@/components/Breadcrump';
import Category from '@/components/Category';
import RecentNews from '@/components/news/RecentNews';
import RelatedNews from '@/components/news/RelatedNews';
import Search from '@/components/news/Search';
import { base_api_url } from '@/config/config';
import React from 'react';
import HtmlParser from 'react-html-parser';

const Details = async ({ params }) => {

    const { slug } = await params;

    // Decode the URL slug to handle special characters
    const decodedSlug = decodeURIComponent(slug);

    const res = await fetch(`${base_api_url}/api/news/details/${decodedSlug}`, {
        next: {
            revalidate: 1
        }
    })

    // error handling for failed requests
    if (!res.ok) {
        throw new Error(`Failed to fetch news: ${res.status}`);
    }

    const {news, relatedNews} = await res.json();

    return (
        <div>
            <div className='bg-white shadow-md py-4'>
                <div className='px-4 md:px-8 w-full'>
                    <Breadcrump one={news?.category} two={news?.title} />
                </div>
            </div>

            <div className='bg-slate-200 w-full'>
                <div className='px-4 md:px-8 w-full py-8'>
                    <div className='flex flex-wrap'>

                        <div className='w-full xl:w-8/12'>
                            <div className='w-full pr-0 xl:pr-4'>
                                <div className='flex flex-col gap-y-5 bg-white'>
                                    <img src={news?.image} alt="" />
                                    <div className='flex flex-col gap-y-4 px-6 pb-6'>
                                        <h3 className='text-red-700 uppercase font-medium text-xl'>{news?.category}</h3>
                                        <h2 className='text-3xl text-gray-700 font-bold'>{news?.title}</h2>
                                        <div className='flex gap-x-2 text-xs font-normal text-slate-600'>
                                            <span className="font-bold">{news?.date}</span>
                                            <span className="font-bold">by {news?.writerName}</span>
                                        </div>
                                            {HtmlParser(news?.description)}
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className='w-full xl:w-4/12'>
                            <div className='w-full px-0 xl:px-4'>
                                <div className='flex flex-col gap-y-8'>

                                    <Search />
                                    <RecentNews />
                                    <div className='p-4 bg-white'>
                                        <Category titleStyle={`text-gray-700 font-bold`} />
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    
                    <div className='pt-8'>
                        <RelatedNews news={relatedNews} type="Related News" />
                    </div>

                </div>
            </div>
        </div>
        
    );
};

export default Details;