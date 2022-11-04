<template>
  <div class="testimony-container">
    <div class="title-text">
      <div class="dash"></div>
      <h2 class="secondary-text">What They Said</h2>
    </div>
    <h1 class="main-text">Testimonials</h1>
    <div class="top-section">
      <img
        :src="useAsset('testimony-image.png')"
        alt="testimony-image"
        class="testimony-image"
      />
      <CareerTestimonyContent
        :text="mainTestimnonyData.text"
        :photo="mainTestimnonyData.photo"
        :initials="mainTestimnonyData.initials"
        :position="mainTestimnonyData.position"
      ></CareerTestimonyContent>
    </div>
    <div class="bottom-section">
      <CareerTestimonyContent
        v-for="(item, index) in subTestimnonyData"
        :key="index"
        :text="item.text"
        :photo="item.photo"
        :initials="item.initials"
        :position="item.position"
      ></CareerTestimonyContent>
    </div>
  </div>
</template>

<script setup>
import useAsset from "@/helpers/useAsset";
const mainTestimnonyData = {
  text: "Continuously improvement. Continuously increase the capability of self working unit and organization to obtain the best results. Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. ",
  photo: "testimony-photo.png",
  initials: "E. S.",
  position: "Frontend Engineer",
};

const subTestimnonyData = [
  {
    text: "Continuously improvement. Continuously increase the capability of self working unit and organization to obtain the best results. Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. ",
    photo: "testimony-photo.png",
    initials: "C. D.",
    position: "Frontend Engineer",
  },
  {
    text: "Continuously improvement. Continuously increase the capability of self working unit and organization to obtain the best results. Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. ",
    photo: "testimony-photo.png",
    initials: "T. A.",
    position: "Frontend Engineer",
  },
  {
    text: "Continuously improvement. Continuously increase the capability of self working unit and organization to obtain the best results. Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. ",
    photo: "testimony-photo.png",
    initials: "N. D.",
    position: "Frontend Engineer",
  },
];
</script>

<style>
.testimony-container {
  display: flex;
  flex-direction: column;
  background: #303030;
  font-family: "Rubik";
  height: 840px;
  padding: 48px 85px;
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
  font-size: 34px;
  line-height: 40px;
  color: #ffffff;
  margin-bottom: 48px;
}

.top-section {
  display: flex;
  margin-bottom: 31px;
}

.testimony-image {
  width: 445px;
  margin-right: 32px;
}

.bottom-section {
  display: flex;
  justify-content: space-between;
}

.bottom-section .testi-container {
  width: 350px;
}

.top-section .testi-text {
  font-size: 21px;
  line-height: 28px;
}

.bottom-section .testi-text {
  font-size: 16px;
  line-height: 19px;
}

.top-section .testimony-photo {
  width: 158px;
}

.bottom-section .testimony-photo {
  width: 65px;
}

.top-section .info-initials,
.top-section .info-position {
  font-size: 21px;
  line-height: 25px;
}

.top-section .info-initials {
  margin-bottom: 14px;
}

.bottom-section .info-initials,
.bottom-section .info-position {
  font-size: 16px;
  line-height: 19px;
}

.bottom-section .info-initials {
  margin-bottom: 7px;
}

@media only screen and (min-width: 1280px) {
  .testimony-container {
    padding: 48px calc((100vw - 1280px) / 2 + 85px);
  }
}

@media only screen and (max-width: 1279px) {
  .testimony-container {
    height: 77.64vw;
    justify-content: center;
    padding: 4.7vw 4.6vw;
  }

  .top-section .testimony-photo {
    width: 12.7vw;
  }

  .testimony-image {
    width: 36.23vw;
    height: 28.13vw;
    margin-right: 2.83vw;
  }

  .bottom-section {
    justify-content: center;
    gap: 3vw;
  }
}

@media only screen and (max-width: 991px) {
  .testimony-container {
    height: 93.23vw;
    padding: 5vw 14.1vw;
  }

  .testimony-image {
    width: 28.13vw;
    height: 21.8vw;
    margin-right: 3.13vw;
  }

  .top-section .testimony-photo {
    width: 9.38vw;
    height: 9.38vw;
  }

  .bottom-section {
    justify-content: center;
    gap: 3.13vw;
  }

  .bottom-section .testimony-photo {
    height: 65px;
  }
}

@media only screen and (max-width: 899px) {
  .top-section {
    align-items: center;
  }

  .testimony-container {
    height: 120vw;
  }
}

@media only screen and (max-width: 767px) {
  .testimony-container {
    height: 229.84vw;
    padding: 7.5vw 10.16vw;
  }

  .testimony-image {
    width: 69.53vw;
    height: 53.91vw;
    margin-right: 0;
    margin-bottom: 3.75vw;
  }

  .top-section,
  .bottom-section {
    flex-direction: column;
  }

  .top-section .testimony-photo {
    width: 14.1vw;
    height: 14.1vw;
  }

  .bottom-section {
    gap: 5vw;
  }

  .bottom-section .testi-container {
    width: 100%;
  }
}

@media only screen and (max-width: 629px) {
  .testimony-container {
    height: 260vw;
  }
}

@media only screen and (max-width: 575px) {
  .testimony-container {
    height: 300vw;
    padding: 10vw 15px;
  }

  .testimony-image {
    width: 92.71vw;
    height: 71.88vw;
    margin-bottom: 5vw;
  }

  .top-section .testimony-photo {
    width: 18.8vw;
    height: 18.8vw;
  }

  .bottom-section {
    gap: 6.67vw;
  }
}

@media only screen and (max-width: 519px) {
  .testimony-container {
    height: 322.5vw;
  }
}

@media only screen and (max-width: 479px) {
  .testimony-container {
    height: 400vw;
  }

  .testimony-image {
    width: 90.63vw;
    height: 70.31vw;
    margin-bottom: 24px;
  }

  .bottom-section {
    gap: 32px;
  }
}

@media only screen and (max-width: 400px) {
  .testimony-container {
    height: 450vw;
  }
}

@media only screen and (max-width: 359px) {
  .testimony-container {
    height: 490vw;
  }
}

@media only screen and (max-width: 329px) {
  .testimony-container {
    height: 540vw;
  }
}

@media only screen and (max-width: 300px) {
  .testimony-container {
    height: 639.64vw;
  }
}
</style>
