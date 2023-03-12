import React, { useEffect, useState } from 'react';

const Notificaton = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://job-task-vide-streming.vercel.app/notification")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    // console.log(data)


    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5 w-full mx-auto m-5  p-10'>
            {
                data && data.map(notification => <div className=' py-5 bg-white  w-full p-5 rounded-lg' key={notification._id}>

                    <div className='m-5' >
                        <h1>A Like Hit On Video</h1>
                        <p>{notification?.title}</p>
                        <p>{notification?.id}</p>
                    </div>

                </div>)
            }
        </div>
    );
};

export default Notificaton;