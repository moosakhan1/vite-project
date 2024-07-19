import { getCartProductFromLS } from "./getCartProduct";

export const updataCratValueTotal = () => {
    let productSubTotal = document.querySelector(".productSubTotal")
    let productFinalTotal = document.querySelector(".productFinalTotal")

    var localcartProducts = getCartProductFromLS();

    let initialValue = 0
    let totalProductPrice = localcartProducts.reduce((accum,curElem) => {
        let productPrice = parseInt(curElem.price) || 0;
        return accum + productPrice
    }, initialValue)
    // console.log(totalProductPrice);

    productSubTotal.textContent = totalProductPrice;
    productFinalTotal.textContent = `₹${totalProductPrice + 50}`
};