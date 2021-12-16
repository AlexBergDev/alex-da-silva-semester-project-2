import redirectUnauthorized from "../auth/redirectUnauthorized.js";
import navigation from "./navigation.js";

( function() {
    redirectUnauthorized();
    navigation();
}());