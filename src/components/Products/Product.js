import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css'


const Product = (props) => {
    console.log(props)
    const {name,img,price,seller,stock  }=props.product;
    

 
    return (
        
            <div className="product">
                <div>
                <img src={img}/>

                </div>
                <div>
                <h4 className="product-name">prodect:{name}</h4>
                 <p><small>by:{seller}</small></p>
                 <p>Price:{price}</p>
                 <p><small>Only {stock} left in Stock Order soon</small></p>
                 <button 
                    onClick={()=>props.handleAddtoCart(props.product)}
                 className="btn-regluar"
                 >add to curt</button>
                </div>
                 
            </div>
           
    
    );
};

export default Product;