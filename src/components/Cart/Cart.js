import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
// console.log(cart)

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity ;
        total= total + product.price;
        // total = total + (product.price * product.quantity);
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat ((total * 0.1).toFixed(2));
      const grandtotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            {/* <p>Selected Items: {quantity}</p> */}
            <p>Selected Items: {cart.length}</p>
            <p>Total price: ${total}</p>
            <p>Total Shipping: {shipping}</p>
            <p>Tax: {tax}</p>
            <h3>Grand Total: ${grandtotal}</h3>
        </div>
    );
};

export default Cart;