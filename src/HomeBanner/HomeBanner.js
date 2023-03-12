import { useQuery } from '@tanstack/react-query';
import React from 'react';
import "../HomeBanner/HomeBanner.css"
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BiRightArrow } from 'react-icons/bi';

const HomeBanner = () => {

    const categoryUrl = `https://job-task-vide-streming.vercel.app/allVideo`;

    const { data: BannerVideo, isLoading, refetch } = useQuery({
        queryKey: ["allVideo"],
        queryFn: async () => {
            const res = await fetch(categoryUrl);
            const data = await res.json();
            return data;
        },
    });

    return (
        <div>
            {
                BannerVideo && BannerVideo?.slice(0, 1).map(banner => <div className='h-screen w-full backgroundImage' key={banner._id}>
                    <div className='flex pt-36 sm:pt-48 pl-10 pr-5 md:pr-0 md:pl-36 text-white h-[800px]' >
                        <div className='w-[800px]' >
                            <h1 className='text-3xl lg:text-6xl font-bold'>{banner?.videoTitle}</h1>
                            <div className='flex items-center gap-5 pb-5 flex-wrap'>
                                <div className='text-red-500 text-2xl flex  items-center gap-2 py-3'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <div>
                                    4.7(Imdb)
                                </div>
                                <div>
                                    1hrs : 45minis
                                </div>
                            </div>
                            <p className='text-sm lg:text-xl pb-5'>{banner?.videoDescription.slice(0, 200)}</p>

                            <div className='pb-5'>
                                <h1 className='text-red-600 text-sm md:text-xl pb-1'>Starring:<span className='text-white'> Karen Gilchhrist, James Earl Jones</span></h1>
                                <h1 className='text-red-600  text-sm md:text-xl pb-1'>Genres:<span className='text-white'> Action</span></h1>
                                <h1 className='text-red-600  text-sm md:text-xl pb-1'>Tag:<span className='text-white'> Action, Adventure,Horror</span></h1>
                            </div>
                            <div className='pt-10 pb-3'>
                                <Link to={`/details/${banner?._id}`} className='flex items-center gap-5 bg-red-600 py-2 px-5 rounded w-48'>
                                    <BiRightArrow className='inline' />
                                    <p href="#" className=' font-semibold'>Watch Video</p>
                                </Link>
                            </div>
                        </div>

                        <div className=''></div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default HomeBanner;