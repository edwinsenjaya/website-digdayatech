<template>
  <div class="career-banner-container" id="career">
    <div class="illustration-image"></div>
    <div class="background-filter"></div>
    <div class="halftone-image"></div>
    <div class="content-container">
      <h3 class="content-title">Expand your career</h3>
      <p class="content-text">
        Multiple lines of text that form the lede, informing new readers quickly
        and efficiently
      </p>
      <a href="/career" class="career-button">Join Us</a>
    </div>
  </div>
</template>

<style scoped>
.career-banner-container {
  display: flex;
  height: 370px;
  justify-content: center;
}

.illustration-image {
  background-image: url("../assets/career-illustration.png");
  background-size: cover;
  width: 100%;
  height: 370px;
  position: absolute;
  background-position: center top;
}

@media only screen and (max-width: 767px) {
  .illustration-image {
    background-position-x: -440px;
  }
}

.background-filter {
  position: absolute;
  height: 370px;
  width: 100%;
  background: rgba(13, 1, 41, 0.85);
}

.halftone-image {
  background-image: url("../assets/halftone-bg.png");
  background-size: cover;
  width: 100%;
  height: 370px;
  position: absolute;
  background-position: center top;
}

.content-container {
  display: flex;
  flex-direction: column;
  font-family: "Rubik";
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
}

.content-title {
  font-weight: 700;
  font-size: 34px;
  line-height: 40px;
  color: #ffffff;
  margin-bottom: 40px;
}

.content-text {
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #ffffff;
  width: 445px;
  margin-bottom: 40px;
  text-align: center;
}

.career-button {
  width: 185px;
  height: 42px;
  color: #ffffff;
  background: #0cb1bb;
  border-radius: 4px;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  text-decoration: none;
  letter-spacing: 1.25px;
}

@media only screen and (max-width: 449px) {
  .career-banner-container,
  .illustration-image,
  .background-filter,
  .halftone-image {
    height: 334px;
  }

  .illustration-image {
    background-position-x: -440px;
  }

  .content-title {
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 8.91vw;
  }

  .content-text {
    width: 95vw;
    margin-bottom: 8.91vw;
  }

  .career-button {
    width: 210px;
  }
}

@media only screen and (max-width: 300px) {
  .content-title {
    text-align: center;
    width: 260px;
  }
}
</style>
