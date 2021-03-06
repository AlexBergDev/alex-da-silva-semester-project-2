import navigation from "./components/navigation.js";
import footer from "./components/footer.js";
import displayMessage from "./components/displayMessage.js";
import { EMPTY_BOOKMARKS } from "./constants/messages.js"
import { getBookmarks } from "./utils/storage.js";
import bookmarkClick from "./components/wishlist/bookmarkClick.js";

( function() {
    navigation();
    footer();
    renderBookmarks();
}());

export default function renderBookmarks() {
    const container = document.querySelector(".products-container");

    const bookmarks = getBookmarks();

    container.innerHTML = "";

    if (bookmarks.length === 0) {
        displayMessage("alert-info", EMPTY_BOOKMARKS, ".products-container");
    }

    for (let i = 0; i < bookmarks.length; i++) {

            let bookmarkClass = "fa";

            const doesObjectExist = bookmarks.find(function (fav) {

            return parseInt(fav.id) === bookmarks[i].id;
        });

        if (doesObjectExist) {
            bookmarkClass = "far";
        }
        
        container.innerHTML += `<div class="col">
                                    <div class="card bg-light shadow-sm rounded">
                                        <a href="details.html?id=${bookmarks[i].id}">
                                            <img src="${bookmarks[i].image}" class="card-img-top" alt="${bookmarks[i].title}">
                                        </a>
                                        <div class="card-body p-1">
                                            <i class="card-icon float-end ${bookmarkClass} fa-heart" data-id="${bookmarks[i].id}" data-title="${bookmarks[i].title}" data-price="${bookmarks[i].price}" data-image="${bookmarks[i].image}"></i>
                                            <a href="details.html?id=${bookmarks[i].id}">
                                                <h3 class="m-0">${bookmarks[i].title}</h3>
                                                <div class="card-text h3">${bookmarks[i].price} NOK</div>
                                            </a>     
                                        </div>
                                    </div>
                                </div>`;

        const bookmarkButton = document.querySelectorAll(".card i");

        bookmarkButton.forEach((button) => {
            button.addEventListener("click", bookmarkClick);
            button.addEventListener("click", renderBookmarks);
        });
    };
}