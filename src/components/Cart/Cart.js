import React from 'react';

const Cart = ({cart}) => {
    let total=0;
    let shipping=0
    let quantity=0
    for(const product of cart){
        quantity=quantity+product.quantity;
        total=total+(product.price*quantity);
        shipping=shipping+product.shipping*quantity
    }
    const tax=parseFloat((total*0.1).toFixed(2));
    const GrandTotal=(total+shipping+tax).toFixed(2)
    
    return (
        <div className='sticky top-0'>
            <h1  className='text-2xl text-center'>Order Summary</h1>
            <p>Selected Item:{quantity}</p>
            <p>Total Price:{total}</p>
            <p>Total Shipping:{shipping}</p>
            <p>Tax:{tax}</p>
            <h5>Grand Total:{GrandTotal}</h5>
        
        </div>
    );
};

export default Cart;