import redirectUnauthorized from "./components/auth/redirectUnauthorized.js";
import navigation from "./components/admin/navigation.js";
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
                                        <td>${product.price}</td>
                                        <td>
                                            <a href="edit.html?id=${product.id}">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                </svg>
                                            </a>
                                        </td>
                                    </tr>`;
        });

    } catch (error) {
        displayMessage("alert-danger", error, "tbody");
    }
})();