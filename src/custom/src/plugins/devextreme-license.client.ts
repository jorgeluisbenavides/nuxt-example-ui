import license from "devextreme/license";
import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin(() => {
  license(import.meta.env.VITE_DEV_EXTREME_LICENSE);
});
