import { EMPTY_INPUT_VALUE, SAVED_SUCCESS } from "./constants/messages.js"
import navigation from "./components/navigation.js";
import redirectUnauthorized from "./components/redirectUnauthorized.js";
import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/displayMessage.js";
import { getToken } from "./utils/storage.js";

const token = getToken();

redirectUnauthorized();
navigation();

const homeUrl = baseUrl + "/home";

const form = document.querySelector("form");
const altText = document.querySelector("#hero-alt");
const image_url = document.querySelector("#hero-image_url");
const message = document.querySelector(".message-container");

(async function () {
    try {
        const response = await fetch(homeUrl);
        const details = await response.json();

        altText.value = details.hero_banner_alt_text;

    } catch (error) {
        console.log(error);
    }
})();

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const altTextValue = altText.value.trim();

    if (altTextValue.length === 0 ) {
        return displayMessage("alert-warning", EMPTY_INPUT_VALUE, ".message-container");
    }

    updateHero(altTextValue);
}

async function updateHero(altText) {
    const url = baseUrl + "/home";
    const data = JSON.stringify({ hero_banner_alt_text: altText});

    const options = {
        method: "PUT",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if (json.updated_at) {
            displayMessage("alert-success", SAVED_SUCCESS, ".message-container");
        }

        if (json.error) {
            displayMessage("alert-danger", json.message, ".message-container");
        }
    } catch (error) {
        console.log(error);
    }
}