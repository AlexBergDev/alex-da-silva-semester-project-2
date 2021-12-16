import { getUsername } from "../utils/storage.js";
import logoutButton from "./auth/logoutButton.js";

export default function navigation() {
    const { pathname } = document.location;

    const container = document.querySelector("header");

    const username = getUsername();

    let authLink = `<div class="offcanvas-header">
                        <a class="btn btn-outline-dark" href="login.html">Login</a>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>`;

    if (username) {
        authLink = `<div class="offcanvas-header">
                        
                        <div>

                            <a class="btn btn-outline-dark fs-6" href="admin/dashboard.html">Admin
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ms-1" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </a>

                            <button class="btn btn-outline-danger fs-6" id="logout">Logout
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ms-1" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                            </button>
                            
                            <p class="mt-2 mt-md-3 text-capitalize">Logged in: <strong>${username}</strong></p>
                        </div>

                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>`;
    }

    container.innerHTML = `<nav class="navbar navbar-light bg-dark fixed-top p-0">
                                <div class="container-fluid">

                                <button class="navbar-toggler me-5 p-0 me-md-0 rounded-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" height="25" viewBox="0 0 20 20" fill="white">
                                            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </button>

                                <a class="navbar-brand" href="/">
                                    <svg id="logo-white" xmlns="http://www.w3.org/2000/svg" width="83" height="35" viewBox="0 0 168 70">
                                        <text id="fashion" transform="translate(0 62)" fill="#fff" font-size="35" font-family="HelveticaNeue-Bold, Helvetica Neue" font-weight="700" letter-spacing="0.06em"><tspan x="0" y="0">FASHION</tspan></text>
                                        <text id="Arctic" transform="translate(2 34)" fill="#fff" font-size="35" font-family="HelveticaNeue-Bold, Helvetica Neue" font-weight="700" letter-spacing="0.06em"><tspan x="0" y="0">ARCTIC</tspan></text>
                                        <line id="Line_21" data-name="Line 21" x2="166" transform="translate(1 35.5)" fill="none" stroke="#fff" stroke-width="1"/>
                                        <line id="Line_22" data-name="Line 22" x2="166" transform="translate(1 63)" fill="none" stroke="#fff" stroke-width="3"/>
                                        <line id="Line_23" data-name="Line 23" x2="143" transform="translate(1 8.5)" fill="none" stroke="#fff" stroke-width="3"/>
                                    </svg>
                                </a>

                                <div class="navigation__icons">
                                    <a class="mx-1 mx-md-2 fs-5 text-white me-3" href="wishlist.html"><i class="fas fa-heart"></i></a>
                                    <a class="mx-1 mx-md-2 fs-5 text-white" href="cart.html"><i class="fas fa-shopping-bag"></i></a>
                                </div>
                                
                                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

                                    ${authLink}

                                    <div class="offcanvas-body">
                                    
                                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">

                                        <h4 class="text-uppercase my-3">Search</h4>

                                        <a href="collections.html" class="d-flex mb-4">
                                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                                            <button class="btn navigation__icons" type="submit">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" height="25" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                          </button>
                                        </a>

                                        <h4 class="text-uppercase my-4 mt-md-5">Catalogue</h4>

                                        <li class="nav-item">
                                        <a class="nav-link my-2 ${pathname === "/collections.html" ? "active" : ""}" href="collections.html">All items</a>
                                        </li>
                                        <li class="nav-item">
                                        <a class="nav-link my-2 ${pathname === "/collections.html" ? "active" : ""}" href="collections.html">Black friday deals</a>
                                        </li>
                                        <li class="nav-item">
                                        <a class="nav-link my-2 ${pathname === "/collections.html" ? "active" : ""}" href="collections.html">Jackets</a>
                                        </li>
                                        <li class="nav-item">
                                        <a class="nav-link my-2 ${pathname === "/collections.html" ? "active" : ""}" href="collections.html">T-shirts</a>
                                        </li>
                                        <li class="nav-item">
                                        <a class="nav-link my-2 ${pathname === "/collections.html" ? "active" : ""}" href="collections.html">Jeans</a>
                                        </li>
                                        <li class="nav-item">
                                        <a class="nav-link my-2 ${pathname === "/collections.html" ? "active" : ""}" href="collections.html">Shoes</a>
                                        </li>

                                    </ul>
                                    </div>
                                </div>

                                </div>
                            </nav>`;

    logoutButton();
}