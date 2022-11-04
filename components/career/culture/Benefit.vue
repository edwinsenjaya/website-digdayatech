<template>
  <div class="benefit-container">
    <h2 class="benefit-title">Fun and Exciting Startup Culture</h2>
    <div class="benefit-items-container">
      <div v-for="item in benefitsData" :key="item.name" class="benefit-item">
        <img :src="useAsset(item.name)" :alt="item.name" class="item-image" />
        <div class="item-text-container">
          <h4 class="item-text">{{ item.text }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useAsset from "@/helpers/useAsset";

const benefitsData = [
  {
    name: "learn-and-dev.png",
    text: "Learning & Development Opportunity",
  },
  {
    name: "casual-environment.png",
    text: "Casual Environment",
  },
  {
    name: "fun-community.png",
    text: "Fun Community",
  },
  {
    name: "life-insurance.png",
    text: "Private Health & Life Insurance",
  },
  {
    name: "flexible-time.png",
    text: "Flexible Working Arrangement",
  },
  {
    name: "performance-bonus.png",
    text: "Performance Bonus",
  },
];
</script>

<style scoped>
.benefit-container {
  display: flex;
  flex-direction: column;
  height: 397px;
  background: #424242;
  font-family: "Rubik";
  padding: 48px 85px;
}

.benefit-title {
  font-weight: 700;
  font-size: 34px;
  line-height: 40px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 48px;
}

.benefit-items-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.benefit-item {
  display: flex;
  width: 350px;
  height: 86px;
  margin-bottom: 24px;
}

.item-image {
  height: 86px;
  width: 86px;
}

.item-text-container {
  display: flex;
  align-items: center;
  width: 240px;
  padding-left: 16px;
}

.item-text {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
}

@media only screen and (min-width: 1280px) {
  .benefit-container {
    padding: 48px calc((100vw - 1280px) / 2 + 85px);
  }
}

@media only screen and (max-width: 1279px) {
  .benefit-item {
    width: 280px;
  }
}

@media only screen and (max-width: 1009px) {
  .benefit-item {
    width: 250px;
  }
}

@media only screen and (max-width: 919px) {
  .benefit-item {
    width: 210px;
  }
}

@media only screen and (max-width: 799px) {
  .benefit-container {
    height: 526px;
    align-items: center;
    padding-right: 65px;
    padding-left: 65px;
  }

  .benefit-title {
    width: 510px;
  }

  .benefit-item {
    width: 240px;
  }
}

@media only screen and (max-width: 614px) {
  .culture-container {
    padding-left: 15px;
    padding-right: 15px;
  }

  .image-container,
  .text-container {
    width: 450px;
  }

  .culture-image {
    width: 450px;
    height: 222px;
  }
}

@media only screen and (max-width: 609px) {
  .benefit-container {
    padding-right: 15px;
    padding-left: 15px;
  }

  .benefit-items-container {
    justify-content: space-around;
  }

  .benefit-title {
    width: 368px;
  }

  .benefit-item {
    width: 210px;
  }
}

@media only screen and (max-width: 480px) {
  .benefit-container {
    height: auto;
    padding-right: 2.5vw;
    padding-left: 2.5vw;
  }

  .benefit-title {
    font-size: 28px;
    line-height: 32px;
    width: 77vw;
  }

  .benefit-item {
    width: 43.84vw;
    height: 17.95vw;
    margin-bottom: 5.01vw;
  }

  .item-image {
    height: 17.95vw;
    width: 17.95vw;
  }

  .item-text-container {
    width: 50.1vw;
    padding-left: 2vw;
  }

  .item-text {
    width: 98px;
  }
}

@media only screen and (max-width: 374px) {
  .benefit-container {
    height: auto;
    padding-right: 0;
    padding-left: 0;
  }

  .benefit-items-container {
    justify-content: flex-start;
  }

  .benefit-item {
    margin-right: 5.94vw;
  }

  .item-image {
    height: 56px;
    width: 56px;
  }

  .item-text-container {
    padding-left: 0;
  }
}

@media only screen and (max-width: 319px) {
  .benefit-title {
    width: 250px;
  }

  .benefit-item {
    margin-bottom: 30px;
  }

  .item-image {
    height: 40px;
    width: 40px;
  }
}
</style>
