import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/displayMessage.js";
import navigation from "./components/navigation.js";
import renderProducts from "./ui/renderProducts.js";

const url = baseUrl + "/products?featured=true";
const homeUrl = baseUrl + "/home";

navigation();

(async function () {
    const container = document.querySelector(".products-container")

    try {
        const response = await fetch(url);
        const json = await response.json();

        renderProducts(json, container);
    } catch (error) {
        console.log(error);
        displayMessage("alert-danger", error, container);
    }
})();

(async function () {

    try {
        const response = await fetch(homeUrl);
        const home = await response.json();
        
        document.getElementById("jumbotron").style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)), url(${baseUrl + home.hero_banner.url})`;

    } catch (error) {
        displayMessage("alert-danger", error, "jumbotron");
    }
})();