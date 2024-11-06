import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Accordion from './Accordion';
import { Helmet } from 'react-helmet';
import ContactForm from './ContactForm';

const Support = () => {
    const [tab, setTab] = useState(true)
    const handleTab = (status) => {
        setTab(status)

    }
    return (
        <div>
            {/* helmet */}
            <Helmet>
                <title>Support | Gadget Heaven</title>
            </Helmet>
            {/* Support banner */}
            <div className='w-[98%] mx-auto bg-[#9538E2]  relative'>
                <div className='w-[98%]  lg:w-[90%] mx-auto pb-14 pt-8'>
                    <h1 className="leading-[34px] lg:leading-[60px] font-bold text-2xl lg:text-[32px] text-white text-center mb-6">Frequently Ask Question and Contact Us</h1>
                    <p className="font-normal text-base text-white text-center mb-6">Find answers to common questions about shopping on Gadget Heaven and Need help? Reach out to us for support or inquiries.</p>
                    <div className='pt-9 flex justify-center items-center gap-5'>
                        <button
                            onClick={() => handleTab(true)}
                            className={` btn rounded-3xl hover:bg-white hover:text-[#9538E2] ${tab ? 'bg-white text-[#9538E2]' : 'bg-transparent text-white'}`}>Frequently Ask

                            Question </button>
                        <button
                            onClick={() => handleTab(false)}
                            className={`btn rounded-3xl hover:bg-white hover:text-[#9538E2]  ${!tab ? 'bg-white text-[#9538E2]' : 'bg-transparent text-white'}`}>Contact Us</button>
                    </div>
                </div>
            </div>
            {/* tabs */}
            <div className='w-[98%] mx-auto py-9'>
            {/* <Tabs className={'py-9'}>
                    <TabList className={'flex justify-center gap-6 md:gap-10 font-bold '}>
                        <Tab><p>Frequently Ask</p> <p>Question</p></Tab>
                        <Tab>Contact us</Tab>
                    </TabList>
                
                    <TabPanel className={'w-full md:w-2/3 mx-auto py-6 '}>
                        <Accordion></Accordion>
                    </TabPanel>
                    
                    <TabPanel className={'w-full py-6'}>
                        <ContactForm></ContactForm>
                    </TabPanel>
            </Tabs> */}
            {
                tab? <Accordion></Accordion> : <ContactForm></ContactForm>
            }
            </div>
        </div>
    );
};

export default Support;