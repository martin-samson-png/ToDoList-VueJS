import "../style/main.css";

import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faListCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faListCheck, faTrash);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
