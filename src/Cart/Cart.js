import React from 'react';
import './Cart.css'
const Cart = (props) => {
    console.log(props.cart)
    const{cart} =props;
    let total=0;
    for(const products of cart){
            total=total+products.price
    }
    return (
        <div>
              <h3>Order-summary</h3>
                <h5>Items Orderd {props.cart.length} </h5>
                <p>total :{total}</p>
        </div>
    );
};

export default Cart;