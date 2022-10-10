import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  publicRuntimeConfig: {
    googleMapsKey: process.env.GOOGLE_MAPS_KEY,
  },
});
