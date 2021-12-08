import { EMPTY_BOOKMARKS } from "./constants/messages.js"
import displayMessage from "./components/displayMessage.js";
import navigation from "./components/navigation";
import { getBookmarks } from "./utils/storage.js";
import bookmarkClick from "./components/bookmarkClick.js";

navigation();

export default function renderBookmarks() {
    const container = document.querySelector(".data");

    const bookmarks = getBookmarks();

    container.innerHTML = "";

    if (bookmarks.length === 0) {
        displayMessage("alert-info", EMPTY_BOOKMARKS, ".data");
    }

    for (let i = 0; i < bookmarks.length; i++) {

            let bookmarkClass = "fa";

            const doesObjectExist = bookmarks.find(function (fav) {

            return parseInt(fav.id) === bookmarks[i].id;
        });

        if (doesObjectExist) {
            bookmarkClass = "far";
        }
        
        container.innerHTML += `<div class="col-md-6 col-lg-3 my-3">
                                            <div class="card shadow-sm border-0 rounded-3">
                                                <div class="card-body">
                                                    <h5 class="card-title text-truncate">${bookmarks[i].title}</h5>
                                                    <p class="card-text text-truncate">${bookmarks[i].summary}</p>
                                                    <p class="card-text">${bookmarks[i].author}</p>
                                                    <a href="article.html?id=${bookmarks[i].id}" class="btn btn-primary">Read</a>
                                                    <i class="nav-link fs-4 float-end ${bookmarkClass} fa-bookmark" data-id="${bookmarks[i].id}" data-title="${bookmarks[i].title}" data-summary="${bookmarks[i].summary}" data-author="${bookmarks[i].author}"></i>
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

renderBookmarks();