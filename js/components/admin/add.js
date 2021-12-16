import { EMPTY_INPUT_VALUE, PRODUCT_PUBLISHED, STANDARD_ERROR } from "../../constants/messages.js"
import navigation from "./navigation.js";
import redirectUnauthorized from "../auth/redirectUnauthorized.js";
import displayMessage from "../displayMessage.js";
import { baseUrl } from "../../settings/api.js";
import { getToken } from "../../utils/storage.js";

const token = getToken();

( function() {
    redirectUnauthorized();
    navigation();
}());

const form = document.querySelector("form");
const title = document.querySelector("#product-title");
const description = document.querySelector("#product-description");
const price = document.querySelector("#product-price");
const featured = document.querySelector("#product-featured");
const image_url = document.querySelector("#product-image_url");
const message = document.querySelector(".message-container");

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    if (featured.checked == true){
        featured.value = "true";
      } else {
        featured.value = "false";
      }

    const titleValue = title.value.trim();
    const descriptionValue = description.value.trim();
    const priceValue = price.value;
    const featuredValue = featured.value;
    const image_urlValue = image_url.value;

    if (titleValue.length === 0 || descriptionValue.length === 0 || priceValue.length === 0) {
        return displayMessage("alert-warning", EMPTY_INPUT_VALUE, ".message-container");
    }

    updateProduct(titleValue, descriptionValue, priceValue, featuredValue, image_urlValue);
}

async function updateProduct(title, description, price, featured, image_url) {
    const url = baseUrl + "/products";

    const data = JSON.stringify({ title: title, description: description, price: price, featured: featured, image_url: image_url});

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if (json.created_at) {
            displayMessage("alert-success", PRODUCT_PUBLISHED, ".message-container");
            form.reset();
        }

        if (json.error) {
            displayMessage("alert-danger", json.message, ".message-container");
        }

    } catch (error) {

        displayMessage("alert-danger", STANDARD_ERROR, ".message-container");
    }
}