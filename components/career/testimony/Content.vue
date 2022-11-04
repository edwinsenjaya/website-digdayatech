<template>
  <div class="testi-container">
    <h3 class="testi-text">
      {{ text }}
    </h3>
    <div class="profile-section">
      <img
        :src="useAsset(photo)"
        alt="testimony-photo"
        class="testimony-photo"
      />
      <div class="info-container">
        <p class="info-initials">{{ initials }}</p>
        <p class="info-position">{{ position }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useAsset from "@/helpers/useAsset";
interface TestimonyData {
  text: string;
  photo: string;
  initials: string;
  position: string;
}

const testimonyData = defineProps<TestimonyData>();
</script>

<style scoped>
.testi-container {
  display: flex;
  flex-direction: column;
}

.testi-text {
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 24px;
}

.profile-section {
  display: flex;
}

.testimony-photo {
  margin-right: 30px;
}

.info-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.info-initials {
  font-weight: 600;
  color: #ffffff;
}

.info-position {
  font-weight: 400;
  color: #879ab1;
}
</style>
