import products from "./api/products.json"
import {fetchQuantityFormCratLS} from "./fetchQuantityFormCratLS"
import {getCartProductFromLS} from "./getCartProduct"
import { removeProdFormCart } from "./removeProdFormCart";
import { incrementDecrement } from "./incrementDecrement";
import { updataCratValue } from "./updataCratValue";
import { updataCratValueTotal } from "./updataCratValueTotal";


let cartProducts = getCartProductFromLS();

let filterProducts = products.filter((curProd) =>{
    return cartProducts.some((curElem) => curElem.id === curProd.id);
})

console.log(filterProducts);

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
    filterProducts.forEach((curProd) =>{
        const {category,id,name,image,stock,price } = curProd

        let productClone = document.importNode(templateContainer.content, true);



        const lSAclualData = fetchQuantityFormCratLS(id, price)



        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`)
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productQuantity").textContent = lSAclualData.quantity
        productClone.querySelector(".productPrice").textContent = lSAclualData.price;

        productClone.querySelector(".stockElement").addEventListener("click", (event) => {
            incrementDecrement(event , id , stock , price)
        })

        productClone.querySelector(".remove-to-cart-button").addEventListener("click", () => removeProdFormCart(id))

        cartElement.appendChild(productClone)
    })
}

showCartProduct();


updataCratValueTotal();

