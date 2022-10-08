import { getStoredCart } from "../../utilities/fakedb";

export const ProductLoader=async ()=>{
    // get products
        const productData=await fetch('products.json');
        const products=await productData.json();
    
        // get cart
        const saveCart=getStoredCart();
        const initialCart=[];
        for(const id in saveCart){
            
            const addedProduct=products.find(product=>product.id===id);
          if(addedProduct){
            const quantity=saveCart[id];
            addedProduct.quantity=quantity;
            initialCart.push(addedProduct)
          }
        }
        return {products, initialCart} ;
}