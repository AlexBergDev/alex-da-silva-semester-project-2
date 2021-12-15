import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/displayMessage.js";
import navigation from "./components/navigation.js";
import footer from "./components/footer.js";
import renderProducts from "./ui/products/renderProducts.js";
import searchProduct from "./ui/products/searchProduct.js";

const url = baseUrl + "/products";

( function() {
    navigation();
    footer();
}());

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