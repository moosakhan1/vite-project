// const cartValue = document.querySelector("#cartValue")

// export const updataCratValue = (cartProducts) => {
//     return (cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping"> ${cartProducts.lenght}</i>`);
// }

const cartValue = document.querySelector("#cartValue");

export const updataCratValue = (cartProducts) => {
    return (cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping"> ${cartProducts.length}</i>`);
};
