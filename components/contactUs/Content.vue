<template>
  <div :class="`${section}-container`">
    <h4 class="content-title">
      <span
        ><img :src="useAsset(image)" :alt="section" :class="`${section}-image`"
      /></span>
      {{ title }}
    </h4>
    <p class="content-text">
      {{ text }}
    </p>
  </div>
</template>

<script setup lang="ts">
import useAsset from "../../helpers/useAsset";
interface ContactUsProps {
  section: string;
  image: string;
  title: string;
  text: string;
}

const contactUsProps = defineProps<ContactUsProps>();
</script>

<style scoped>
div[class$="-container"] {
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  min-width: 540px;
  background: #424242;
  padding-left: 24px;
  padding-right: 24px;
}

.address-container {
  height: 131px;
  margin-bottom: 40px;
}

.address-image {
  height: 35px;
  width: 30.62px;
  margin-right: 34.19px;
  margin-bottom: 2px;
}

.content-title {
  font-weight: 600;
  font-size: 21px;
  line-height: 24.89px;
  color: #ffffff;
  margin-bottom: 12px;
  margin-top: 20px;
}

.content-text {
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 20px;
}

.email-container {
  height: 152px;
  margin-bottom: 39px;
}

.email-image {
  width: 35px;
  height: 26.25px;
  margin-right: 32px;
  margin-bottom: 2px;
}

.phone-container {
  height: 152px;
}

.phone-image {
  width: 35px;
  height: 35px;
  margin-right: 32px;
  margin-bottom: 2px;
}

.phone-container p {
  width: 130px;
}

@media only screen and (max-width: 1279px) {
  div[class$="-container"] {
    min-width: 450px;
  }

  .address-container {
    height: 150px;
  }
}

@media only screen and (max-width: 1079px) {
  div[class$="-container"] {
    min-width: 332px;
  }

  .email-container {
    height: 150px;
  }
}

@media only screen and (max-width: 839px) {
  div[class$="-container"] {
    min-width: 510px;
  }

  .address-container,
  .email-container {
    margin-bottom: 30px;
  }
}

@media only screen and (max-width: 679px) {
  div[class$="-container"] {
    min-width: 450px;
  }
}

@media only screen and (max-width: 479px) {
  div[class$="-container"] {
    min-width: 93.95vw;
    padding-left: 5.01vw;
    padding-right: 5.01vw;
  }

  .address-container {
    height: 31.32vw;
    margin-bottom: 6.26vw;
  }

  .content-title {
    margin-bottom: 2.51vw;
    margin-top: 4.18vw;
  }

  .content-text {
    margin-bottom: 4.18vw;
  }

  .address-image {
    margin-right: 7.138vw;
    margin-bottom: 0.42vw;
  }

  .email-container {
    height: 31.73vw;
    margin-bottom: 8.14vw;
  }

  .email-image {
    margin-right: 6.68vw;
    margin-bottom: 0.42vw;
  }

  .phone-container {
    height: 31.73vw;
  }

  .phone-image {
    margin-right: 6.68vw;
    margin-bottom: 0.42vw;
  }
}

@media only screen and (max-width: 360px) {
  .address-container,
  .email-container {
    height: 150px;
    margin-bottom: 30px;
  }

  .phone-container {
    height: 150px;
  }
}
</style>
