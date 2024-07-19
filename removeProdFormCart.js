import { getCartProductFromLS } from "./getCartProduct";
import { updataCratValue } from "./updataCratValue";
import { showToast } from "./showToast";

export const removeProdFormCart = (id) => {
    let cartProducts = getCartProductFromLS();
    cartProducts = cartProducts.filter((curProd) => curProd.id !== id);

    //
    localStorage.setItem('cartProductLS', JSON.stringify(cartProducts));

    let removeDiv = document.getElementById(`card${id}`);
    if (removeDiv) {
        removeDiv.remove();


        showToast("delete", id)
    }
    updataCratValue(cartProducts);
}