import React from 'react';

const Footer = () => {
    return (
        <footer className=" mt-14 md:mt-28">
            <div>
                <h1 className='font-bold text-[32px] text-[#09080F] text-center'>Gadget Heaven</h1>
                <p className='font-medium mt-3 text-[16px] text-[#09080F99] text-center mb-10'>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className='flex flex-col gap-5 lg:flex-row justify-between items-center w-full lg:w-1/2 mx-auto'>
                <div className='text-center'>
                    <h6 className="font-bold text-lg text-[#09080F] mb-4">Services</h6>
                    <p className="font-normal text-base text-[#09080F99] mb-2">Product Support</p>
                    <p className="font-normal text-base text-[#09080F99] mb-2">Order Tracking</p>
                    <p className="font-normal text-base text-[#09080F99] mb-2">Shipping & Delivery</p>
                    <p className="font-normal text-base text-[#09080F99] mb-2">Returns</p>
                </div>
                <div className='text-center'>
                    <h6 className="font-bold text-lg text-[#09080F] mb-4">Company</h6>
                    <p className="font-normal text-base text-[#09080F99] mb-2">About Us</p>
                    <p className="font-normal text-base text-[#09080F99] mb-2">Careers</p>
                    <p className="font-normal text-base text-[#09080F99] mb-2">Contact</p>
                </div>
                <div className='text-center'>
                    <h6 className="font-bold text-lg text-[#09080F] mb-4">Legal</h6>
                    <p className="font-normal text-base text-[#09080F99] mb-2">Terms of Service</p>
                    <p className="font-normal text-base text-[#09080F99] mb-2">Privacy Policy</p>
                    <p className="font-normal text-base text-[#09080F99] mb-2">Cookie Policy</p>
                </div>
               
            </div>
        </footer>
    );
};

export default Footer;