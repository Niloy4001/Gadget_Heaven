import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({gadget}) => {
    // console.log(gadget);
    const {product_image,product_title,price,product_id} = gadget
    return (
        <div>
            <div className='p-5 rounded-2xl'>
                <div className='mb-5'><img src={product_image} className='w-full h-[300px] rounded-xl object-fill' alt="" /></div>
                <h1 className='font-semibold text-2xl text-[#09080F] mb-3'>{product_title} </h1>
                <p className='font-medium text-xl text-[#09080F99] mb-4'>Price : {price} $</p>
                <div><Link to={`/details/${product_id}`}><button className='btn text-[#9538E2] border border-solid border-[#9538E2] rounded-3xl'>View Details</button></Link></div>
            </div>
        </div>
    );
};

export default Card;