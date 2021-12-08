import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/displayMessage.js";
import navigation from "./components/navigation.js";

// navigation();

const h2 = document.querySelector("h2");
const image = document.querySelector(".product-container_image");
const breadcrumb = document.querySelector(".product-container_breadcrumb");
const description = document.querySelector(".product-container_description");
const price = document.querySelector(".product-container_price");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

if (!id) {
    document.location.href = "/";
}

const productUrl = baseUrl + "/products/" + id;

(async function () {
    try {
        const response = await fetch(productUrl);
        const product = await response.json();

        document.title = `Arctic Fashion | ${product.title}`;
        h2.innerHTML = `${product.title}`;
        image.innerHTML = `<img src="${baseUrl + product.image.url}" class="img-fluid" alt="${product.title}">`;
        breadcrumb.innerHTML = `${product.title}`;
        description.innerHTML = `${product.description}`;
        price.innerHTML = `${product.price} kr`;

    } catch (error) {
        displayMessage("alert-warning", error, ".product-container");
    }
})();