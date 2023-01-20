import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import './products.css'
const Product = (props) => {
    const {product,removeFromDb, handleAddToCart} = props;
    const {name, img, seller, price, ratings} = props.product;
   
    return (
        <div className='product' >
          <img src={img} alt="" /> 
          
          <div className='product-info'>
          <p className='product-name'>{name}</p>
            <p>Price:  ${price}</p>
            <p><small>Seller:{seller}</small></p>
            <p><small>Ratings: {ratings} stars </small></p>
          </div>
          <button onClick={ ()=>handleAddToCart (product)} className='btn-cart'>
            <p>Add to Cart</p>
            {/* <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon> */}
            
          </button>
          <button  onClick={() => removeFromDb(product) } className='remove-cart' >Remove from cart</button>
          
        </div>
    );
};

export default Product;








