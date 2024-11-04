import React, { createContext, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';


export const CartContext = createContext()
export const WishListContext = createContext()

const Root = () => {
    const [cartItem, setCartItem] = useState([])
    const [wishItem, setWishItem] = useState([])
    return (
        <>
            <CartContext.Provider value={{cartItem, setCartItem}}>
                <WishListContext.Provider value={{wishItem, setWishItem}}>
                <div className='w-[98%] mx-auto rounded-t-3xl bg-[#9538E2]'>
                    <Navbar></Navbar>
                </div>
                <div className='w-full'>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
                </WishListContext.Provider>
            </CartContext.Provider>
        </>
    );
};

export default Root;