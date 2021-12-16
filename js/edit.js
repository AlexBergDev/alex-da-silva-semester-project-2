import redirectUnauthorized from "./components/auth/redirectUnauthorized.js";
import navigation from "./components/admin/navigation.js";
import displayMessage from "./components/displayMessage.js";
import { EMPTY_INPUT_VALUE, SAVED_SUCCESS } from "./constants/messages.js"
import { baseUrl } from "./settings/api.js";
import { getToken } from "./utils/storage.js";
import deleteButton from "./components/admin/deleteButton.js";

const token = getToken();

( function() {
    redirectUnauthorized();
    navigation();
}());

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
    document.location.href = "/dashboard.html";
}

const productUrl = baseUrl + "/products/" + id;

const form = document.querySelector("form");
const idInput = document.querySelector("#product-id");
const title = document.querySelector("#product-title");
const description = document.querySelector("#product-description");
const price = document.querySelector("#product-price");
const featured = document.querySelector("#product-featured");
const image_url = document.querySelector("#product-image_url");
const message = document.querySelector(".message-container");
const productPreview = document.querySelector(".product-preview");

(async function () {
    try {
        const response = await fetch(productUrl);
        const details = await response.json();

        title.value = details.title;
        description.value = details.description;
        price.value = details.price;
        idInput.value = details.id;
        featured.value = details.featured;
        image_url.value = details.image_url;

        if (featured.value === "true"){
            featured.checked = true;
          } else {
            featured.checked = false;
          }

          productPreview.innerHTML = "";

          productPreview.innerHTML += `<label class="col-form-label">Product Preview</label>

                                        <div class="col mt-2 mb-4">
                                            <div class="card shadow-sm rounded">
                                                <div class="placeholder-glow">
                                                <img src="${image_url.value}" class="card-img-top rounded-top">
                                                </div>
                                                <div class="card-body p-1">
                                                    <i class="card-icon float-end far fa-heart"></i>
                                                    <h3 class="m-0">
                                                    ${title.value}
                                                    </h3>
                                                    <p class="card-text h3 m-0">
                                                    ${price.value} NOK
                                                    </p>
                                                </div>
                                            </div>
                                            </div>`;

        deleteButton(details.id);
    } catch (error) {
        console.log(error);
    }
})();

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
    const idValue = idInput.value;
    const featuredValue = featured.value;
    const image_urlValue = image_url.value;

    if (titleValue.length === 0 || descriptionValue.length === 0 || priceValue.length === 0) {
        return displayMessage("alert-warning", EMPTY_INPUT_VALUE, ".message-container");
    }

    updateProduct(titleValue, descriptionValue, priceValue, idValue, featuredValue, image_urlValue);
}

async function updateProduct(title, description, price, id, featured, image_url) {
    const url = baseUrl + "/products/" + id;
    const data = JSON.stringify({ title: title, description: description, price: price, featured: featured, image_url: image_url});

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