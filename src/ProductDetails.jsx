import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";

const ProductDetails = () => {
    const allData = useLoaderData();
    const {id} = useParams();
    console.log(id, allData);
    
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
                <div className='w-[75%] p-4 lg:p-6 rounded-3xl absolute left-0 right-0 m-auto top-[440px] lg:top-[340px] border-[3px] border-solid border-[#FFFFFF] bg-white'>
                    <div>
                        {/* <img src="" className='w-full h-[300px]  md:h-[400px] lg:h-[500px] rounded-3xl ' alt="" /> */}
                        {/* product details */}
                        <div className='grid grid-cols-1 lg:grid-cols-3'>
                            {/* left image */}
                            <div className='col-span-1 lg:col-span-1'>
                                <img src="" alt="" />
                            </div>
                            <div className='col-span-1 lg:col-span-2'>
                                <h1 className='font-semibold lg:text-[28px] text-[#09080F] mb-3'>Samsung Galaxy S23 Ultra</h1>
                                <p className='font-semibold lg:text-xl text-[#09080FCC] mb-4'>Price: $ 999.99</p>
                                <button className='btn btn-sm text-[#309C08] border border-solid border-[#309C08] bg-[#309C081A] mb-4 rounded-2xl'>In Stock</button>
                                <p className='font-normal lg:text-lg text-[#09080F99] mb-4'>Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display.</p>
                                <p className='font-bold lg:text-lg text-[#09080F] mb-3'>Specification:</p>
                                <ul className='font-normal lg:text-lg text-[#09080F99] mb-4'>
                                    <p>Intel i7 11th Gen</p>
                                    <p>Intel i7 11th Gen</p>
                                    <p>Intel i7 11th Gen</p>
                                </ul>
                                <p className='font-bold lg:text-lg text-[#09080F] mb-3'>Rating  </p>
                                <p>star</p>
                                <div className='mt-5'>
                                    <button><span>Add To Card</span><span></span></button>
                                    <button><FaRegHeart /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;