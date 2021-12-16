import { DELETE_CONFIRM } from "../../constants/messages.js"
import { baseUrl } from "../../settings/api.js";
import { getToken } from "../../utils/storage.js";

export default function deleteButton(id) {
    const container = document.querySelector(".delete-container");

    container.innerHTML = `<button type="button" class="btn btn-danger shadow text-white d-grid gap-2 col-12 col-md-4 mx-auto delete">Delete</button>`;

    const button = document.querySelector("button.delete");

    button.onclick = async function () {

        const doDelete = confirm(DELETE_CONFIRM);

        if (doDelete) {
            const url = baseUrl + "/products/" + id;

            const token = getToken();

            const options = {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            try {
                await fetch(url, options);

                location.href = "/admin/dashboard.html";
            } catch (error) {
                console.log(error);
            }
        }
    };
}