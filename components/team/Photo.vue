<template>
  <div :class="`${part}-section-${index + 1}`">
    <div class="content-container">
      <img :src="useAsset(photo)" :alt="`${name}`" :class="`photo-team`" />
      <div class="banner">
        <p class="banner-name">{{ name }}</p>
        <p class="banner-title">{{ title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useAsset from "../../helpers/useAsset";
interface TeamPhotoProps {
  photo: string;
  part: string;
  name: string;
  title: string;
  index: number;
}

const teamPhotoProps = defineProps<TeamPhotoProps>();
</script>

<style scoped>
div[class^="top-section-"],
div[class^="bottom-section-"] {
  height: 425px;
  width: 285px;
}

div[class^="bottom-section-"] {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

div[class$="-section-1"],
div[class$="-section-5"] {
  background: #804dfa;
}

div[class$="-section-2"],
div[class$="-section-6"] {
  background: #4400e6;
}

div[class$="-section-3"],
div[class$="-section-7"] {
  background: #17d2bc;
}

div[class$="-section-4"],
div[class$="-section-8"] {
  background: #0cb1bb;
}

.content-container {
  display: flex;
  align-items: flex-end;
  position: relative;
  height: 285px;
  width: 285px;
}

.photo-team {
  height: 285px;
  width: 285px;
  filter: grayscale();
  -webkit-filter: grayscale(100%);
}

.content-container:hover .photo-team {
  filter: grayscale();
  -webkit-filter: grayscale(0%);
}

.banner {
  display: none;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 72px;
  background: rgba(13, 1, 41, 0.8);
}

.content-container:hover .banner {
  display: flex;
}

.banner p {
  color: #ffffff;
  font-family: "Rubik";
  font-size: 16px;
  text-align: center;
  line-height: 19px;
}

.banner-name {
  font-weight: 500;
  margin: 9px auto 16px;
}

.banner-title {
  font-weight: 400;
}

@media only screen and (max-width: 1279px) {
  div[class^="top-section-"],
  div[class^="bottom-section-"] {
    height: 345px;
    width: 232.5px;
  }

  .content-container,
  .photo-team {
    height: 232.5px;
    width: 232.5px;
  }
}

@media only screen and (max-width: 991px) {
  div[class^="top-section-"],
  div[class^="bottom-section-"] {
    height: 253px;
    width: 172.5px;
  }

  .content-container,
  .photo-team {
    height: 172.5px;
    width: 172.5px;
  }

  .photo-team {
    filter: grayscale();
    -webkit-filter: grayscale(0%);
  }

  .banner {
    display: flex;
    height: 64px;
  }

  .banner-name {
    margin: 11px auto 4px;
  }

  div[class$="-section-5"] .banner-name,
  div[class$="-section-6"] .banner-name,
  div[class$="-section-7"] .banner-name {
    margin: 1.5px auto 4px;
  }
}

@media only screen and (max-width: 767px) {
  div[class^="top-section-"],
  div[class^="bottom-section-"] {
    height: 410px;
    width: 330px;
  }

  div[class^="bottom-section-"] {
    justify-content: flex-start;
  }

  .content-container,
  .photo-team {
    height: 330px;
    width: 330px;
  }

  div[class$="-section-5"] .banner-name,
  div[class$="-section-6"] .banner-name,
  div[class$="-section-7"] .banner-name {
    margin: 11px auto 4px;
  }
}

@media only screen and (max-width: 480px) {
  div[class^="top-section-"],
  div[class^="bottom-section-"] {
    height: 110.4167vw;
    width: 93.75vw;
  }

  .content-container,
  .photo-team {
    height: 93.75vw;
    width: 93.75vw;
  }
}
</style>
