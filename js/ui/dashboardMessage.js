import { getUsername } from "../utils/storage.js";
import { getToken } from "../utils/storage.js";

const token = getToken();

export default function dashboardMessage() {
    const message = document.querySelector(".dashboard-message");

    const username = getUsername();

    if (token) {
        message.innerHTML = `<div class="dashboard-message h1 text-white mb-4 mt-3 mt-md-5">Welcome back, ${username}.</div>`;
    }
}