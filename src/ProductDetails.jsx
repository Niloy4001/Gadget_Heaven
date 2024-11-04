import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline, IoEllipseSharp } from "react-icons/io5";
import { Rating, Star } from '@smastrom/react-rating'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import '@smastrom/react-rating/style.css'
import { CartContext, WishListContext } from './Root';
const myStyles = {
    itemShapes: Star,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#ffffff'
  }

const ProductDetails = () => {

    // toast
    const notifyForSuccess = () => toast.success("Successfully Added to Cart");
    const notifyForRejection = () => toast.error("Already Exist");
    const notifyForSuccessWhishList = () => toast.success("Successfully Added to Wish List");




    const allData = useLoaderData();
    const { id } = useParams();
    const [singleData, setSingleData] = useState({})

    const { product_id, product_title, product_image, category, price, description, Specification, availability, rating } = singleData

    // context api
    const {cartItem, setCartItem} = useContext(CartContext)
    const {wishItem, setWishItem} = useContext(WishListContext)
    
    const handleAddToCart = (gadget) =>{
        const isExist = cartItem.find((item)=>item.product_id == gadget.product_id)
        if (isExist) {
            return notifyForRejection()
        }
        else{
            setCartItem([...cartItem,gadget])
            notifyForSuccess()
        }
        
        
        
    }
    
    const handleWishList = (gadget) =>{
        const isExist = wishItem.find((item)=>item.product_id == gadget.product_id)
        if (isExist) {
            return notifyForRejection()
        }
        else{
            setWishItem([...wishItem,gadget])
            notifyForSuccessWhishList()
        }
               
    }

    

    useEffect(() => {
        const filteredItem = allData.find((item) => item.product_id == id)
        setSingleData(filteredItem)

    }, [])

    


    return (
        <div>
            <div className='w-[98%] mx-auto bg-[#9538E2] rounded-b-3xl relative'>
                <div className='w-[98%]  lg:w-[90%] mx-auto pb-72 pt-8'>
                    <h1 className="leading-[34px] lg:leading-[60px] font-bold text-2xl lg:text-[32px] text-white text-center mb-6">Product Details</h1>
                    <p className="font-normal text-base text-white text-center mb-6">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                </div>
                {/* absolute image */}
                <div className='w-[75%] p-4 lg:p-6 rounded-3xl absolute left-0 right-0 m-auto  top-[200px] lg:top-[200px] border-[3px] border-solid border-[#FFFFFF] bg-white'>
                    <div>
                        {/* <img src="" className='w-full h-[300px]  md:h-[400px] lg:h-[500px] rounded-3xl ' alt="" /> */}
                        {/* product details */}
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                            {/* left image */}
                            <div className='col-span-1 lg:col-span-1 flex justify-center items-center'>
                                <img src={product_image} className='w-full' alt={product_title} />
                            </div>
                            <div className='col-span-1 lg:col-span-2'>
                                <h1 className='font-semibold lg:text-[28px] text-[#09080F] mb-3'>{product_title} </h1>
                                <p className='font-semibold lg:text-xl text-[#09080FCC] mb-4'>Price: $ {price}</p>
                                <button className='btn btn-sm text-[#309C08] border border-solid border-[#309C08] bg-[#309C081A] mb-4 rounded-2xl'>{availability ? 'In Stock' : 'Out of Stock'} </button>
                                <p className='font-normal lg:text-lg text-[#09080F99] mb-4'>{description} </p>
                                <p className='font-bold lg:text-lg text-[#09080F] mb-3'>Specification:</p>
                                <ul className='font-normal lg:text-lg text-[#09080F99] mb-4 list-decimal list-inside'>
                                    {
                                        Specification?.map((item,index)=> <li key={index}>{item}</li>)
                                    }
                                </ul>
                                <p className='font-bold lg:text-lg text-[#09080F] mb-3'>Rating: </p>
                                <div className='flex items-center gap-4'>
                                    <span><Rating style={{ maxWidth: 150 }} readOnly value={rating} itemStyles={myStyles}/></span>
                                    <button className='btn btn-xs rounded-full'><span>{rating}</span></button>
                                </div>
                                {/* <p>star</p> */}
                                <div className='mt-5 flex items-center gap-5'>
                                    <button
                                    onClick={()=>handleAddToCart(singleData)} 
                                    className='btn flex items-center gap-2 bg-[#9538E2] text-white rounded-3xl hover:bg-transparent hover:text-black'><span>Add To Card</span><span><IoCartOutline /></span></button>
                                    <button
                                    onClick={()=>handleWishList(singleData)}
                                    ><FaRegHeart /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[565px] lg:h-[400px] bg-[#ECECEC]'>

            </div>
            <ToastContainer />
        </div>
    );
};

export default ProductDetails;