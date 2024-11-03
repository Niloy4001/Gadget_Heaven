import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <>
        <div className='w-[98%] mx-auto rounded-t-3xl bg-[#9538E2]'>
            <Navbar></Navbar>
        </div>
        <div className='w-full'>
            <Outlet></Outlet>
        </div>
            <Footer></Footer>
        </>
    );
};

export default Root;