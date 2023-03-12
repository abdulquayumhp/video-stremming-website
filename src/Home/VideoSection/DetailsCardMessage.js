import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const DetailsCardMessage = ({ id, videoTitle }) => {

    const today = new Date();

    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    const PresentDayDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;



    const categoryUrl = `http://localhost:8000/message/${id}`;

    const { data: Messages, isLoading, refetch } = useQuery({
        queryKey: ["message", id],
        queryFn: async () => {
            const res = await fetch(categoryUrl);
            const data = await res.json();
            return data;
        },
    });

    const handleDetailsMessage = (e) => {
        e.preventDefault()
        const input = e.target;
        const name = input.message.value;
        const message = {
            message: name,
            PresentDayDate,
            id,
            videoTitle

        }
        fetch(`http://localhost:8000/message`, {
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
    };

    // console.log(Messages)
    return (
        <div className='text-center'>
            <div className='text-center py-5'>
                <h1 className='text-bold text-2xl pb-5'>Leave a Comment</h1>
                <form onSubmit={handleDetailsMessage}>
                    <label htmlFor="text">
                        <input type="text" placeholder='Enter Your Message' name="message" className='outline-none border-2 rounded-2xl py-2 px-5 w-full' />
                    </label>
                    <input type="submit" value="Submit" className='bg-black w-full rounded-2xl text-white py-1 my-3 cursor-pointer' />
                </form>
            </div>
            <h1 className='pb-3'>All Message</h1>
            <div className='border py-5 rounded-sm grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 '>
                {
                    Messages && Messages?.map(message => <div className='border m-3 border-gray-200 rounded-md'>
                        <h1>{message?.message}</h1>
                        <p>{message?.PresentDayDate}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default DetailsCardMessage;