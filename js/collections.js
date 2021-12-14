import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/displayMessage.js";
import navigation from "./components/navigation.js";
import renderProducts from "./ui/renderProducts.js";
import searchProduct from "./ui/searchProduct.js";

const url = baseUrl + "/products";

navigation();

(async function () {
    const container = document.querySelector(".products-container")

    try {
        const response = await fetch(url);
        const json = await response.json();

        renderProducts(json, container);
        searchProduct(json, container);
    } catch (error) {
        console.log(error);
        displayMessage("alert-danger", error, container);
    }
})();


document.getElementById('sorting').addEventListener('change', function() {

    const sortingUrl = baseUrl + "/products" + this.value;

    (async function () {
        const container = document.querySelector(".products-container")
    
        try {
            const response = await fetch(sortingUrl);
            const json = await response.json();
    
            renderProducts(json, container);
        } catch (error) {
            console.log(error);
            displayMessage("alert-danger", error, container);
        }
    })();
  });

  document.getElementById('price').addEventListener('change', function() {

    const sortingUrl = baseUrl + "/products" + this.value;

    (async function () {
        const container = document.querySelector(".products-container")
    
        try {
            const response = await fetch(sortingUrl);
            const json = await response.json();
    
            renderProducts(json, container);
        } catch (error) {
            console.log(error);
            displayMessage("alert-danger", error, container);
        }
    })();
  });