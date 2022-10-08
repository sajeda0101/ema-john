import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cards from "../Card/Cards";
import Cart from "../Cart/Cart";
import "./Shop.css";

const Shop = () => {
  const products=useLoaderData()   
  useEffect(() => {
    const storedCart = getStoredCart();
    const saveCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
      }
    }
    setCart(saveCart);
  }, [products]);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exits = products.find((product) => product.id === selectedProduct.id);
    if (!exits) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exits.quantity = exits.quantity + 1;
      newCart = [...rest, exits];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  return (
    <div className="shop  grid grid-cols-2">
      <div className="product-container m-12">
        <h1 className="text-3xl text-center">Products</h1>

        <div className="sm:grid grid-cols- md:grid grid-cols-3">
          {products.map((product) => (
            <Cards
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Cards>
          ))}
        </div>
      </div>
      <div className="bg-amber-300  p-12">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
