import { EMPTY_CART } from "./constants/messages.js"
import displayMessage from "./components/displayMessage.js";
import navigation from "./components/navigation.js";
import { getCart } from "./utils/storage.js";
import cartClick from "./components/cartClick.js";

navigation();

export default function renderCart() {
    const container = document.querySelector(".cart-container");

    const insideCart = getCart();

    container.innerHTML = "";

    if (insideCart.length === 0) {
        displayMessage("alert-info", EMPTY_CART, ".cart-container");
    }

    for (let i = 0; i < insideCart.length; i++) {

            let insideCartClass = "fas";

            const doesObjectExist = insideCart.find(function (cartItem) {

            return parseInt(cartItem.id) === insideCart[i].id;
        });

        if (doesObjectExist) {
            insideCartClass = "far";
        }
        
        container.innerHTML += `<div class="col">
                                    <div class="card">
                                        <a href="details.html?id=${insideCart[i].id}">
                                            <img src="${insideCart[i].image}" class="card-img-top" alt="${insideCart[i].title}">
                                        </a>
                                        <div class="card-body p-0">
                                            <i class="card-icon float-end ${insideCartClass} fa-bookmark" data-id="${insideCart[i].id}" data-title="${insideCart[i].title}" data-price="${insideCart[i].price}" data-image="${insideCart[i].image}"></i>
                                            <a href="details.html?id=${insideCart[i].id}">
                                                <h3 class="m-0">${insideCart[i].title}</h3>
                                                <div class="card-text h3">${insideCart[i].price} kr</div>
                                            </a>     
                                        </div>
                                    </div>
                                </div>`;

        const cartButton = document.querySelectorAll(".card i");

        cartButton.forEach((button) => {
            button.addEventListener("click", cartClick);
            button.addEventListener("click", renderCart);
        });
    };
}

renderCart();