import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import './shop.css';
import Cart from '../../Cart/Cart';

const Shop = () => {
    const [products,setProducts]=useState([])
    const[cart,setCart]=useState([])
    useEffect(
        ()=>{
            fetch('products.JSON')
            .then(res=>res.json())
            .then(data=>setProducts(data))
        },[]);


        const handleAddtoCart=(product)=>{
            // console.log(product.name)
            const newCart=[...cart,product];
            setCart(newCart)
        }
    return (
        <div className="shop-container">
            <div className="product-container">
                <h3>Products:{products.length}</h3>
                {
                    products.map(
                        product=> <Product product={product}
                         key={product.key} 
                          handleAddtoCart={handleAddtoCart}

                        ></Product>
                    )
                }
            </div>
            <div className="cart-container">
         <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;