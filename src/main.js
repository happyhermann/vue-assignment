import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

import router from "./router/router";

// export const eventBus = new Vue();

loadFonts();

createApp(App).use(vuetify).use(router).mount("#app");
