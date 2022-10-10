<template>
  <div :class="`${section}-container`">
    <h4 class="content-title">
      <span
        ><img :src="image" :alt="section" :class="`${section}-image`"
      /></span>
      {{ title }}
    </h4>
    <p class="content-text">
      {{ text }}
    </p>
  </div>
</template>

<script setup lang="ts">
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
</style>
