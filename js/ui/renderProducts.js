import { EMPTY_PRODUCTS } from "../constants/messages.js"
import { baseUrl } from "../settings/api.js";
import displayMessage from "../components/displayMessage.js";
import bookmarkClick from "../components/bookmarkClick.js";
import { getBookmarks } from "../utils/storage.js";

const bookmarks = getBookmarks();

export default function renderProducts(json, container) {

    container.innerHTML = "";

    if (json.length === 0) {
        displayMessage("alert-info", EMPTY_PRODUCTS, container);
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
                                    <div class="card mb-3">
                                    <a href="details.html?id=${product.id}"><img src="${baseUrl + product.image.url}" class="card-img-top" alt="${product.title}"></a>
                                        <div class="card-body p-0">
                                            <i class="card-icon float-end ${bookmarkClass} fa-heart" data-id="${product.id}" data-title="${product.title}" data-price="${product.price}" data-image="${baseUrl + product.image.url}"></i>
                                            <a href="details.html?id=${product.id}">
                                                <h3 class="m-0">${product.title}</h3>
                                                <div class="card-text h3">${product.price} kr</div>
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