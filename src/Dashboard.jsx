import React, { useContext, useEffect, useState } from 'react';
import { RiSoundModuleFill } from "react-icons/ri";
import Tab from './Tab';
import { CartContext, WishListContext } from './Root';
import modalImage from './assets/Group.png'
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {

    //  useContext hook
    const { cartItem, setCartItem } = useContext(CartContext)
    const { wishItem, setWishItem } = useContext(WishListContext)
   
    // total amount
    const [subTotal, setSubTotal] = useState(0)    
    useEffect(()=>{
        if (cartItem.length>0) {
            const total = cartItem.reduce((accumulator, item) => accumulator + item.price, 0)
            setSubTotal(total)      
        }
    },[cartItem])
   
//    const total = cartItem?.reduce((accumulator, item) => accumulator + item.price, 0)
   
   
   //    handle tab functionality
    const [tab, setTab] = useState(true)
    const handleTab = (status) => {
        setTab(status)

    }
    //  handle sort functionality 
    const handleSort = () => {
        const sorted = [...cartItem].sort((a, b) => b.price - a.price)
        setCartItem(sorted)

        // console.log(sorted)

    }

    // handle purchase button
    const handlePurchase = () =>{
        document.getElementById('my_modal_1').showModal()
        setCartItem([])
        // console.log(cartItem);
        

    }
    console.log(cartItem);
    

    // handle Modal close button
    const navigate = useNavigate()

    const handleModalClose = () => {
        // console.log('purchase');
        navigate('/')
        setSubTotal(0)

    }

    // console.log(tab);

    return (
        <div>
            {/* dashboard banner */}
            <div className='w-[98%] mx-auto bg-[#9538E2]  relative'>
                <div className='w-[98%]  lg:w-[90%] mx-auto pb-14 pt-8'>
                    <h1 className="leading-[34px] lg:leading-[60px] font-bold text-3xl lg:text-[56px] text-white text-center mb-6">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="font-normal text-base text-white text-center mb-6">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <div className='pt-9 flex justify-center items-center gap-5'>
                        <button
                            onClick={() => handleTab(true)}
                            className={`btn rounded-3xl hover:bg-white hover:text-[#9538E2] ${tab ? 'bg-white text-[#9538E2]' : 'bg-transparent text-white'}`}>Cart </button>
                        <button
                            onClick={() => handleTab(false)}
                            className={`btn rounded-3xl hover:bg-white hover:text-[#9538E2]  ${!tab ? 'bg-white text-[#9538E2]' : 'bg-transparent text-white'}`}>Wishlist</button>
                    </div>
                </div>
            </div>
            {/* dashboard List */}
            <div className='w-[98%] mx-auto'>
                <div className='w-[98%]  lg:w-[90%] mx-auto'>
                    {/* title */}
                    <div className='flex md:flex-row flex-col justify-between items-center my-8'>
                        <h1 className='text-2xl font-bold text-[#0B0B0B]'>{tab ? 'Cart' : 'Wish List'}</h1>
                        {
                            tab && <div className='flex flex-col md:flex-row items-center gap-4'>
                                <p className='text-2xl font-bold text-[#0B0B0B]'>Total cost: ${cartItem?.reduce((accumulator, item) => accumulator + item.price, 0)}</p>
                                {/* <p className='text-2xl font-bold text-[#0B0B0B]'>Total cost: {subTotal}</p> */}
                                <button
                                    disabled={cartItem.length === 0 ? true: false}
                                    onClick={() => handleSort()}
                                    className='btn rounded-3xl flex items-center gap-2 text-[#9538E2] border border-solid border-[#9538E2] hover:text-white hover:bg-[#9538E2]'><span>Sort by Price</span><span><RiSoundModuleFill /></span></button>
                                <button
                                    disabled={cartItem.length === 0 ? true: false}
                                    onClick={() => handlePurchase()}
                                    className='btn rounded-3xl text-[#9538E2] border border-solid border-[#9538E2] hover:text-white hover:bg-[#9538E2]'>Purchase</button>
                            </div>
                        }
                    </div>
                    {/* List  */}
                    <div className='space-y-6'>
                        {
                            tab ? cartItem.map((item) => <Tab key={item.product_id} product={item} tab={tab}></Tab>) : wishItem.map((item) => <Tab key={item.product_id} product={item} tab={tab}></Tab>)
                        }
                    </div>
                    {/* Modal */}
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    {/* <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button> */}
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <div className='flex justify-center mb-6'><img src={modalImage} alt="" /> </div>
                            <h3 className="font-bold text-2xl text-[#09080F] text-center mb-6 ">Payment Successfully</h3>
                            <div className='border-b border-solid border-[#09080F1A] my-3'></div>
                            <p className="mb-4 font-medium text-base text-[#09080F99] text-center">Thanks for purchasing.</p>
                            {/* <p className=" font-medium text-base text-[#09080F99] text-center">Total: {`${cartItem?.reduce((accumulator, item) => accumulator + item.price, 0)}`}</p> */}
                            <p className=" font-medium text-base text-[#09080F99] text-center">Total: {subTotal }</p>
                            <div className="modal-action">
                                <form method="dialog" className='w-full'>
                                    {/* if there is a button in form, it will close the modal */}
                                    <button 
                                        onClick={()=> handleModalClose()}
                                        className="btn w-full rounded-3xl font-medium text-base">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;