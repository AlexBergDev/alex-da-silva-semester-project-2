import { getUsername } from "../../utils/storage.js";
import logoutButton from "../auth/logoutButton.js";

export default function navigation() {

    const container = document.querySelector("header");

    const username = getUsername();

    container.innerHTML = `<nav class="navbar navbar-light bg-light sborder shadow-sm fixed-top p-1">
                                <div class="container-fluid">

                                    <div class="navigation__icons">
                                        <a class="mx-1 mx-md-2" href="/" tabindex="0">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 m-1" height="25" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                            </svg>
                                        </a>
                                    </div>

                                    <p class="mt-1 m-0 text-capitalize">Logged in: <strong>${username}</strong></p>

                                    <div class="navigation__icons">
                                        <div class="mx-1 mx-md-2 btn btn-danger shadow text-white p-1" id="logout">

                                            <div class="d-none d-md-block px-1">Logout</div>

                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 m-0 d-block d-md-none" height="25" fill="none" viewBox="0 0 24 24" stroke="white">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                            </svg>

                                        </div>
                                    </div>

                                </div>
                            </nav>`;

    logoutButton();
}