import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  publicRuntimeConfig: {
    googleMapsKey: process.env.GOOGLE_MAPS_KEY,
    recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY,
    recaptchaSecretKey: process.env.RECAPTCHA_SECRET_KEY,
  },
});
