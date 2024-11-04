import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { ImMenu3 } from "react-icons/im";
import { CartContext } from './Root';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const handleMenu = ()=>{
        setOpen(!open)
    }


    const {cartItem, setCartItem} = useContext(CartContext)
    console.log(cartItem.length);
    
    return (
        <div className="navbar flex justify-between py-8  w-[90%] mx-auto gap-4">
            <div className="flex">
                <p className=" text-xl font-bold text-white">Gadget Heaven</p>
            </div>
            <div className={`lg:flex flex-col lg:flex-row items-center absolute lg:static gap-3 lg:gap-12  ${open ? 'top-20 left-28' : 'hidden'}`}>
                <NavLink><p className='text-black lg:text-white font-bold text-base'>Home</p></NavLink>
                <NavLink><p className='text-black lg:text-white font-bold text-base'>Statistics</p></NavLink>
                <NavLink><p className='text-black lg:text-white font-bold text-base'>Dashboard</p></NavLink>
            </div>
            <div className='text-2xl lg:hidden' onClick={() => handleMenu()}>
                <ImMenu3 />
            </div>
            <div className="flex items-center gap-2">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle bg-white">
                        <div className="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                        <div className="card-body">
                            <span className="text-lg font-bold">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-11 rounded-full ">
                            <div className='flex h-full justify-center items-center bg-white'>
                                <FaRegHeart />
                            </div>
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;