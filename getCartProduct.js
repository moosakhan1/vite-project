// import { updataCratValue } from "./updataCratValue"

// export const getCartProductFromLS = () => {
//     let cartProducts = localStorage.getItem("cartProductLS")
//     if (!cartProducts) {
//         return [];
//     }
//     cartProducts = JSON.parse(cartProducts);

//     // update the cart  button value
//     updataCratValue(arrLocalStorgeProduct);

//     return cartProducts;
// }


import { updataCratValue } from "./updataCratValue";

export const getCartProductFromLS = () => {
    let cartProducts = localStorage.getItem("cartProductLS");
    if (!cartProducts) {
        return [];
    }
    cartProducts = JSON.parse(cartProducts);

    // update the cart button value
    updataCratValue(cartProducts);

    return cartProducts;
};
