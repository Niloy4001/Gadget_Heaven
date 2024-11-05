import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesSidebar = ({ category }) => {
    // console.log(category);

    return (
        <div className='w-[70%] mx-auto '>
            <Link to={`category/${category.category}`}><button className='btn w-full rounded-3xl hover:bg-[#9538E2] bg-[#F7F7F7] hover:text-white'>{category.category}</button></Link>
        </div>
    );
};

export default CategoriesSidebar;