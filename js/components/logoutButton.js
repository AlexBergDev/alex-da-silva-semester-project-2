import { clearToken } from "../utils/storage.js";

export default function logoutButton() {
    const button = document.querySelector("#logout");

    if (button) {
        button.onclick = function () {
        
                clearToken();
                location.href = "/";
        };
    }
}