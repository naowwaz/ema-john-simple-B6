
import { getStoredCart } from "../../utilities/fakedb"

export const productsAndCart = async () =>{
    const productsData = await fetch('products.json')
    const products = await productsData.json()

    const savedCart = getStoredCart()
    console.log('savedCart' , savedCart);

    return products;
}