import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/displayMessage.js";
import navigation from "./components/navigation.js";
import bookmarkClick from "./components/bookmarkClick.js";
import { getBookmarks } from "./utils/storage.js";
import cartClick from "./components/cartClick.js";

const bookmarks = getBookmarks();

// navigation();

const h2 = document.querySelector("h2");
const image = document.querySelector(".product-container_image");
const breadcrumb = document.querySelector(".product-container_breadcrumb");
const description = document.querySelector(".product-container_description");
const price = document.querySelector(".product-container_price");
const wishlist = document.querySelector(".product-container_wishlist");
const addToCart = document.querySelector(".product-container_button");

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

        let bookmarkClass = "far";

        const doesObjectExist = bookmarks.find(function (fav) {

        return parseInt(fav.id) === product.id;
        });

        if (doesObjectExist) {
            bookmarkClass = "fa";
        }

        document.title = `Arctic Fashion | ${product.title}`;
        h2.innerHTML = `${product.title}`;
        image.innerHTML = `<img src="${baseUrl + product.image.url}" class="img-fluid" alt="${product.title}">`;
        breadcrumb.innerHTML = `${product.title}`;
        description.innerHTML = `${product.description}`;
        price.innerHTML = `${product.price} kr`;
        wishlist.innerHTML = `<i class="${bookmarkClass} fa-heart" data-id="${product.id}" data-title="${product.title}" data-price="${product.price}" data-image="${baseUrl + product.image.url}"></i>`;
        addToCart.innerHTML = `<button type="button" class="cart-button btn btn-dark shadow" data-id="${product.id}" data-title="${product.title}" data-price="${product.price}" data-image="${baseUrl + product.image.url}">Add to cart</button>`;

        const bookmarkButton = document.querySelectorAll(".card-icon i");
        const cartButton = document.querySelectorAll(".card-button");

        bookmarkButton.forEach((button) => {
            button.addEventListener("click", bookmarkClick);
        });

        cartButton.forEach((button) => {
            button.addEventListener("click", cartClick);
        });

    } catch (error) {
        displayMessage("alert-warning", error, ".product-container");
    }
})();