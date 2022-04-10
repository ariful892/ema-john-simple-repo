import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {

    const { name, img, price, shipping, quantity } = props.product;
    return (
        <div className='review-item'>
            <h2>Review Item {name}</h2>
        </div>
    );
};

export default ReviewItem;