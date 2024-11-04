import React, { useContext } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CartContext } from './Root';
// import { ToastContainer, toast } from 'react-toastify';

const Tab = ({ product, tab }) => {
    
    // toast
    // const notifyForSuccess = () => toast.success("Successfully Added to Cart");
    // const notifyForRejection = () => toast.error("Already Exist");



    const {cartItem, setCartItem} = useContext(CartContext)
    const { product_title, product_image, price, description } = product || {}

    const handleAddToCart = (product) => {
        const isExist = cartItem.find((item) => item.product_id == product.product_id)
        if (isExist) {
            // notifyForRejection()
            return 
        }
        else {
            // notifyForSuccess()
            setCartItem([...cartItem, product])
            
        }



    }
    return (
        <div className='p-5 lg:p-[32px] flex flex-col md:flex-row items-center gap-6 rounded-2xl'>
            <div>
                <img src={product_image} className='w-[200px] h-[170px] rounded-xl' alt="" />
            </div>
            <div className='flex-1'>
                <div className='flex justify-between'>
                    <h1 className='font-semibold lg:text-2xl text-[#09080F] mb-4'>{product_title} </h1>
                    <p className='text-3xl text-red-600'><IoIosCloseCircleOutline /></p>
                </div>
                <p className='font-normal lg:text-lg text-[#09080F99] mb-4'>{description} </p>
                <p className='font-semibold lg:text-xl text-[#09080FCC] mb-4'>Price: $ {price}</p>
                {
                    !tab && <button
                        onClick={() =>handleAddToCart(product)}
                        className='btn bg-[#9538E2] text-white'>Add to Card</button>
                }
            </div>
            {/* <ToastContainer /> */}
        </div>
    );
};

export default Tab;