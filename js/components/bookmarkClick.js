import { getBookmarks } from "../utils/storage.js";
import { saveBookmarks } from "../utils/storage.js";

export default function bookmarkClick() {
    this.classList.toggle("fa");
    this.classList.toggle("far");

    const id = this.dataset.id;
    const title = this.dataset.title;
    const price = this.dataset.price;
    const image = this.dataset.image;

    const currentFavs = getBookmarks();

    const bookmarkExists = currentFavs.find(function (fav) {
        return fav.id === id;
    });

    if (bookmarkExists === undefined) {
        const bookmark = { id: id, title: title, price: price, image: image};
        currentFavs.push(bookmark);
        saveBookmarks(currentFavs);
    } else {
        const newFavs = currentFavs.filter((fav) => fav.id !== id);
        saveBookmarks(newFavs);
    }
}