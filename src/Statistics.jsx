import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Scatter, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const allData = useLoaderData()
    console.log(allData);

    const data = [
        {
            name: 'Page A',
            uv: 590,
            pv: 800,
            amt: 1400,
            cnt: 490,
        },
        {
            name: 'Page B',
            uv: 868,
            pv: 967,
            amt: 1506,
            cnt: 590,
        },
        {
            name: 'Page C',
            uv: 1397,
            pv: 1098,
            amt: 989,
            cnt: 350,
        },
        {
            name: 'Page D',
            uv: 1480,
            pv: 1200,
            amt: 1228,
            cnt: 480,
        },
        {
            name: 'Page E',
            uv: 1520,
            pv: 1108,
            amt: 1100,
            cnt: 460,
        },
        {
            name: 'Page F',
            uv: 1400,
            pv: 680,
            amt: 1700,
            cnt: 380,
        },
    ];
    return (
        <div className=''>
            {/* helmet */}
            <Helmet>
                <title>Statistics | Gadget Heaven</title>
            </Helmet>
            {/* statistics banner */}
            <div className='w-[98%] mx-auto bg-[#9538E2]  relative'>
                <div className='w-[98%]  lg:w-[90%] mx-auto pb-14 pt-8'>
                    <h1 className="leading-[34px] lg:leading-[60px] font-bold text-2xl lg:text-[32px] text-white text-center mb-6">Statistics</h1>
                    <p className="font-normal text-base text-white text-center mb-6">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                </div>
            </div>
            {/* chart */}
            <div className='w-[98%] mx-auto py-6'>
                <ResponsiveContainer width="100%" height={400}>
                    <ComposedChart

                        data={allData}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="product_title" scale="band" />
                        <YAxis dataKey="price" />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="price" barSize={20} fill="#413ea0" />
                        {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" /> */}
                        <Scatter dataKey="rating" fill="red" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics; Statistics