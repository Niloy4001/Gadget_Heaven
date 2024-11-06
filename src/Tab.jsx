import React, { useContext } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CartContext, WishListContext } from './Root';
import { toast } from 'react-toastify';

const Tab = ({ product, tab }) => {

    // toast
    const notifyForSuccess = () => toast.success("Successfully Added to Cart", { position: 'top-center', autoClose: 2000 });
    const notifyForDelete = () => toast.warning("Item Deleted", { position: 'top-center', autoClose: 2000 });


    // useContext hook
    const { cartItem, setCartItem } = useContext(CartContext)
    const { wishItem, setWishItem } = useContext(WishListContext)
    const { product_title, product_image, price, description } = product || {}


    // handle Add to cart of wishList
    const handleAddToCart = (product) => {
        const isExist = cartItem.find((item) => item.product_id == product.product_id)
        if (isExist) {
            return
        }
        else {
            notifyForSuccess()
            setCartItem([...cartItem, product])
            const filtered = wishItem.filter((item) => item.product_id != product.product_id)
            setWishItem(filtered)

        }


    }
    // handle delete button
    const handleDeleteOfCartList = (product) => {
        notifyForDelete()
        const filtered = cartItem.filter((item) => item.product_id !== product.product_id)
        setCartItem(filtered)

    }
    const handleDeleteOfWishList = (product) => {
        notifyForDelete()
        const filtered = wishItem.filter((item) => item.product_id !== product.product_id)
        setWishItem(filtered)

    }



    return (
        <div className='p-5 lg:p-[32px] flex flex-col md:flex-row items-center gap-6 rounded-2xl'>
            <div>
                <img src={product_image} className='w-[200px] h-[170px] rounded-xl' alt="" />
            </div>
            <div className='flex-1'>
                <div className='flex justify-between'>
                    <h1 className='font-semibold lg:text-2xl text-[#09080F] mb-4'>{product_title} </h1>
                    <button
                        onClick={() => { tab ? handleDeleteOfCartList(product) : handleDeleteOfWishList(product) }}
                        className='text-3xl text-red-600 '><IoIosCloseCircleOutline /></button>
                </div>
                <p className='font-normal lg:text-lg text-[#09080F99] mb-4'>{description} </p>
                <p className='font-semibold lg:text-xl text-[#09080FCC] mb-4'>Price: $ {price}</p>
                {
                    !tab && <button
                        onClick={() => handleAddToCart(product)}
                        className='btn bg-[#9538E2] text-white'>Add to Card</button>
                }
            </div>
            {/* <ToastContainer /> */}
        </div>
    );
};

export default Tab;