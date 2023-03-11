import React, { useEffect, useState } from 'react';
import { BiBell } from "react-icons/bi";

const Navbar = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/notification")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    console.log(data.length)

    return (
        <div className='bg-white py-5 '>
            <div className='flex items-center'>
                <h1>navbar</h1>
                <div className='relative  bg-white p-1 border-2 border-gray-400 rounded-full mb-2
                                                    '>
                    <BiBell className='text-black cursor-pointer bg-white text-xl' />
                    <p className='absolute -top-4 -right-4 p-px px-2  rounded-full bg-black text-white'>{data?.length}</p>

                </div>
            </div>

        </div>
    );
};

export default Navbar;