
//                             simple style 

//  const addTodb = id =>{
//     const quantity = localStorage.getItem(id)
//     if(quantity){
//         const newQuantity = parseInt(quantity) + 1;
//         localStorage.setItem(id , newQuantity)
//     }
//     else{
//         localStorage.setItem(id, 1)
//     }
//  } 
 
//                               organaize style

const addTodb = id =>{
    let shoppingCart;

    // get shoppingCart 
    const storeCard = localStorage.getItem('shopping-cart');
    if(storeCard){
        shoppingCart = JSON.parse(storeCard)
    }
    else{
        shoppingCart = {}
    }


    // add quantity 
    const quantity = shoppingCart[id]
    if(quantity){
        const newQuantity = parseInt(quantity) + 1;
            shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }
    
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart) )
}


//  2 
// const addTodb = id =>{
//     let shoppingCart;

//     const quantity = shoppingCart[id]
//     if(quantity){
//         const newQuantity = quantity + 1;
//         shoppingCart[id] = newQuantity;
//     }
//     else{
//         shoppingCart[id] = 1
//     }

//     localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
// }

export {
    addTodb,
}