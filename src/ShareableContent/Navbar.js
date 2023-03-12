import React, { useEffect, useState } from 'react';
import { BiBell } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://job-task-vide-streming.vercel.app/notification")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    // console.log(data.length)

    return (
        <div className='bg-blue-900 py-5 mx-auto w-full '>
            <div className='flex items-center justify-between text-white md:px-36 px-5'>
                <Link to={`/`} className='text-sm sm:text-2xl font-semibold'>video streaming</Link>
                <div className='md:flex hidden items-center gap-5'>
                    <Link>Home</Link>
                    <Link>service</Link>
                    <Link>About</Link>
                    <Link>Contact</Link>
                </div>

                <Link to={`/notification`} className='relative  bg-white p-1 border-2 border-gray-400 rounded-full mb-2'>
                    <BiBell className='text-black cursor-pointer bg-white text-xl' />
                    <p className='absolute -top-4 -right-4 p-px px-2  rounded-full bg-black text-white'>{data?.length}</p>

                </Link>
            </div>

        </div>
    );
};

export default Navbar;