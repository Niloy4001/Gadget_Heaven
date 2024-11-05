import React from 'react';
import { Helmet } from 'react-helmet';

const ErrorPage = () => {

    return (
        <div>
            <Helmet>
                <title>Error | Gadget Heaven</title>
            </Helmet>
            <h1 className='text-4xl font-bold text-[#09080F]'>No page found</h1>
        </div>
    );
};

export default ErrorPage;