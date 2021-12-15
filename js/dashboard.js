import redirectUnauthorized from "./components/auth/redirectUnauthorized.js";
import navigation from "./components/navigation.js";
import logoutButton from "./components/auth/logoutButton.js";
import dashboardMessage from "./ui/dashboardMessage.js";
import { baseUrl } from "./settings/api.js";

import displayMessage from "./components/displayMessage.js";

( function() {
    logoutButton();
    redirectUnauthorized();
    dashboardMessage();
    navigation();
  }());

const productUrl = baseUrl + "/products";

(async function () {
    const container = document.querySelector("tbody");
    const loading = document.querySelector(".loading");

    try {
        const response = await fetch(productUrl);
        const json = await response.json();

        loading.innerHTML = "";
        container.innerHTML = "";

        json.forEach(function (product) {
            container.innerHTML += `<tr>
                                        <th scope="row">${product.id}</th>
                                        <td>${product.title}</td>
                                        <td>${product.price} kr</td>
                                        <td><a href="edit.html?id=${product.id}"><i class="fs-6 fas fa-pen"></i></a></td>
                                    </tr>`;
        });

    } catch (error) {
        displayMessage("alert-danger", error, "tbody");
    }
})();