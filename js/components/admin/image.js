import redirectUnauthorized from "../auth/redirectUnauthorized.js";
import navigation from "./navigation.js";
import uploadWidget from "./uploadWidget.js";

( function() {
    redirectUnauthorized();
    navigation();
    uploadWidget();
}());