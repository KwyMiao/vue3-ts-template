import { createApp } from "vue";
import router from "./router";
import store from "./stores";
import App from "./App.vue";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import "@/permission"; // permission control

if (import.meta.env.MODE === "development") {
  // import("../mock");
  // require("../mock");
  // import mockXHR = require("../mock");
  // console.log(mockXHR);
  // // const { mockXHR } = require("../mock");
  // // mockXHR();
}

const app = createApp(App);

app.use(router);
app.use(store);
app.use(Antd);

app.mount("#app");
