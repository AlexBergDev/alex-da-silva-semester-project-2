import navigation from "./components/navigation.js";
import footer from "./components/footer.js";
import displayMessage from "./components/displayMessage.js";
import { baseUrl } from "./settings/api.js";
import bookmarkClick from "./components/wishlist/bookmarkClick.js";
import { getBookmarks, getCart } from "./utils/storage.js";
import cartClick from "./components/cart/cartClick.js";
import renderProducts from "./ui/products/renderProducts.js";

const bookmarks = getBookmarks();
const cart = getCart();

( function() {
    navigation();
    footer();
}());

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
const url = baseUrl + "/products?featured=true";

(async function () {
    try {
        const response = await fetch(productUrl);
        const product = await response.json();

        let bookmarkClass = "far";
        let cartClass = "btn-dark";

        const doesBookmarkExist = bookmarks.find(function (fav) {
            return parseInt(fav.id) === product.id;
        });

        const doesCartExist = cart.find(function (cartItem) {
            return parseInt(cartItem.id) === product.id;
        });

        if (doesBookmarkExist) {
            bookmarkClass = "fa";
        }

        if (doesCartExist) {
            cartClass = "btn-danger";
        }

        document.title = `Arctic Fashion | ${product.title}`;
        h2.innerHTML = `${product.title}`;
        image.innerHTML = `<img src="${baseUrl + product.image.url}" class="img-fluid" alt="${product.title}">`;
        breadcrumb.innerHTML = `${product.title}`;
        description.innerHTML = `${product.description}`;
        price.innerHTML = `${product.price} kr`;
        wishlist.innerHTML = `<i class="${bookmarkClass} fa-heart" data-id="${product.id}" data-title="${product.title}" data-price="${product.price}" data-image="${baseUrl + product.image.url}"></i>`;
        addToCart.innerHTML = `<div class="cart-button btn ${cartClass} text-white px-5 shadow rounded" data-id="${product.id}" data-title="${product.title}" data-price="${product.price}" data-image="${baseUrl + product.image.url}"><i class="fas fa-shopping-bag"></i></div>`;

        const bookmarkButton = document.querySelectorAll(".product-container_wishlist i");
        const cartButton = document.querySelectorAll(".card-button .cart-button");

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


(async function () {
    const container = document.querySelector(".products-container")

    try {
        const response = await fetch(url);
        const json = await response.json();

        renderProducts(json, container);
    } catch (error) {
        console.log(error);
        displayMessage("alert-danger", error, container);
    }
})();