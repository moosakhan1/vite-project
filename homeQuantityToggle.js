export const homeQuantityToggle = (event, id, stock) => {
    const currentCardElement = document.querySelector(`#card${id}`);
    // console.log(currentCardElement);

    const productQuantity = currentCardElement.querySelector(".productQuantity");
    if (!productQuantity) {
        console.error('Product quantity element not found');
        return;
    }

    let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

    if (event.target && event.target.className === "cartIncrement") {
        if (quantity < stock) {
            quantity++;
        } else if (quantity === stock) {
            quantity = stock;
        }
    }
    if (event.target && event.target.className === "cartDecrement") {
        if (quantity > 1) {
            quantity--;
        }
    }

    productQuantity.innerHTML = quantity;
    console.log(quantity);
    productQuantity.setAttribute("data-quantity", quantity.toString());
    return quantity;
};
