<template>
  <div class="list-container">
    <h4 class="department-name">{{ department }}</h4>
    <div class="jobs-container">
      <div v-for="job in jobs" :key="job.id" class="job-name-container">
        <h5 class="job-name">{{ job.name }}</h5>
        <a
          :href="`/career/${job.id}`"
          @click="setLocalStorage(job)"
          class="apply-button"
          >Apply</a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["department", "jobs"]);
const setLocalStorage = (job) => {
  if (process.client) {
    localStorage.setItem("jobData", JSON.stringify(job));
  }
};
</script>

<style scoped>
.list-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
}

.department-name {
  font-weight: 700;
  font-size: 48px;
  line-height: 57px;
  color: #ffffff;
  margin-bottom: 30px;
}

.jobs-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.job-name-container {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #c4c4c4;
  padding-bottom: 20px;
  margin-left: 20px;
}

.job-name {
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  margin-left: 24px;
}

.apply-button {
  width: 76px;
  height: 36px;
  background: #0cb1bb;
  border-radius: 4px;
  text-align: center;
  padding: 4px 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 28px;
  letter-spacing: 1.25px;
  color: #ffffff;
  text-decoration: none;
  margin-right: 24px;
}

@media only screen and (max-width: 575px) {
  .department-name {
    font-size: 32px;
    line-height: 36px;
  }

  .job-name-container {
    margin-left: 10px;
    margin-right: 10px;
  }

  .job-name {
    width: 170px;
  }
}

@media only screen and (max-width: 360px) {
  .job-name-container {
    padding-bottom: 8px;
    align-items: center;
  }

  .job-name {
    margin-left: 7px;
  }

  .apply-button {
    margin-right: 7px;
  }
}

@media only screen and (max-width: 300px) {
  .job-name-container {
    margin-left: 0;
    margin-right: 0;
  }

  .job-name {
    width: 150px;
  }
}
</style>
