// import { getCartProductFromLS } from "./getCartProduct"
// import { updataCratValue } from "./updataCratValue"

// export const addToCart = (event, id, stock) => {


//     var arrLocalStorgeProduct = getCartProductFromLS()

//     const currentProdElem = document.querySelector(`#card${id}`);

//     let quantity = currentProdElem.querySelector(".productQuantity").innerText;
//     let price = currentProdElem.querySelector(".productPrice").innerText;

//     // console.log(quantity , price);

//     price = price.replace("₹", "")

//     let existingProd = arrLocalStorgeProduct.find((curProd) => curProd.id === id);

//     if (existingProd) {
//         return false;
//     }

//     price = Number(price * quantity);
//     quantity = Number(quantity)

//     // let updataCart = {id , quantity , price}
//     arrLocalStorgeProduct.push({id , quantity , price})
//     localStorage.setItem('cartProductLS', JSON.stringify(arrLocalStorgeProduct))

//     // update the cart  button value
//     updataCratValue(arrLocalStorgeProduct);
// };



import { getCartProductFromLS } from "./getCartProduct";
import { updataCratValue } from "./updataCratValue";
import { showToast } from "./showToast";

getCartProductFromLS();

export const addToCart = (event, id, stock) => {
    var cartProducts = getCartProductFromLS();

    const currentProdElem = document.querySelector(`#card${id}`);

    let quantity = currentProdElem.querySelector(".productQuantity").innerText;
    let price = currentProdElem.querySelector(".productPrice").innerText;

    // console.log(quantity, price);

    price = price.replace("₹", "");

    let existingProd = cartProducts.find((curProd) => curProd.id === id);

    console.log(existingProd);

    if (existingProd && quantity > 1) {
        quantity = Number(existingProd.quantity) + Number(quantity);
        price = Number(price * quantity);
    let updataCart = {id , quantity , price}

    updataCart = cartProducts.map((curProd) => {
       return curProd.id == id ? updataCart : curProd;  
    })   

    console.log(updataCart);

    localStorage.setItem('cartProductLS', JSON.stringify(updataCart));   

    showToast("add", id)


    }

    if (existingProd) {
        // alert("bhai duplicate hai")
        return false;
    }

    price = Number(price * quantity);
    quantity = Number(quantity);

    // let updataCart = {id , quantity , price}
    cartProducts.push({id, quantity, price});
    localStorage.setItem('cartProductLS', JSON.stringify(cartProducts));

    // update the cart button value
    updataCratValue(cartProducts);

    showToast("add", id)

};
