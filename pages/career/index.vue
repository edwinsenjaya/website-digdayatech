<template>
  <div>
    <Breadcrumb />
    <CareerCulture />
    <CareerInFrame />
    <CareerTestimony />
    <CareerVacancies />
  </div>
</template>

<script setup lang="ts">
import useAsset from "../../helpers/useAsset";
useHead({
  title: "Digital Daya Teknologi",
  viewport: "width=device-width, initial-scale=1",
  charset: "utf-8",
  link: [
    {
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css",
      rel: "stylesheet",
      integrity:
        "sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT",
      crossorigin: "anonymous",
    },
    { rel: "icon", type: "image/x-icon", href: useAsset("logo-icon.ico") },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "anonymous",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap",
      rel: "stylesheet",
    },
  ],
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",
      integrity:
        "sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8",
      crossorigin: "anonymous",
    },
  ],
});
</script>
