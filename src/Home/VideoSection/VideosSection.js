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


const VideosSection = () => {

    const [data, setData] = useState([])


    const [isOpen, setIsOpen] = useState(false);
    const [url, setUrl] = useState("")


    const [clickCount, setClickCount] = useState(0)
    const [clickViewer, setClickViewer] = useState(0)


    useEffect(() => {
        fetch("http://localhost:8000/allVideo")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const handleLike = (e) => {
        setClickCount(clickCount + 1)
    }

    const handleView = (e) => {
        setClickViewer(clickViewer + 1)


        fetch(`http://localhost:8000/likeUpdate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        })
            .then(response => response.json())
            .then(data => {

                console.log('Success:', data);
                input.reset()
                refetch()
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }




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
                        data.length &&
                        data.map((allTest) => (
                            <div className="grid grid-cols-4">
                                <div className='relative '>
                                    <SwiperSlide>
                                        <div className="hovered">
                                            <div className='gradient image-div '>
                                                <img className=" p-5 w-[500px] h-[300px] sm:p-0  object-cover " src={allTest?.thamnel} alt="" />
                                            </div>
                                            <div className='text-left absolute top-20 left-10 flex gap-20'>
                                                <div className='text-white '>
                                                    <h1 className='font-bold pb-1'>{allTest?.videoTitle}</h1>
                                                    <p className='pb-5'>1hr: 50mins</p>
                                                    <Link to={`/details/${allTest?._id}`} onClick={handleView} href='3' className='flex items-center gap-5 bg-red-600 py-2 px-5 rounded'>
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
                                                        <p className='absolute -top-4 -right-4 p-px px-2  rounded-full bg-black text-white'>{clickViewer}</p>
                                                    </div>
                                                    <div onClick={handleLike} className='relative  bg-white p-2 border-4 border-gray-400 rounded-full mb-2
                                                    '>
                                                        <FaHandPointRight className='text-black cursor-pointer bg-white' />
                                                        <p className='absolute -top-4 -right-4 p-px px-2  rounded-full bg-black text-white'>{clickCount}</p>

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