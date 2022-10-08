import React from 'react';
import './Review.css'

const ReviewItem = ({product}) => {
        const {price,name,quantity,img}=product;
    return (
        <div className='review-item'>
            <div >
                <img src={img}  alt="" />
            </div>
           <div className='review-detail'>
           <div>
                <p>Name:{name}</p>
                <p>Price:{price}</p>
                <p>Quantity:{quantity}</p>
            </div>
            <div>
                <button>Delete</button>
            </div>
           </div>
        </div>
    );
};

export default ReviewItem;