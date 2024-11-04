import React, { useContext, useState } from 'react';
import { RiSoundModuleFill } from "react-icons/ri";
import Tab from './Tab';
import { CartContext, WishListContext } from './Root';


const Dashboard = () => {
    const { cartItem, setCartItem } = useContext(CartContext)
    const { wishItem, setWishItem } = useContext(WishListContext)
//    handle tab functionality
    const [tab, setTab] = useState(true)
    const handleTab = (status) => {
        setTab(status)

    }
//  handle sort functionality 
    const handleSort = () => {
        const sorted = [...cartItem].sort((a,b)=> b.price - a.price)
        setCartItem(sorted)

        // console.log(sorted)
        
    }

    // console.log(tab);

    return (
        <div>
            {/* dashboard banner */}
            <div className='w-[98%] mx-auto bg-[#9538E2]  relative'>
                <div className='w-[98%]  lg:w-[90%] mx-auto pb-14'>
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
            <div>
                {/* title */}
                <div className='flex md:flex-row flex-col justify-between items-center my-8'>
                    <h1 className='text-2xl font-bold text-[#0B0B0B]'>{tab ? 'Cart' : 'Wish List'}</h1>
                    {
                        tab && <div className='flex flex-col md:flex-row items-center gap-4'>
                            <p className='text-2xl font-bold text-[#0B0B0B]'>Total cost: ${cartItem.reduce((accumulator, item) => accumulator + item.price, 0)}</p>
                            <button
                            onClick={()=> handleSort()}
                             className='btn rounded-3xl flex items-center gap-2 text-[#9538E2] border border-solid border-[#9538E2] hover:text-white hover:bg-[#9538E2]'><span>Sort by Price</span><span><RiSoundModuleFill /></span></button>
                            <button className='btn rounded-3xl text-[#9538E2] border border-solid border-[#9538E2] hover:text-white hover:bg-[#9538E2]'>Purchase</button>
                        </div>
                    }
                </div>
                {/* List  */}
                <div className='space-y-6'>
                    {
                        tab ? cartItem.map((item) => <Tab key={item.product_id} product={item} tab={tab}></Tab>) : wishItem.map((item) => <Tab key={item.product_id} product={item} tab={tab}></Tab>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Dashboard;