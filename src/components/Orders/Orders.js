import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const {products,initialCart}=useLoaderData();
    const [cart,setCart]=useState(initialCart);

    
    return (
        <div className='shop grid grid-cols-2'>
            <div className='product-container m-24'>
                <div className="mr sm:grid grid-cols- md:grid grid-cols-3 ">
                {
                    cart.map(product=><ReviewItem key={product.id} product={product}></ReviewItem>)
                }
                </div>
                
            </div>
            <div className='bg-amber-300  p-12'>

            <Cart cart={cart}></Cart>
            </div>
           
        </div>
    );
};

export default Orders;