import React from 'react';
import { Helmet } from 'react-helmet';

const ErrorPage = () => {

    return (
        <div className='flex justify-center items-center'>
            <Helmet>
                <title>Error | Gadget Heaven</title>
            </Helmet>
            <h1 className='text-4xl font-bold text-[#09080F] mt-36'>No page found</h1>
        </div>
    );
};

export default ErrorPage;