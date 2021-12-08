import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/displayMessage.js";
import navigation from "./components/navigation.js";
import renderProducts from "./ui/renderProducts.js";
import searchTitle from "./ui/searchTitle.js";

const url = baseUrl + "/products";

// navigation();

(async function () {
    const container = document.querySelector(".products-container")

    try {
        const response = await fetch(url);
        const json = await response.json();

        renderProducts(json, container);
        searchTitle(json, container);
    } catch (error) {
        console.log(error);
        displayMessage("alert-danger", error, container);
    }
})();