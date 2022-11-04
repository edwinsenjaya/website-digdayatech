<template>
  <div class="culture-container">
    <div class="title-text">
      <div class="dash"></div>
      <h2 class="secondary-text">Team and Culture</h2>
    </div>
    <h1 class="main-text">Career</h1>
    <div class="content-container">
      <div class="image-container">
        <img
          src="@/assets/career-culture.png"
          alt="career-culture"
          class="culture-image"
        />
      </div>
      <div class="text-container">
        <h4 class="title-content">Passionate, Creative & Growth-minded</h4>
        <p class="text-content">
          Our team is young, creative, and passionate. We have more than 50
          employees with their diverse experience working in start-up companies.
          Supported by our merit-based environment, our team is encouraged to
          work at their full potential. We also provide them with opportunities
          to grow personally and professionally.
        </p>
      </div>
    </div>
  </div>
  <CareerCultureBenefit />
</template>

<style scoped>
.culture-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 439px;
  background: #333333;
  padding: 0 85px;
  font-family: "Rubik";
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
  margin-bottom: 40px;
}

.content-container {
  display: flex;
  justify-content: space-evenly;
}

.image-container {
  display: flex;
  justify-content: center;
  width: 540px;
}

.culture-image {
  width: 540px;
  height: 266px;
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 540px;
  margin-left: 30px;
}

.title-content {
  font-weight: 600;
  font-size: 21px;
  line-height: 25px;
  color: #ffffff;
  margin-bottom: 32px;
}

.text-content {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
}

@media only screen and (min-width: 1280px) {
  .culture-container {
    padding: 0 calc((100vw - 1280px) / 2 + 85px);
  }
}

@media only screen and (max-width: 1279px) {
  .culture-container {
    padding-left: 47px;
    padding-right: 47px;
  }

  .image-container,
  .text-container {
    width: 450px;
  }

  .culture-image {
    width: 449px;
    height: 221px;
  }
}

@media only screen and (max-width: 960px) {
  .culture-container {
    padding-left: 135px;
    padding-right: 135px;
  }

  .image-container {
    width: 270px;
  }

  .culture-image {
    width: 270px;
    height: 133px;
  }

  .text-container {
    width: 390px;
  }
}

@media only screen and (max-width: 892px) {
  .culture-container {
    padding-left: 47px;
    padding-right: 47px;
  }

  .title-text,
  .main-text {
    margin-left: 50px;
  }
}

@media only screen and (max-width: 767px) {
  .culture-container {
    padding-left: 65px;
    padding-right: 65px;
    height: 650px;
  }

  .content-container {
    flex-direction: column;
    align-items: center;
  }

  .image-container {
    margin-bottom: 48px;
  }

  .text-container {
    margin-left: 0;
  }

  .image-container,
  .text-container {
    width: 510px;
  }

  .culture-image {
    width: 510px;
    height: 251px;
  }

  .title-text,
  .main-text {
    margin-left: 0;
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

@media only screen and (max-width: 479px) {
  .culture-container {
    padding-left: 3.13vw;
    padding-right: 3.13vw;
    height: auto;
  }

  .dash {
    width: 5.85vw;
    margin-right: 2.51vw;
  }

  .secondary-text {
    margin-bottom: 5.01vw;
  }

  .main-text {
    margin-bottom: 8.35vw;
  }

  .image-container {
    width: 93.95vw;
  }

  .culture-image {
    width: 93.95vw;
    height: 46.35vw;
  }

  .text-container {
    width: 93.95vw;
  }

  .title-content {
    margin-bottom: 6.68vw;
  }

  .text-content {
    margin-bottom: 48px;
  }
}
</style>
