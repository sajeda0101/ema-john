import React from 'react';
import './Cards.css'

const Cards = ({product,handleAddToCart}) => {
    
    const {name,img,price,seller,ratings}=product
    return (
        <div className='card border border-amber-900 rounded m-3 relative '>
            <img className='p-3 rounded-xl ' src={img} alt="" />
            <div className='ml-8'>
            <h3>{name}</h3>
            <h1>Price:{price}</h1>
            <p className='text-xl'><small>Seller:{seller}</small></p>
            <p className='text-xl'><small>Ratings:{ratings}</small></p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='bg-indigo-300 hover:bg-indigo-800 hover:text-white w-full p-2 rounded text-xl absolute bottom-0'>Add to Cart</button>

        </div>
    );
};

export default Cards;