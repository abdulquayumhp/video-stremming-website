import React, { useState } from 'react'
import { FaPlus, FaRegPlayCircle } from 'react-icons/fa';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton'
import ReactPlayer from 'react-player'

const Banner = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className='md:flex gap-5 h-[600px] justify-between items-center text-2xl font-bold '>
            <div className='w-[45%] p-3'>
                <div className='max-w-[470px]'>
                    <h1 className=''>
                        Welcome To <br />
                        <span> NINE WAY TECHNOLOGIES</span>
                    </h1>

                    <p className='pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maiores, quaerat, perspiciatis iusto nisi corporis earum quasi minus molestiae, doloribus nam. Esse quibusdam illo voluptas officia illum labore deleniti cupiditate!</p>

                    <div className='space-x-3'>
                        <PrimaryButton >Contact Us</PrimaryButton>
                        <PrimaryButton >Our Courses </PrimaryButton>
                    </div>
                    <p>Build Dynamic, Innovative and Edgy career</p>
                </div>
            </div>

            <div className='w-[55%]  relative'>
                <div className='absolute top-[48%] -left-8 '>
                    <FaPlus className=' cursor-pointer text-primary' />
                </div>
                <label htmlFor="banner-video-modal" className='cursor-pointer' onClick={() => setIsOpen(false)}>
                    <div className='absolute top-[46%] left-[46%]   bg-white p-3 rounded-full cursor-pointer '>
                        <FaRegPlayCircle className='text-primary' />
                    </div>
                    <div className='absolute  top-[46%] left-[46%] hover:animate-ping bg-white p-3 rounded-full cursor-pointer '>
                        <FaRegPlayCircle className='text-primary' />
                    </div>
                    <img className='rounded-2xl max-h-[400px] w-full bg-[#b78e45] p-2 ' src="https://i.ibb.co/JdrV0mx/photo-1579621970795-87facc2f976d-ixlib-rb-4-0.jpg" alt="" />

                </label>
                <div>
                    <input type="checkbox" id="banner-video-modal" className="modal-toggle" />
                    <div className="modal  ">
                        <div className=" w-[750px] h-[423px] relative">
                            <label htmlFor="banner-video-modal" className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => setIsOpen(false)}>✕</label>
                            <ReactPlayer controls={true} url='https://youtu.be/LJ-ILrtODzs' playing={isOpen} width='100%' height='100%' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner