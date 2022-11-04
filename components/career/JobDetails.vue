<template>
  <div class="job-details-container">
    <div class="title-text">
      <div class="dash"></div>
      <h2 class="secondary-text">Recruitment Details</h2>
    </div>
    <h1 class="main-text">{{ jobData?.name }}</h1>
    <div class="content-container">
      <CareerJobDetailsInfo />
      <CareerJobDetailsForm />
    </div>
  </div>
</template>

<script setup>
let jobData;
if (process.client) {
  jobData = JSON.parse(localStorage.getItem("jobData"));
}
</script>

<style scoped>
.job-details-container {
  background: #303030;
  font-family: "Rubik";
  padding: 0 85px;
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
  padding-bottom: 33px;
  margin-bottom: 0;
}

.content-container {
  display: flex;
}

@media only screen and (min-width: 1280px) {
  .job-details-container {
    padding: 0 calc((100vw - 1280px) / 2 + 85px);
  }
}

@media only screen and (max-width: 1279px) {
  .job-details-container {
    padding: 0 47px;
  }
}

@media only screen and (max-width: 991px) {
  .job-details-container {
    padding: 0 135px;
  }
}

@media only screen and (max-width: 767px) {
  .job-details-container {
    padding: 0 65px;
  }

  .content-container {
    flex-direction: column;
  }
}

@media only screen and (max-width: 480px) {
  .job-details-container {
    padding: 0 15px;
  }

  .main-text {
    font-size: 28px;
    line-height: 32px;
  }
}
</style>
