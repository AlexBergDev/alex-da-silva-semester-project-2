import { EMPTY_ARTICLES } from "../constants/messages.js"
import displayMessage from "../components/displayMessage.js";
import bookmarkClick from "../components/bookmarkClick.js";
import { getBookmarks } from "../utils/storage.js";

const bookmarks = getBookmarks();

export default function renderProducts(json, container) {

    container.innerHTML = "";

    if (json.length === 0) {
        displayMessage("alert-info", EMPTY_ARTICLES, ".collections-container");
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
                                    <div class="card">
                                        <img src="${"http://localhost:1337" + product.image.url}" class="card-img-top" alt="${product.title}">
                                        <div class="card-body p-0">
                                            <div class="card-icon float-end"><i class="${bookmarkClass} fa-heart" data-id="${product.id}" data-title="${product.title}" data-price="${product.price}" data-image="${product.image}"></i></div>
                                            <h3 class="card-title m-0">${product.title}</h3>
                                            <div class="card-text h3">${product.price}</div>
                                            <a href="details.html?id=${product.id}" class="stretched-link"></a>
                                        </div>
                                    </div>
                                </div>`;

    const bookmarkButton = document.querySelectorAll(".card i");

        bookmarkButton.forEach((button) => {
            button.addEventListener("click", bookmarkClick);
        });
    });
}