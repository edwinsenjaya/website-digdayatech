<template>
  <div class="card-container">
    <div class="card-front">
      <div class="image-container">
        <img
          :src="useAsset(image)"
          :alt="`${image}`"
          width="112px"
          height="112px"
          class="illustration-image"
        />
      </div>
      <div class="text-container">
        <h1 class="title-text">{{ title }}</h1>
        <p class="content-text">{{ content }}</p>
      </div>
    </div>
    <div class="card-back"></div>
  </div>
</template>

<script setup lang="ts">
import useAsset from "../../helpers/useAsset";
interface KeyInitiativesProps {
  title: string;
  content: string;
  image: string;
}

const keyInitiativesProps = defineProps<KeyInitiativesProps>();
</script>

<style scoped>
.card-container {
  width: 555px;
  height: 245px;
  margin-bottom: 30px;
  margin-right: 15px;
}

.card-front {
  display: flex;
  height: 230px;
  width: 540px;
  background: #424242;
  margin-top: 15px;
  position: absolute;
  border-radius: 4px;
  padding: auto 20px auto 20px;
}

.card-container:hover .card-front {
  background: #4400e6;
}

.card-back {
  height: 230px;
  width: 540px;
  background: #804dfa;
  margin-left: 15px;
  border-radius: 4px;
}

.card-container:hover .card-back {
  background: #0cb1bb;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32%;
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 68%;
  padding-left: 10px;
}

.title-text {
  font-family: "Rubik";
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  width: 350px;
}

.content-text {
  font-family: "Rubik";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  width: 352px;
}

@media only screen and (max-width: 1189px) {
  .card-container {
    width: 467px;
    height: 280px;
  }

  .card-front {
    width: 450px;
    height: 265px;
  }

  .card-back {
    width: 452px;
    height: 223px;
  }

  .title-text {
    width: 270px;
  }

  .content-text {
    width: 270px;
  }
}

@media only screen and (max-width: 999px) {
  .card-container {
    width: 347px;
    height: 366px;
  }

  .image-container {
    width: 100%;
  }

  .text-container {
    width: 100%;
    padding-left: 0;
    align-items: center;
  }

  .card-front {
    flex-direction: column;
    width: 330px;
    height: 351px;
    justify-content: space-evenly;
  }

  .card-back {
    width: 332px;
    height: 351px;
  }

  .title-text {
    width: 282px;
    text-align: center;
    justify-content: center;
    margin-bottom: 20px;
  }

  .content-text {
    width: 282px;
    text-align: center;
  }
}

@media only screen and (max-width: 767px) {
  .card-container {
    width: 525px;
    height: 210px;
    margin-right: 0;
    margin-left: 15px;
  }

  .image-container {
    width: 32%;
  }

  .text-container {
    width: 68%;
    padding-left: 10px;
  }

  .card-front {
    flex-direction: row;
    width: 510px;
    height: 195px;
    justify-content: flex-start;
  }

  .card-back {
    width: 506px;
    height: 195px;
  }

  .title-text {
    width: 317px;
    text-align: start;
    margin-bottom: 15px;
  }

  .content-text {
    width: 317px;
    text-align: start;
    margin-bottom: 5px;
  }
}

@media only screen and (max-width: 575px) {
  .card-container {
    width: 465px;
    height: 215px;
  }

  .card-front {
    width: 450px;
    height: 200px;
  }

  .card-back {
    width: 445px;
    height: 200px;
  }

  .title-text {
    width: 260px;
  }

  .content-text {
    width: 260px;
  }
}

@media only screen and (max-width: 480px) {
  .card-container {
    width: 93.75vw;
    height: 62.92vw;
    margin-bottom: 30px;
    margin-left: 15px;
    margin-right: 15px;
  }

  .card-front {
    flex-direction: column;
    justify-content: space-between;
    width: 90.63vw;
    height: 59.79vw;
    margin-top: 3.13vw;
    padding: 16px 20px;
  }

  .card-back {
    width: 90.63vw;
    height: 59.79vw;
    margin-left: 3.13vw;
  }

  .image-container {
    width: 100%;
  }

  .text-container {
    width: 100%;
    padding-left: 0;
  }

  .title-text {
    font-size: 21px;
    width: auto;
    text-align: center;
    margin-bottom: 3.13vw;
    line-height: 24.89px;
  }

  .content-text {
    font-size: 16px;
    text-align: center;
    width: auto;
    margin-bottom: 0;
    line-height: 24px;
  }
}

@media only screen and (max-width: 430px) {
  .card-container {
    width: 95.31vw;
    height: 351px;
    margin-bottom: 30px;
    margin-left: 15px;
    margin-right: 15px;
  }

  .card-front {
    flex-direction: column;
    justify-content: space-around;
    width: 90.63vw;
    height: 336px;
    margin-top: 3.5vw;
    padding: 16px 20px;
  }

  .card-back {
    width: 90.63vw;
    height: 336px;
    margin-left: 3.5vw;
  }

  .title-text {
    justify-content: center;
    margin-bottom: 3.5vw;
    line-height: 25px;
    width: 242px;
  }
}

@media only screen and (max-width: 319px) {
  .card-container {
    height: 375px;
  }

  .card-front {
    height: 360px;
    justify-content: space-around;
  }

  .card-back {
    height: 360px;
  }
}
</style>
