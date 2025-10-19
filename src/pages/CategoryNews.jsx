import React from 'react';
import { useParams } from 'react-router';

const CategoryNews = () => {
    const obj= useParams();
    console.log(obj);
    return (
        <div>
            Catagory news
        </div>
    );
};

export default CategoryNews;