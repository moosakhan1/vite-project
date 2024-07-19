import { homeQuantityToggle } from "./homeQuantityToggle"
import { addToCart } from "./addToCart"


const productContainer = document.querySelector("#productContainer")
// console.log(productContainer)
const productTemplate = document.querySelector("#productTemplate")
// console.log(productTemplate)

 export const showProductContainer = (products) =>{
    if (!products) {
        return false;
    }
    products.forEach((curprod) => {
        const {brand,category,description,id,image,name,price,stock} = curprod;
        const productCLone = document.importNode(productTemplate.content, true);



        productCLone.querySelector("#cardValue").setAttribute("id",`card${id}`)   


        productCLone.querySelector(".category").textContent = category;
        productCLone.querySelector(".productName").textContent = name;
        productCLone.querySelector(".productImage").src = image;
        productCLone.querySelector(".productImage").alt = name;
        productCLone.querySelector(".productStock").textContent = stock;
        productCLone.querySelector(".productDescription").textContent = description;
        productCLone.querySelector(".productPrice").textContent = `₹${price}`;
        productCLone.querySelector(".productActualPrice").textContent = `₹${price * 4}`;


        productCLone.querySelector(".stockElement").addEventListener("click", (event) => {
            homeQuantityToggle(event, id, stock)
        })

        productCLone.querySelector(".add-to-cart-button").addEventListener("click", (event) => {
            addToCart(event, id, stock);
        
        })

        productContainer.append(productCLone);

    });

}
