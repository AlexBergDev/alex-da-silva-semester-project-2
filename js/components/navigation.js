import { getUsername } from "../utils/storage.js";
import logoutButton from "./logoutButton.js";

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
                            <button class="btn btn-outline-danger" id="logout">Logout</button>
                            <a class="btn btn-outline-dark" href="dashboard.html">Admin</a>
                            <p class="mt-2 mt-md-3 text-capitalize">Logged in: <strong>${username}</strong></p>
                        </div>

                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>`;
    }

    container.innerHTML = `<nav class="navbar navbar-light bg-dark fixed-top p-0">
                                <div class="container-fluid">

                                <button class="navbar-toggler fs-3 text-white p-1 me-5 me-md-0 rounded-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                    <span><i class="fas fa-bars"></i></span>
                                </button>

                                <a class="navbar-brand" href="/">
                                    <img src="images/brand/logo-white.svg" alt="Arctic Fashion Logo">
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
                                            <button class="btn navigation__icons" type="submit"><i><img src="images/ui/search.svg" alt="Search icon"></i></button>
                                        </a>

                                        <h4 class="text-uppercase my-4 mt-md-5">Collections</h4>

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