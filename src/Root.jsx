import React, { createContext, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


export const CartContext = createContext()
export const WishListContext = createContext()

const Root = () => {
    const [cartItem, setCartItem] = useState([])
    const [wishItem, setWishItem] = useState([])
    return (
        <>
            <CartContext.Provider value={{ cartItem, setCartItem }}>
                <WishListContext.Provider value={{ wishItem, setWishItem }}>
                <ToastContainer />
                    <div className='bg-[#F7F7F7] '>
                        <Navbar></Navbar>
                        {/* <div className='w-[98%] mx-auto rounded-t-3xl bg-[#9538E2]'>
                    
                </div> */}
                        <div className='w-full min-h-[calc(100vh-432px)]'>
                            <Outlet></Outlet>
                        </div>
                    </div>
                    <Footer></Footer>
                </WishListContext.Provider>
            </CartContext.Provider>
        </>
    );
};

export default Root;