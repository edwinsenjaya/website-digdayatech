<template>
  <div class="info-container">
    <h5 class="sub-heading">Post Date:</h5>
    <p class="detail-info" style="line-height: 18.96px">{{ jobData?.date }}</p>
    <h5 class="sub-heading">Description:</h5>
    <p class="detail-info">{{ jobData?.description }}</p>
    <h5 class="sub-heading">Requirements:</h5>
    <p class="detail-info">{{ jobData?.requirements }}</p>
    <h5 class="sub-heading">Preferred:</h5>
    <p class="detail-info">{{ jobData?.preferred }}</p>
    <a class="see-other" href="/career#vacancies"
      >See other available vacancies
      <span
        ><img
          class="arrow-right"
          :src="useAsset('arrow-right.png')"
          alt="arrow-right" /></span
    ></a>
  </div>
</template>

<script setup>
import useAsset from "@/helpers/useAsset";
let jobData;
if (process.client) {
  jobData = JSON.parse(localStorage.getItem("jobData"));
}
</script>

<style scoped>
.info-container {
  font-family: "Rubik";
  display: flex;
  flex-direction: column;
  width: 59%;
  padding-right: 28px;
}

.sub-heading {
  font-weight: 600;
  font-size: 21px;
  line-height: 24.89px;
  color: #ffffff;
  margin-bottom: 12px;
}

.detail-info {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 24px;
}

.see-other {
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 1.25px;
  color: #0cb1bb;
  margin: 46px auto 120px 25px;
  text-decoration: none;
}

.arrow-right {
  width: 15.75px;
  height: 15.35px;
  margin-left: 5px;
}

@media only screen and (max-width: 1279px) {
  .see-other {
    margin-top: 20px;
  }
}

@media only screen and (max-width: 991px) {
  .see-other {
    margin-top: 18px;
    margin-bottom: 80px;
  }
}

@media only screen and (max-width: 767px) {
  .info-container {
    width: 100%;
    padding-right: 0;
  }

  .see-other {
    margin-bottom: 42px;
  }
}

@media only screen and (max-width: 360px) {
  .see-other {
    margin: 10px auto 50px 0;
  }
}
</style>
