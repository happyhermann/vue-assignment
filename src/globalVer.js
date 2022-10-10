import { store } from "./store/store";

export default {
  install(Vue) {
    Vue.config.globalProperties.$store = store;
  },
};
