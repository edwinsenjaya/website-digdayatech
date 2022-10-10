<template>
  <div
    :class="
      part === 'top'
        ? `${part}-section-${index + 1}`
        : `${part}-section-${index - 2}`
    "
  >
    <div :class="part === 'top' ? `${part}-container` : `${part}-container`">
      <img :src="photo" :alt="`${name}`" :class="`photo-${part}`" />
      <div class="banner">
        <p class="banner-name">{{ name }}</p>
        <div class="title-container">
          <p class="banner-title">{{ title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
div[class^="top-section-"] {
  height: 520px;
  width: 380px;
}

.top-section-1 {
  background: #4400e6;
}

.top-section-2 {
  background: #804dfa;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.top-section-3 {
  background: #0cb1bb;
}

.photo-top {
  height: 380px;
  width: 380px;
  filter: grayscale();
  -webkit-filter: grayscale(100%);
}

div[class^="bottom-section-"] {
  height: 425px;
  width: 285px;
}

.bottom-section-1 {
  background: #804dfa;
}

.bottom-section-2 {
  background: #4400e6;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.bottom-section-3 {
  background: #0cb1bb;
}

.bottom-section-4 {
  background: #0cb1bb;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.photo-bottom {
  height: 285px;
  width: 285px;
  filter: grayscale();
  -webkit-filter: grayscale(100%);
}

.top-container {
  display: flex;
  position: relative;
  height: 380px;
  width: 380px;
  align-items: flex-end;
}

.bottom-container {
  display: flex;
  position: relative;
  height: 285px;
  width: 285px;
  align-items: flex-end;
}

.banner {
  display: none;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 72px;
  background: rgba(13, 1, 41, 0.8);
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
  margin-bottom: 9px;
}

.title-container {
  display: flex;
  justify-content: center;
}

.top-container:hover .photo-top,
.bottom-container:hover .photo-bottom {
  filter: grayscale();
  -webkit-filter: grayscale(0%);
}

.top-container:hover .banner,
.bottom-container:hover .banner {
  display: block;
}

@media only screen and (max-width: 1279px) {
  div[class^="top-section-"] {
    height: 425px;
    width: 310px;
  }

  div[class^="bottom-section-"] {
    height: 347.5px;
    width: 232.5px;
  }

  .photo-top,
  .top-container {
    height: 310px;
    width: 310px;
  }

  .photo-bottom,
  .bottom-container {
    height: 232.5px;
    width: 232.5px;
  }

  .banner-name {
    margin: 3px auto 10px;
  }

  .banner-title {
    max-width: 75%;
  }
}

@media only screen and (max-width: 991px) {
  div[class^="top-section-"] {
    height: 310px;
    width: 230px;
  }

  div[class^="bottom-section-"] {
    height: 252.5px;
    width: 172.5px;
  }

  .photo-top,
  .top-container {
    filter: grayscale();
    -webkit-filter: grayscale(0%);
    height: 230px;
    width: 230px;
  }

  .photo-bottom,
  .bottom-container {
    filter: grayscale();
    -webkit-filter: grayscale(0%);
    height: 172.5px;
    width: 172.5px;
  }

  .banner {
    display: flex;
    height: 64px;
  }

  .banner-name {
    margin: 2px auto 5px;
  }
}

@media only screen and (max-width: 794px) {
  div[class^="top-section-"],
  div[class^="bottom-section-"] {
    height: 410px;
    width: 330px;
  }

  .top-section-2 {
    justify-content: flex-start;
  }

  .bottom-section-2,
  .bottom-section-4 {
    justify-content: flex-start;
  }

  .photo-top,
  .top-container,
  .photo-bottom,
  .bottom-container {
    height: 330px;
    width: 330px;
  }

  .banner-name {
    margin: 7px auto 8px;
  }

  .banner-title {
    max-width: 100%;
  }
}

@media only screen and (max-width: 500px) {
  div[class^="top-section-"],
  div[class^="bottom-section-"] {
    height: 530px;
    width: 450px;
  }

  .photo-top,
  .top-container,
  .photo-bottom,
  .bottom-container {
    height: 450px;
    width: 450px;
  }
}
</style>
