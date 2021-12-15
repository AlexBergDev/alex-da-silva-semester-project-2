import renderProducts from "./renderProducts.js";

export default function searchProduct(json, container) {

    const searchProducts = document.querySelector("input#collections-search");

    function searchProduct() {

        const title = event.target.dataset.title;
        const description = event.target.dataset.description;

        const searchValue = event.target.value.trim().toLowerCase();

        let filteredData = json.filter(function (item) {
            if (item[title].toLowerCase().startsWith(searchValue)) {
                return true;
            }
            if (item[description].toLowerCase().startsWith(searchValue)) {
                return true;
            }
        });

        renderProducts(filteredData, container);
    }

    searchProducts.addEventListener("keyup", searchProduct);
}

