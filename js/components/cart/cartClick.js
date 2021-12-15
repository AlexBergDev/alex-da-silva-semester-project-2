import { getCart } from "../../utils/storage.js";
import { saveCart } from "../../utils/storage.js";

export default function cartClick() {
    this.classList.toggle("btn-danger");
    this.classList.toggle("btn-dark");

    const id = this.dataset.id;
    const title = this.dataset.title;
    const price = this.dataset.price;
    const image = this.dataset.image;

    const currentCartItems = getCart();

    const cartItemExists = currentCartItems.find(function (cartItem) {
        return cartItem.id === id;
    });

    if (cartItemExists === undefined) {
        const cart = { id: id, title: title, price: price, image: image};
        currentCartItems.push(cart);
        saveCart(currentCartItems);
    } else {
        const newCartItems = currentCartItems.filter((cartItem) => cartItem.id !== id);
        saveCart(newCartItems);
    }
}