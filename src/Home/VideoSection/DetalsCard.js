import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { BiRightArrow, BiShareAlt } from "react-icons/bi";
import { FaEye, FaHandPointRight, FaRegPlayCircle } from "react-icons/fa";
import DetailsCardMessage from './DetailsCardMessage';

const DetalsCard = () => {

    const [clickCount, setClickCount] = useState(0)
    const [clickViewer, setClickViewer] = useState(0)

    const [isOpen, setIsOpen] = useState(false);


    const params = useParams();


    const categoryUrl = `http://localhost:8000/singleVideo/${params.id}`;

    const { data: VideoDetails, isLoading, refetch } = useQuery({
        queryKey: ["singleVideo", params.id],
        queryFn: async () => {
            const res = await fetch(categoryUrl);
            const data = await res.json();
            return data;
        },
    });

    console.log(VideoDetails)

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






    return (
        <div className='w-full px-5 sm:px-20'>
            <div className='border-8 border-white rounded-3xl  overflow-hidden my-5 relative'>
                <ReactPlayer controls={true} url={VideoDetails?.videoLink} width='100%' height='600px' />


                {/* icon  */}
                <div className="absolute bottom-0 right-0 pt-5 px-5 flex gap-10 bg-gray-900 rounded-tl-2xl">

                    <div className='relative bg-white p-2 border-4 border-gray-400 rounded-full mb-2
                             '>
                        <FaEye className='text-black bg-white' />
                        <p className='absolute -top-4 -right-4 p-px px-2  rounded-full bg-black text-white'>{VideoDetails?.videoViewer?.length}</p>
                    </div>
                    <div onClick={() => handleLike({
                        id: VideoDetails?._id,
                        title: VideoDetails?.videoTitle
                    })} className='relative  bg-white p-2 border-4 border-gray-400 rounded-full mb-2
                                                    '>
                        <FaHandPointRight className='text-black cursor-pointer bg-white' />
                        <p className='absolute -top-4 -right-4 p-px px-2  rounded-full bg-black text-white'>{VideoDetails?.videoLike?.length}</p>

                    </div>
                </div>


            </div>

            <div className='text-black py-5 px-3 bg-white rounded-3xl'>
                <h1 className="text-2xl font-semibold pb-3">Title: {VideoDetails?.videoTitle}</h1>
                <p className='text-lg font-semibold'>Description :<span className='font-normal'> {VideoDetails?.videoDescription
                }</span></p>

                <DetailsCardMessage refetch={refetch} id={VideoDetails?._id} videoTitle={VideoDetails?.videoTitle} />
            </div>


            <div>

            </div>
        </div>
    );
};

export default DetalsCard;