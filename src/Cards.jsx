import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const Cards = () => {
    const allGadgets = useLoaderData()
    const {category} = useParams()

    const [allData, setData] = useState(allGadgets);


    useEffect(()=>{
        if (!category) {
            setData([...allGadgets].slice(0,7))
            
        }
        else if (category == 'All Product' || !category) {
            setData(allGadgets)
            // console.log(category);
            
        }else{
            const arr = [...allGadgets].filter((item)=> item.category == category)
            setData(arr)
        }
    },[category,allGadgets])

    // console.log(category);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
       
            {
                allData.map((item) => <Card key={item.product_id} gadget={item}></Card> )
            }


        </div>
    );
};

export default Cards;


