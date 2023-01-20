import React, { useEffect, useState } from 'react';
import { getStoredCard } from '../../utilities/fakedb';
import { addTodb, removeDb } from '../../utilities/storoge';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    // const products = useLoaderData();
    
    const [cart, setCart] = useState([]);
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => 
                setProducts(data))
    }, [])

useEffect(()=>{
    const storedCart = getStoredCard()
    const savedCart = []
    for(const id in storedCart){
        const addedProduct = products.find(product => product.id === id)
        if(addedProduct){
            const quantity = storedCart[id]
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct)
        }
    }
    setCart(savedCart)
},[products])

    const handleAddToCart = (slectedproduct) =>{
        let newCart = []
        const exists = cart.find(product=> product.id === slectedproduct.id)
        if(!exists){
            slectedproduct.quantity = 1;
            newCart = [...cart, slectedproduct]
        }
        else{
           const rest = cart.filter(product => product.id !== slectedproduct.id) 
           exists.quantity = exists.quantity + 1;
           newCart = [...rest, exists]
        }
        setCart(newCart)
        addTodb(slectedproduct.id)
    
    }

    const removeFromDb = product =>{
        removeDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                    {
                        products.map(product=> <Product
                            
                             key={product.id}
                             product={product}
                             handleAddToCart = {handleAddToCart}
                             removeFromDb = {removeFromDb}
                             ></Product>)
                    }
            </div>

            <div className="cart-container">
                  <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;