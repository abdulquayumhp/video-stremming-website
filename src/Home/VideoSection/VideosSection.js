import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import ReactPlayer from 'react-player';
import "./VideoSection.css"
import { BiRightArrow, BiShareAlt } from "react-icons/bi";
import { FaEye, FaHandPointRight, FaRegPlayCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';


const VideosSection = () => {



    const categoryUrl = `http://localhost:8000/allVideo`;

    const { data: allVideo, isLoading, refetch } = useQuery({
        queryKey: ["allVideo"],
        queryFn: async () => {
            const res = await fetch(categoryUrl);
            const data = await res.json();
            return data;
        },
    });



    const handleView = (e) => {
        console.log(e)
        fetch(`http://localhost:8000/VewerUpdate`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ e })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                refetch()

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }



    const handleLike = (e) => {


        fetch(`http://localhost:8000/likeUpdate`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                id: e.id,
                title: e.title

            })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                refetch()

            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    // console.log(allVideo)


    return (
        <div className="max-w-[1600px] mx-auto pt-10">
            <>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    navigation={true} modules={[Navigation]}
                    className="mySwiper"
                >
                    {
                        allVideo &&
                        allVideo.map((videos) => (
                            <div className="grid grid-cols-4">
                                <div className='relative '>
                                    <SwiperSlide>
                                        <div className="hovered">
                                            <div className='gradient image-div '>
                                                <img className=" p-5 w-[500px] h-[300px] sm:p-0  object-cover " src={videos?.thamnel} alt="" />
                                            </div>
                                            <div className='text-left absolute top-20 left-10 flex gap-20'>
                                                <div className='text-white '>
                                                    <h1 className='font-bold pb-1'>{videos?.videoTitle}</h1>
                                                    <p className='pb-5'>1hr: 50mins</p>
                                                    <Link to={`/details/${videos?._id}`} onClick={() => handleView(videos?._id)} href='3' className='flex items-center gap-5 bg-red-600 py-2 px-5 rounded'>
                                                        <BiRightArrow />
                                                        <p href="#" className=' font-semibold' >Watch Video</p>
                                                    </Link>
                                                </div>
                                                <div className='iconDiv '>
                                                    <div className='bg-white p-2 border-4 border-gray-400 rounded-full mb-2
                                                    '>
                                                        <BiShareAlt className='text-black cursor-pointer bg-white' />
                                                    </div>
                                                    <div className='relative bg-white p-2 border-4 border-gray-400 rounded-full mb-2
                                                    '>
                                                        <FaEye className='text-black cursor-pointer bg-white' />
                                                        <p className='absolute -top-4 -right-4 p-px px-2  rounded-full bg-black text-white'>{videos?.
                                                            videoViewer.length
                                                        }</p>
                                                    </div>
                                                    <div onClick={() => handleLike({
                                                        id: videos?._id,
                                                        title: videos?.videoTitle
                                                    })} className='relative  bg-white p-2 border-4 border-gray-400 rounded-full mb-2
                                                    '>
                                                        <FaHandPointRight className='text-black cursor-pointer bg-white' />
                                                        <p className='absolute -top-4 -right-4 p-px px-2  rounded-full bg-black text-white'>{videos?.
                                                            videoLike.length
                                                        }</p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            </div>

                        ))
                    }


                </Swiper>
            </>
        </div>
    );
};

export default VideosSection;