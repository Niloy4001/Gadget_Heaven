import React from 'react';
import banner from './assets/banner.jpg'

const Home = () => {
    return (
        <div>
            <div className='w-[98%] mx-auto bg-[#9538E2] rounded-b-3xl relative'>
                <div className='w-[98%]  lg:w-[90%] mx-auto pb-72'>
                    <h1 className="leading-[34px] lg:leading-[60px] font-bold text-3xl lg:text-[56px] text-white text-center mb-6">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="font-normal text-base text-white text-center mb-6">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <div className='text-center pt-9'>
                        <button className='btn bg-white text-[#9538E2]'>Shop Now</button>
                    </div>
                </div>
                {/* absolute image */}
                <div className='w-[75%] p-4 lg:p-6 rounded-3xl absolute left-0 right-0 m-auto top-[440px] lg:top-[340px] border-[3px] border-solid border-[#FFFFFF] bg-white/[0.3]'>
                    <div>
                        <img src={banner} className='w-full h-[300px]  md:h-[400px] lg:h-[500px] rounded-3xl ' alt="" />
                    </div>
                </div>
            </div>
            {/* Parent of Home page children */}
            <div className='pt-[160px] md:pt-[300px] lg:pt-[400px] w-[98%] mx-auto'>
                <h1 className='font-bold text-2xl lg:text-[40px] text-[#0B0B0B] text-center'>Explore Cutting-Edge Gadgets</h1>
                {/* Card section */}
                <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6'>
                    <div className='col-span-1 md:col-span-1 lg:col-span-1 '>

                    </div>
                    <div className='col-span-1 md:col-span-3 lg:col-span-5'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;