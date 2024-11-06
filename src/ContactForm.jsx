import React from 'react';
import { FaRegEnvelope } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";

const ContactForm = () => {
    return (
        <div>
            {/* <label className="input input-bordered flex items-center gap-2">
                Name
                <input type="text" className="grow" placeholder="" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                Email
                <input type="text" className="grow" placeholder="" />
            </label>
            <textarea className="textarea textarea-bordered w-full" placeholder="Bio"></textarea> */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16 w-[90%] mx-auto'>
                <div className='col-span-1 lg:col-span-1'>
                    <h1 className='font-bold text-2xl lg:text-[40px] text-[#0B0B0B] mb-6'>Have a Question?</h1>
                    <p className='font-normal text-base text-[#0B0B0B]  mb-3'>We're here to help! Fill out the form or reach us via email or phone. Our Customer Care Team is available to help you get the best experience out of K18 Hair whether you have an issue about your order or looking for helpful hair tips.</p>
                    <p className='font-normal text-base text-[#0B0B0B]  mb-5'>Everyone gets a personalized response, so please allow 24 hours during business hours for a reply. Our business hours are sunday to thursday from 9am to 5pm.</p>
                    <p className='font-medium text-base text-[#0B0B0B]  mb-2 flex items-center gap-3'><span><FaRegEnvelope /></span><span>gadgetheaven40@gmail.com</span></p>
                    <p className='font-medium text-base text-[#0B0B0B]  mb-2 flex items-center gap-3'><span><LuPhone /></span><span>+011535131458</span></p>
                </div>
                <div className='col-span-1 lg:col-span-1 space-y-4'>
                    <div className='grid grid-cols-2 gap-4'>
                        <div><input type="text" className="input w-full col-span-1 rounded-3xl border border-solid border-[#9538e2c6]" placeholder='First Name' required /></div>
                        <div><input type="text" className="input w-full col-span-1 rounded-3xl border border-solid border-[#9538e2c6]" placeholder='Last Name' required /></div>
                    </div>
                    <input type="email" className="input w-full rounded-3xl border border-solid border-[#9538e2c6]" placeholder='Email' required />
                    <input type="number" className="input w-full rounded-3xl border border-solid border-[#9538e2c6]" placeholder='Phone Number (optional)' />
                    <input type="text" className="input w-full rounded-3xl border border-solid border-[#9538e2c6]" placeholder='Order Number (optional)' />
                    <textarea name="" className='textarea w-full h-[150px] rounded-2xl border border-solid border-[#9538e2c6]' placeholder='Message' required id=""></textarea>
                    <button className='btn w-full rounded-3xl text-white bg-[#9538e2c6] hover:bg-transparent hover:text-[#9538e2c6]'>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;