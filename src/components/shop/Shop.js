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
    for(const id in storedCart){
        const addedProduct = products.find(product => product.id === id)
        console.log(addedProduct)
    }
},[])

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart)
        addTodb(product.id)
    
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