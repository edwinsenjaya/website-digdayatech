<template>
  <div class="about-container" id="about">
    <div class="image-container">
      <img
        src="../assets/about-image.png"
        alt="about-image"
        class="about-image"
      />
    </div>
    <div class="text-container">
      <div class="title-text">
        <div class="dash"></div>
        <h2 class="secondary-text">Who We Are</h2>
      </div>
      <h1 class="main-text">
        We are a technology provider and business advisory company
      </h1>
      <p class="content-text">
        We empower traditional banks in their journey to transform into digital
        banks, specifically by providing technology, application,
        infrastructure, product design and commercial support.
        <br />
        <br />
        Our team is led by people with extensive experience in their industries,
        and currently employs more than 90 people.
      </p>
    </div>
  </div>
  <div>
    <h1 class="key-initiatives-title">Our Key Initiatives</h1>
    <div class="cards-container">
      <AboutKeyInitiatives
        v-for="item in keyInitiatives"
        :key="item.title"
        :title="item.title"
        :content="item.content"
        :image="item.image"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const keyInitiatives = [
  {
    title: "Transformational Reorganization",
    content:
      "Commenced in 2020 through creation of Innovation Lab which become embryo of current product development team",
    image: "transformational-reorganization.png",
  },
  {
    title: "Key Talent Recruitment",
    content:
      "Younger generation with mix experience of Digibanks, e-Wallet, Payment, P2P Lending, FMCG and Digital Agency",
    image: "key-talent-recruitment.png",
  },
  {
    title: "Overhaul of Architecture ",
    content:
      "We are implementing the latest technology such as microservice, kubernetes, DevOps, and full cloud infrastructure",
    image: "overhaul-of-architecture.png",
  },
  {
    title: "Hybrid Model",
    content:
      "Building a hybrid model of system development capabilities by leveraging Multipolar Technology as bank's arms length partner",
    image: "hybrid-model.png",
  },
];
</script>

<style scoped>
#about {
  scroll-margin-top: 91px;
}

.about-container {
  position: relative;
  font-family: "Rubik";
  display: flex;
  background: #303030;
}

.main-text {
  font-weight: 700;
  font-size: 34px;
  line-height: 40px;
  width: 550px;
  color: #ffffff;
  margin-bottom: 40px;
}

.secondary-text {
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #0cb1bb;
  margin-bottom: 24px;
  text-align: left;
}

.content-text {
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  width: 542px;
  margin-bottom: 0;
}

.dash {
  background: #0cb1bb;
  height: 3px;
  width: 28px;
  margin-top: 9px;
  margin-right: 12px;
  border-radius: 50px;
}

@media only screen and (min-width: 1280px) {
  .about-container,
  .cards-container {
    padding: 0 calc((100vw - 1280px) / 2);
  }
}

.image-container {
  width: 50%;
  height: 536px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-container {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 536px;
  justify-content: center;
}

.title-text {
  display: flex;
}

@media only screen and (max-width: 639px) {
  .about-container {
    flex-direction: column-reverse;
  }

  .image-container {
    position: absolute;
    top: 266px;
    width: 100%;
    height: auto;
    margin-bottom: 0;
  }

  .text-container {
    width: 100%;
    margin-left: 0;
    padding-left: 60px;
    height: auto;
    margin-top: 55px;
    margin-bottom: 67px;
  }

  .main-text {
    margin-bottom: 360px;
  }
}

@media only screen and (max-width: 574px) {
  .text-container {
    padding-left: 25px;
  }
}

@media only screen and (max-width: 480px) {
  .text-container {
    padding-left: 3.13vw;
    margin-top: 11.48vw;
    margin-bottom: 13.98vw;
  }

  .image-container {
    margin-bottom: 13.98vw;
    top: 50vw;
  }
}

@media only screen and (max-width: 429px) {
  .image-container {
    top: 55vw;
  }
}

@media only screen and (max-width: 379px) {
  .image-container {
    top: 60vw;
  }
}

@media only screen and (max-width: 328px) {
  .image-container {
    top: 77vw;
  }
}

@media only screen and (max-width: 295px) {
  .image-container {
    top: 94vw;
  }
}

@media only screen and (max-width: 1104px) {
  .main-text {
    width: 390px;
  }

  .content-text {
    width: 385px;
  }
}

@media only screen and (max-width: 829px) {
  .main-text {
    width: 320px;
    font-size: 28px;
  }

  .content-text {
    width: 300px;
    font-size: 15px;
  }
}

@media only screen and (max-width: 639px) {
  .main-text {
    width: 512px;
    font-size: 34px;
  }

  .content-text {
    width: 510px;
    font-size: 16px;
  }
}

@media only screen and (max-width: 574px) {
  .main-text {
    width: 450px;
  }

  .content-text {
    width: 448px;
  }
}

@media only screen and (max-width: 480px) {
  #about {
    scroll-margin-top: 74.28px;
  }

  .main-text {
    width: 93.94vw;
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 75vw;
  }

  .dash {
    width: 5.84vw;
    margin-right: 2.5vw;
    border-radius: 10.43vw;
  }

  .secondary-text {
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 30px;
  }

  .content-text {
    font-size: 16px;
    line-height: 24px;
    width: 93.52vw;
  }
}

.about-image {
  width: 540px;
  height: 392px;
}

@media only screen and (max-width: 1149px) {
  .about-image {
    width: 370px;
    height: 273px;
  }
}

@media only screen and (max-width: 829px) {
  .about-image {
    width: 270px;
    height: 199px;
  }
}

@media only screen and (max-width: 639px) {
  .about-image {
    width: 370px;
    height: 273px;
  }
}

@media only screen and (max-width: 479px) {
  .about-image {
    width: 77.24vw;
    height: 57vw;
  }
}

.cards-container {
  font-family: "Rubik";
  display: flex;
  flex-wrap: wrap;
  background: linear-gradient(0deg, #303030, #303030),
    linear-gradient(
      90deg,
      rgba(13, 1, 41, 0.8) 6.14%,
      rgba(13, 1, 41, 0.8) 87.56%
    );
  justify-content: center;
  padding-bottom: 96px;
}

.key-initiatives-title {
  font-family: "Rubik";
  font-weight: 700;
  font-size: 34px;
  line-height: 40px;
  color: #ffffff;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 58px;
  background: #303030;
  margin-bottom: 0;
}

@media only screen and (max-width: 479px) {
  .key-initiatives-title {
    font-size: 7.09vw;
    line-height: 8.35vw;
    padding-top: 4.17vw;
    padding-bottom: 12.1vw;
  }

  .cards-container {
    padding-bottom: 20.04vw;
  }
}
</style>
