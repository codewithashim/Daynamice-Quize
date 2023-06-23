import MainLayouts from '@/src/Layouts/MainLayouts';
import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import QuizeFrom from '../QuizeFrom/QuizeFrom';

const Home = () => {
    return (
        <section className='container'>
            <MainLayouts>
                <QuizeFrom />
            </MainLayouts>
        </section>
    );
};

export default Home;