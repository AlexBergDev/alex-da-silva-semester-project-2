import { EMPTY_CART } from "./constants/messages.js"
import displayMessage from "./components/displayMessage.js";
import navigation from "./components/navigation.js";
import footer from "./components/footer.js";
import { getCart } from "./utils/storage.js";
import cartClick from "./components/cart/cartClick.js";

( function() {
    navigation();
    footer();
    renderCart();
}());

export default function renderCart() {
    const container = document.querySelector(".cart-container");
    const checkoutContainer = document.querySelector(".checkout-container");

    const insideCart = getCart();

    container.innerHTML = "";
    checkoutContainer.innerHTML = "";

    if (insideCart.length === 0) {
        displayMessage("alert-info", EMPTY_CART, ".cart-container");
    }

    for (let i = 0; i < insideCart.length; i++) {
        
        container.innerHTML += `<div class="col mb-4">
                                    <div class="card shadow-sm rounded">
                                        <a href="details.html?id=${insideCart[i].id}">
                                            <img src="${insideCart[i].image}" class="card-img-top rounded-top" alt="${insideCart[i].title}">
                                        </a>
                                        <div class="card-body p-1">
                                            <i class="card-icon float-end fas fa-times" data-id="${insideCart[i].id}" data-title="${insideCart[i].title}" data-price="${insideCart[i].price}" data-image="${insideCart[i].image}"></i>
                                            <a href="details.html?id=${insideCart[i].id}">
                                                <h3 class="m-0">${insideCart[i].title}</h3>
                                                <div class="card-text m-0 h3">${insideCart[i].price} NOK</div>
                                            </a>     
                                        </div>
                                    </div>
                                </div>`;

        checkoutContainer.innerHTML += `<p class="m-0 float-end">1x</p>
                                        <p class="m-0">${insideCart[i].title}</p>
                                        <p>${insideCart[i].price} NOK</p>`;

        const cartButton = document.querySelectorAll(".card i");

        cartButton.forEach((button) => {
            button.addEventListener("click", cartClick);
            button.addEventListener("click", renderCart);
        });
    };
}