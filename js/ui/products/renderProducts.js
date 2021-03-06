import { EMPTY_PRODUCTS } from "../../constants/messages.js"
import { baseUrl } from "../../settings/api.js";
import displayMessage from "../../components/displayMessage.js";
import bookmarkClick from "../../components/wishlist/bookmarkClick.js";
import { getBookmarks } from "../../utils/storage.js";

const bookmarks = getBookmarks();

export default function renderProducts(json, container) {

    container.innerHTML = "";

    if (json.length === 0) {
        displayMessage("alert-info", EMPTY_PRODUCTS, ".products-container");
    }
        
    json.forEach(function (product) {

        let bookmarkClass = "far";

        const doesObjectExist = bookmarks.find(function (fav) {

        return parseInt(fav.id) === product.id;
    });

    if (doesObjectExist) {
        bookmarkClass = "fa";
    }

        container.innerHTML += `<div class="col">
                                    <div class="card bg-light shadow-sm rounded">
                                    <a href="details.html?id=${product.id}"><img src="${product.image_url}" class="card-img-top rounded-top" alt="${product.title}"></a>
                                        <div class="card-body p-1">
                                            <i class="card-icon float-end ${bookmarkClass} fa-heart" data-id="${product.id}" data-title="${product.title}" data-price="${product.price}" data-image="${product.image_url}"></i>
                                            <a href="details.html?id=${product.id}">
                                                <h3 class="m-0">${product.title}</h3>
                                                <div class="card-text h3">${product.price} NOK</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>`;

    const bookmarkButton = document.querySelectorAll(".card i");

        bookmarkButton.forEach((button) => {
            button.addEventListener("click", bookmarkClick);
        });
    });
}