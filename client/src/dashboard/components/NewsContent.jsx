import { Link } from 'react-router-dom';
// removed unused import 'profile'
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import { useContext, useEffect, useState } from 'react';
import storeContext from '../../context/storeContext';
import axios from 'axios';
import { base_url } from '../../config/config';
import { convert } from 'html-to-text';
import { toast } from 'react-hot-toast';

const NewsContent = () => {

    const { store } = useContext(storeContext);
    const [news, setNews] = useState([]);
    const [ all_news, set_all_news] = useState([])

    const [perPage, setPerPage] = useState(5);
    const [pages, setPages] = useState(0);
    const [page, setPage] = useState(1);

    /*
    useEffect(()=>{
        const fetchNews = async () => {
            try {
                const {data} = await axios.get(`${base_url}/api/news`, {
                    headers: {
                        'Authorization' : `Bearer ${store.token}`
                    }
                });
                setNews(data.news);
            } catch (error) {
                console.log(error);
            }
        };
        fetchNews();
    },[])
    */

    const get_news = async () => {
        try {
            const { data } = await axios.get(`${base_url}/api/news`, {
                headers: {
                    'Authorization' : `Bearer ${store.token}`
                }
            })   
            set_all_news(data.news)
            setNews(data.news)
        } catch (error) {
            console.log(error)
        }
    } 

    useEffect(() => {
        get_news()
    },[])

    useEffect(()=> {
        if (news.length > 0) {
            const calculate_page = Math.ceil(news.length / perPage);
            setPages(calculate_page)
        }
    },[news,perPage])

    const deleteNews = async (newsId) => {
        if (window.confirm('Are you sure to delete?')) {
            try {
                const { data } = await axios.delete(`${base_url}/api/news/delete/${newsId}`, {
                    headers: {
                        'Authorization' : `Bearer ${store.token}`
                    }
                })   
                toast.success(data.message)
                get_news();
            } catch (error) {
                console.log(error)
            } 
        } 
    }

    const search_news = (e) => {
        const tempNews = all_news.filter(n => n.title.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1);
        setNews(tempNews);
        setPage(1);
        setPerPage(5);
    }

    const type_filter = (e) => {
        if (e.target.value === '') {
            setNews(all_news);
            setPage(1);
            setPerPage(5);
        } else {
            const tempNews = all_news.filter(n => n.status === e.target.value);
            setNews(tempNews);
            setPage(1);
            setPerPage(5);
        }
    }

    const [res,set_res] = useState({
        id: '',
        loader: false
    })

    const update_status = async (status,news_id) => {
        try {
            set_res({
                id: news_id,
                loader: true
            })
            const { data } = await axios.put(`${base_url}/api/news/status-update/${news_id}`, {status}, {
                headers: {
                    'Authorization' : `Bearer ${store.token}`
                }
            })
            set_res({
                id: '',
                loader: false
            })
            toast.success(data.message);
            get_news();
        } catch (error) {
            set_res({
                id: '',
                loader: false
            });
            console.log(error);
        }

    }

    return (
        <div className='bg-gray-50 min-h-screen p-6'>
            {/* Header Section */}
            <div className='mb-8'>
                <h1 className='text-3xl font-bold text-gray-900 mb-6'>News Management</h1>
                
                {/* Filters and Search */}
                <div className='flex flex-col sm:flex-row gap-4 mb-6'>
                    <div className='flex-1'>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>Search News</label>
                        <input 
                            onChange={search_news} 
                            type="text" 
                            placeholder='Search by title...' 
                            className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors' 
                        />
                    </div>
                    <div className='sm:w-64'>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>Filter by Status</label>
                        <select 
                            onChange={type_filter} 
                            name="status" 
                            className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'
                        >
                            <option value="">All Status</option>
                            <option value="pending">Pending</option>
                            <option value="active">Active</option>
                            <option value="deactive">Deactive</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Modern Table */}
            <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
                <div className='overflow-x-auto'>
                    <table className='w-full'>
                        <thead className='bg-gradient-to-r from-gray-50 to-gray-100'>
                            <tr>
                                <th className='px-8 py-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider'>#</th>
                                <th className='px-8 py-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider'>Image</th>
                                <th className='px-8 py-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider'>Title</th>
                                <th className='px-8 py-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider'>Category</th>
                                <th className='px-8 py-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider'>Description</th>
                                <th className='px-8 py-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider'>Date</th>
                                <th className='px-8 py-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider'>Status</th>
                                <th className='px-8 py-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='divide-y divide-gray-200'>
                            {news.length > 0 && news.slice((page - 1) * perPage, page * perPage).map((n, i) => (
                                <tr key={i} className='hover:bg-gray-50 transition-colors duration-200'>
                                    {/* Row Number */}
                                    <td className='px-8 py-6 whitespace-nowrap'>
                                        <div className='flex items-center'>
                                            <span className='text-lg font-bold text-gray-400'>#{(page - 1) * perPage + i + 1}</span>
                                        </div>
                                    </td>

                                    {/* Image */}
                                    <td className='px-8 py-6 whitespace-nowrap'>
                                        <div className='flex items-center'>
                                            <div className='relative'>
                                                <img 
                                                    src={n.image} 
                                                    alt={n.title} 
                                                    className='w-20 h-20 rounded-lg object-cover shadow-md'
                                                    onError={(e) => {
                                                        e.target.src = 'https://via.placeholder.com/80x80?text=No+Image';
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </td>

                                    {/* Title */}
                                    <td className='px-8 py-6'>
                                        <div className='max-w-xs'>
                                            <h3 className='text-lg font-bold text-gray-900 leading-tight mb-1'>
                                                {n.title}
                                            </h3>
                                        </div>
                                    </td>

                                    {/* Category */}
                                    <td className='px-8 py-6 whitespace-nowrap'>
                                        <span className='inline-flex px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800'>
                                            {n.category}
                                        </span>
                                    </td>

                                    {/* Description */}
                                    <td className='px-8 py-6'>
                                        <div className='max-w-sm'>
                                            <p className='text-gray-600 text-sm leading-relaxed'>
                                                {convert(n.description).slice(0, 100)}
                                                {convert(n.description).length > 100 && '...'}
                                            </p>
                                        </div>
                                    </td>

                                    {/* Date */}
                                    <td className='px-8 py-6 whitespace-nowrap'>
                                        <div className='flex items-center text-gray-500 text-sm'>
                                            <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
                                            </svg>
                                            {n.date}
                                        </div>
                                    </td>

                                    {/* Status */}
                                    <td className='px-8 py-6 whitespace-nowrap'>
                                        {store?.userInfo?.role === "admin" ? (
                                            <>
                                                {n.status === "pending" && (
                                                    <span 
                                                        onClick={() => update_status('active', n._id)} 
                                                        className='inline-flex px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 cursor-pointer hover:bg-blue-200 transition-colors'
                                                    >
                                                        {res.loader && res.id === n._id ? 'Loading...' : n.status}
                                                    </span>
                                                )}
                                                {n.status === "active" && (
                                                    <span 
                                                        onClick={() => update_status('deactive', n._id)} 
                                                        className='inline-flex px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 cursor-pointer hover:bg-green-200 transition-colors'
                                                    >
                                                        {res.loader && res.id === n._id ? 'Loading...' : n.status}
                                                    </span>
                                                )}
                                                {n.status === "deactive" && (
                                                    <span 
                                                        onClick={() => update_status('active', n._id)} 
                                                        className='inline-flex px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 cursor-pointer hover:bg-red-200 transition-colors'
                                                    >
                                                        {res.loader && res.id === n._id ? 'Loading...' : n.status}
                                                    </span>
                                                )}
                                            </>
                                        ) : (
                                            <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                                                n.status === "pending" ? 'bg-blue-100 text-blue-800' :
                                                n.status === "active" ? 'bg-green-100 text-green-800' :
                                                'bg-red-100 text-red-800'
                                            }`}>
                                                {res.loader && res.id === n._id ? 'Loading...' : n.status}
                                            </span>
                                        )}
                                    </td>

                                    {/* Actions */}
                                    <td className='px-8 py-6 whitespace-nowrap'>
                                        <div className='flex items-center gap-3'>
                                            <Link 
                                                to="#" 
                                                className='p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'
                                                title='View News'
                                            >
                                                <FaEye className='w-4 h-4' />
                                            </Link>
                                            {store?.userInfo?.role === 'writer' && (
                                                <Link 
                                                    to={`/dashboard/news/edit/${n._id}`} 
                                                    className='p-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors'
                                                    title='Edit News'
                                                >
                                                    <FaEdit className='w-4 h-4' />
                                                </Link>
                                            )}
                                            <button 
                                                onClick={() => deleteNews(n._id)} 
                                                className='p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors'
                                                title='Delete News'
                                            >
                                                <FaTrash className='w-4 h-4' />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Empty State */}
                {news.length === 0 && (
                    <div className='text-center py-16'>
                        <div className='w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center'>
                            <svg className='w-12 h-12 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z' />
                            </svg>
                        </div>
                        <h3 className='text-lg font-medium text-gray-900 mb-2'>No news found</h3>
                        <p className='text-gray-500'>Try adjusting your search or filter criteria.</p>
                    </div>
                )}
            </div>

            {/* Pagination */}
            <div className='flex flex-col sm:flex-row justify-between items-center gap-4 py-6'>
                <div className='flex items-center gap-4'>
                    <label className='text-sm font-medium text-gray-700'>News per Page:</label>
                    <select 
                        value={perPage} 
                        onChange={(e) => { 
                            setPerPage(parseInt(e.target.value)); 
                            setPage(1);
                        }} 
                        className='px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>

                <div className='flex items-center gap-4'>
                    <span className='text-sm text-gray-600 font-medium'>
                        Showing {(page - 1) * perPage + 1}-{Math.min(page * perPage, news.length)} of {news.length} news
                    </span>
                    <div className='flex gap-2'>
                        <button
                            onClick={() => {
                                if (page > 1) setPage(page - 1);
                            }}
                            disabled={page === 1}
                            className='p-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
                        >
                            <IoIosArrowBack className='w-5 h-5' />
                        </button>
                        <button
                            onClick={() => {
                                if (page < pages) setPage(page + 1);
                            }}
                            disabled={page === pages}
                            className='p-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
                        >
                            <IoIosArrowForward className='w-5 h-5' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsContent;