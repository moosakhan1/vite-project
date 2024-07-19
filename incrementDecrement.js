import { getCartProductFromLS } from "./getCartProduct";
import { updataCratValueTotal } from "./updataCratValueTotal";

export const incrementDecrement = (event , id , stock , price) => {
    const currentCardElement = document.querySelector(`#card${id}`);
    const productQuantity = currentCardElement.querySelector(".productQuantity");
    const productPrice = currentCardElement.querySelector(".productPrice");

    let quantity = 1;
    let localStoragePrice = 0;

    var localcartProducts = getCartProductFromLS();

    let existingProd = localcartProducts.find((curProd) => curProd.id === id);

    if (existingProd) {
        quantity = existingProd.quantity;
        localStoragePrice = existingProd.price;
    } else {
        localStoragePrice = price;
        price = price;
    }

    if (event.target && event.target.className === "cartIncrement") {
        if (quantity < stock) {
            quantity++;
        } else if (quantity === stock) {
            quantity = stock;
            localStoragePrice = price * stock
        }
    }
    


    if (event.target && event.target.className === "cartDecrement") {
        if (quantity > 1) {
            quantity--;
        }
    }



    localStoragePrice = price * quantity;

    localStoragePrice = Number(localStoragePrice.toFixed(2))

    let updataCart = {id , quantity , price: localStoragePrice}

    updataCart = localcartProducts.map((curProd) => {
       return curProd.id == id ? updataCart : curProd;  
    })   

    console.log(updataCart);

    localStorage.setItem('cartProductLS', JSON.stringify(updataCart));   


    productQuantity.innerHTML = quantity;
    productPrice.innerHTML = localStoragePrice;

    updataCratValueTotal();



}

