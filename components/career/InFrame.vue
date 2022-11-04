<template>
  <div class="inframe-container">
    <div class="title-container">
      <div class="title-text">
        <div class="dash"></div>
        <h2 class="secondary-text">Inframe</h2>
      </div>
      <h1 class="main-text">Awesome Moment</h1>
    </div>
    <div class="photos-container">
      <img :src="useAsset('inframe-1.png')" alt="inframe-1" class="inframe-1" />
      <img :src="useAsset('inframe-2.png')" alt="inframe-2" class="inframe-2" />
      <img :src="useAsset('inframe-3.png')" alt="inframe-3" class="inframe-3" />
    </div>
    <div class="box-left"></div>
    <div class="box-right"></div>
  </div>
</template>

<script setup>
import useAsset from "@/helpers/useAsset";
</script>

<style scoped>
.inframe-container {
  font-family: "Rubik";
  height: 1177px;
  background: #303030;
  padding: 80px 85px;
  position: relative;
}

.title-container {
  position: absolute;
}

img[class^="inframe-"] {
  position: absolute;
  z-index: 2;
  filter: grayscale();
  -webkit-filter: grayscale(100%);
}

img[class^="inframe-"]:hover {
  filter: grayscale();
  -webkit-filter: grayscale(0%);
}

.inframe-1 {
  top: 360px;
  width: 350px;
}

.inframe-2 {
  right: 85px;
  width: 730px;
}

.inframe-3 {
  bottom: 80px;
  right: 85px;
  width: 730px;
}

.box-left {
  position: absolute;
  width: 534.15px;
  height: 470px;
  top: 471px;
  left: 0;
  background: linear-gradient(
    233.86deg,
    rgba(12, 177, 187, 0.45) -127.3%,
    rgba(23, 210, 188, 0.45) 72.77%
  );
}

.box-right {
  position: absolute;
  width: 534.15px;
  height: 470px;
  top: 471px;
  right: 0;
  background: linear-gradient(
    231.63deg,
    rgba(69, 1, 231, 0.4) 14.75%,
    rgba(129, 78, 251, 0.4) 224.06%
  );
}

.title-text {
  display: flex;
}

.dash {
  background: #0cb1bb;
  height: 3px;
  width: 28px;
  margin-top: 9px;
  margin-right: 12px;
  border-radius: 50px;
}

.secondary-text {
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #0cb1bb;
  margin-bottom: 24px;
  text-align: left;
}

.main-text {
  font-weight: 700;
  width: 200px;
  font-size: 34px;
  line-height: 40px;
  color: #ffffff;
  margin-bottom: 40px;
}

@media only screen and (min-width: 1280px) {
  .inframe-container {
    height: 1177px;
    padding: 80px calc(((100vw - 1280px) / 2) + 85px);
  }

  .inframe-2,
  .inframe-3 {
    right: calc(((100vw - 1280px) / 2) + 85px);
  }
}

@media only screen and (max-width: 1279px) {
  .inframe-container {
    height: 97.07vw;
    padding: 7.81vw 5.1vw 7.81vw 4.59vw;
  }

  .inframe-1 {
    top: 26.1vw;
    width: 28.32vw;
  }

  .inframe-2 {
    right: 4.59vw;
    width: 59.57vw;
  }

  .inframe-3 {
    bottom: 7.81vw;
    right: 4.59vw;
    width: 59.57vw;
  }

  .box-left,
  .box-right {
    height: 45.9vw;
    top: 33.2vw;
  }

  .box-left {
    width: 41.41vw;
  }

  .box-right {
    width: 42.1vw;
  }
}

@media only screen and (max-width: 991px) {
  .inframe-container {
    height: 79.38vw;
    padding: 80px 14.1vw;
  }

  img[class^="inframe-"] {
    filter: grayscale();
    -webkit-filter: grayscale(0%);
  }

  .inframe-1 {
    top: 27.81vw;
    width: 28.13vw;
  }

  .inframe-2,
  .inframe-3 {
    right: 14.1vw;
    width: 40.63vw;
  }

  .inframe-3 {
    bottom: 14.58vw;
  }

  .box-left,
  .box-right {
    height: 48.96vw;
    top: 24.58vw;
  }

  .box-left {
    width: 44.17vw;
  }

  .box-right {
    width: 44.9vw;
  }
}

@media only screen and (max-width: 767px) {
  .inframe-container {
    height: auto;
    padding: 80px 10.16vw 0;
  }

  .title-container {
    position: static;
  }

  .main-text {
    width: 100%;
    margin-bottom: 64px;
  }

  .photos-container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  img[class^="inframe-"] {
    position: static;
  }

  .inframe-1 {
    width: 51.56vw;
  }

  .inframe-1,
  .inframe-2 {
    margin-bottom: 30px;
  }

  .inframe-2,
  .inframe-3 {
    width: 79.69vw;
  }

  .inframe-3 {
    margin-bottom: 48px;
  }

  .box-left,
  .box-right {
    display: none;
  }
}

@media only screen and (max-width: 575px) {
  .inframe-container {
    padding: 80px 15px 0;
  }

  .inframe-1 {
    width: 77.1vw;
  }

  .inframe-2,
  .inframe-3 {
    width: 93.75vw;
  }
}

@media only screen and (max-width: 480px) {
  .inframe-1,
  .inframe-2,
  .inframe-3 {
    width: 90.63vw;
  }
}
</style>
