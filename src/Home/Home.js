import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import VideosSection from './VideoSection/VideosSection';

const Home = () => {
    return (
        <div className='text-white'>
            <HomeBanner />
            <VideosSection />
        </div>
    );
};

export default Home;