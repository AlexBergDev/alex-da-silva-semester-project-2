const tokenKey = "token";
const userKey = "user";

export function saveToken(token) {
    saveToStorage(tokenKey, token);
}

export function getToken() {
    return getFromStorage(tokenKey);
}

export function saveUser(user) {
    saveToStorage(userKey, user);
}

export function getUsername() {
    const user = getFromStorage(userKey);

    if (user) {
        return user.username;
    }

    return null;
}

export function clearToken() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key) {
    const value = localStorage.getItem(key);

    if (!value) {
        return null;
    }

    return JSON.parse(value);
}

export function getBookmarks() {
    const favs = localStorage.getItem("bookmarks");

    if (favs === null) {
        return [];
    } else {
        return JSON.parse(favs);
    }
}

export function saveBookmarks(favs) {
    localStorage.setItem("bookmarks", JSON.stringify(favs));
}

export function getCart() {
    const cartItems = localStorage.getItem("cart");

    if (cartItems === null) {
        return [];
    } else {
        return JSON.parse(cartItems);
    }
}

export function saveCart(cartItems) {
    localStorage.setItem("cart", JSON.stringify(cartItems));
}