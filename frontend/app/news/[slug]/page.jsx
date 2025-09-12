import Breadcrump from '@/components/Breadcrump';
import Category from '@/components/Category';
import SimpleDetailsNewsCard from '@/components/news/item/SimpleDetailsNewsCard';
import PopularNews from '@/components/news/PopularNews';
import RecentNews from '@/components/news/RecentNews';
import Search from '@/components/news/Search';
import React from 'react';

const page = () => {
    return (
        <div>
            <div className='bg-white shadow-md py-4'>
                <div className='px-4 md:px-8 w-full'>
                    <Breadcrump one="Sports" two="Daftar 10 Pulau Terbaik Dunia" />
                </div>
            </div>

            <div className='bg-slate-200 w-full'>
                <div className='px-4 md:px-8 w-full py-8'>
                    <div className='flex flex-wrap'>

                        <div className='w-full xl:w-8/12'>
                            <div className='w-full pr-0 xl:pr-4'>
                                <div className='flex flex-col gap-y-5 bg-white'>
                                    <img src={'https://res.cloudinary.com/dklvaehhq/image/upload/v1755266846/cld-sample.jpg'} alt="" />
                                    <div className='flex flex-col gap-y-4 px-6 pb-6'>
                                        <h3 className='text-red-700 uppercase font-medium text-xl'>Category Name</h3>
                                        <h2 className='text-3xl text-gray-700 font-bold'>Kakak-Adik Bos Sritex jadi Tersangka Pencucian Uang</h2>
                                        <div className='flex gap-x-2 text-xs font-normal text-slate-600'>
                                            <span className="font-bold">12-09-2025</span>
                                            <span className="font-bold">by Nami</span>
                                        </div>
                                        <p>
                                        Kejaksaan Agung (Kejagung) menetapkan bos PT Sritex Tbk, Iwan Setiawan Lukminto (ISL) serta Iwan Kurniawan Lukminto (IKL), sebagai tersangka dugaan tindak pidana pencucian uang (TPPU). Keduanya sebelumnya dijerat dalam kasus dugaan korupsi pemberian kredit bank ke PT Sritex Tbk.

                                        "Memang terkait penanganan perkara Sritex, terhadap inisial IKL dan ISL sudah ditetapkan, dikenakan pasal TPPU-nya per 1 September oleh penyidik," ujar Kapuspenkum Kejagung Anang Supriatna di Gedung Kejagung, Jakarta, Jumat, 12 September 2025.

                                        Diketahui, Kejagung lebih dulu menetapkan Iwan Setiawan sebagai tersangka dugaan korupsi penyalahgunaan dana kredit dari bank milik negara. Iwan diduga menggunakan dana pencairan kredit untuk membayar utang dan membeli aset.

                                        Padahal, dana tersebut diberikan oleh bank untuk modal kerja. Kala itu, Iwan Setiawan menjabat Direktur Utama Sritex.

                                        Baca Juga: Kuasa Hukum Dirut Sritex Sebut Uang Rp2 M yang Disita Kejagung untuk Pendidikan Anak

                                        Sementara, Iwan Kurniawan ketika itu menjabat Wakil Direktur Utama Sritex. Iwan diduga menandatangani permohonan pemberian kredit modal kerja dan investasi kepada salah satu bank milik daerah pada 2019.

                                        Iwan turut diduga menandatangani akta perjanjian pemberian kredit kepada bank lain pada 2020. Padahal Iwan mengetahui kredit yang diberikan itu tidak digunakan sesuai peruntukan.

                                        Kejagung sudah menetapkan 12 orang tersangka dalam dugaan korupsi ini . Perbuatan para tersangka diduga menyebabkan kerugian negara mencapai Rp 1,08 triliun.
                                        </p>
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
                        <PopularNews />
                    </div>

                </div>
            </div>
        </div>
        
    );
};

export default page;