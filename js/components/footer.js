import { getUsername } from "../utils/storage.js";

export default function footer() {
    const { pathname } = document.location;

    const container = document.querySelector("footer");

    const username = getUsername();

    let authLink = ``;

    if (username) {
        authLink = `<div class="col-6">
                        <a class="btn btn-outline-dark" href="dashboard.html">Admin</a>
                    </div>`;
    }

    container.innerHTML = `<div class="container py-5 px-4">

                                <hr/>

                                <form class="my-3 mt-5">
                                    <div class="row d-flex justify-content-md-center">
                                    <div class="col-auto">
                                        <h5 class="py-2 pt-0 pt-md-3">Sign up for our newsletter</h5>
                                    </div>
                                    <div class="col-md-5 col-12">
                                        <div class="form-outline form-dark">
                                        <input type="email" id="form5Example21" placeholder="Email address.." class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-auto my-3 my-sm-0">
                                        <button type="submit" class="btn btn-dark shadow">
                                        Subscribe
                                        </button>
                                    </div>
                                    </div>
                                </form>

                                <hr class="d-block d-sm-none" />

                                <div class="row my-4">
                                
                                <div class="col-6 col-md-3 order-sm-1 my-3">
                                    <h5>More</h5>
                                    <ul class="list-unstyled mt-4">
                                    <li class="my-2"><a class="text-dark" href="collections.html">Featured products</a></li>
                                    <li class="my-2"><a class="text-dark" href="collections.html">Collections</a></li>
                                    <li class="my-2"><a class="text-dark" href="collections.html">Black Friday deals</a></li>
                                    <li class="my-2"><a class="text-dark" href="collections.html">Search</a></li>
                                    <li class="my-2"><a class="text-dark" href="collections.html">Gold collection</a></li>
                                    <li class="my-2"><a class="text-dark" href="wishlist.html">Wishlist</a></li>
                                    </ul>
                                </div>

                                <hr class="d-block d-sm-none" />

                                <div class="col-6 col-md-3 order-sm-2 my-3">
                                    <h5>Company</h5>
                                    <ul class="list-unstyled mt-4">
                                    <li class="my-2"><a class="text-dark" href="404.html">About us</a></li>
                                    <li class="my-2"><a class="text-dark" href="404.html">Contact us</a></li>
                                    <li class="my-2"><a class="text-dark" href="404.html">Termes of service</a></li>
                                    <li class="my-2"><a class="text-dark" href="404.html">Privacy policy</a></li>
                                    </ul>
                                </div>

                                <hr class="d-block d-sm-none" />

                                <div class="col-12 col-md-6 order-sm-0 mt-3">
                                    <h5>Social media</h5>
                                    <div class="footer__icons col-12 col-md-6 mb-3 pt-1 mt-4">
                                        <i class="fab fa-facebook"></i>
                                        <i class="fab fa-twitter"></i>
                                        <i class="fab fa-instagram"></i>
                                        <i class="fab fa-pinterest"></i>
                                        <i class="fab fa-google-plus-g"></i>
                                        <i class="fab fa-linkedin-in"></i>
                                    </div>
                                    
                                    ${authLink}

                                </div>

                                </div>
                            </div>
                            <div class="copyright__container text-center p-3 text-white">
                                <p class="p-0 m-0 pb-2 pb-md-0">© 2022 Copyright Arctic Fashion</p>
                            </div>`;
}