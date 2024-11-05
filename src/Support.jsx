import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Accordion from './Accordion';

const Support = () => {
    return (
        <div>
            {/* Support banner */}
            <div className='w-[98%] mx-auto bg-[#9538E2]  relative'>
                <div className='w-[98%]  lg:w-[90%] mx-auto pb-14 pt-8'>
                    <h1 className="leading-[34px] lg:leading-[60px] font-bold text-2xl lg:text-[32px] text-white text-center mb-6">Frequently Ask Question and Contact Us</h1>
                    <p className="font-normal text-base text-white text-center mb-6">Find answers to common questions about shopping on Gadget Heaven and Need help? Reach out to us for support or inquiries.</p>

                </div>
            </div>
            {/* tabs */}
            <div className='w-[98%] mx-auto'>
                <Tabs className={'py-9'}>
                    <TabList className={'flex justify-center gap-6 md:gap-10 font-bold '}>
                        <Tab><p>Frequently Ask</p> <p>Question</p></Tab>
                        <Tab>Contact us</Tab>
                    </TabList>
                    {/* panel 1 */}
                    <TabPanel className={'w-full md:w-2/3 mx-auto py-6 '}>
                        <Accordion></Accordion>
                    </TabPanel>
                    {/* panel 2 */}
                    <TabPanel className={'w-full md:w-1/2 mx-auto py-6'}>
                        <div className='space-y-4'>
                            <label className="input input-bordered flex items-center gap-2">
                                Name
                                <input type="text" className="grow" placeholder="" />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                Email
                                <input type="text" className="grow" placeholder="" />
                            </label>
                            <textarea className="textarea textarea-bordered w-full" placeholder="Bio"></textarea>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Support;