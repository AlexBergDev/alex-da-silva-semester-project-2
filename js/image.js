import redirectUnauthorized from "./components/auth/redirectUnauthorized.js";
import navigation from "./components/admin/navigation.js";

( function() {
    redirectUnauthorized();
    navigation();
}());