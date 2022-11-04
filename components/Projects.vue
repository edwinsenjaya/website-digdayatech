<template>
  <div class="projects-container" id="projects">
    <div class="parallelogram-right"></div>
    <div class="parallelogram-left"></div>
    <div class="carousel-container">
      <div class="title-text">
        <div class="dash"></div>
        <h2 class="secondary-text">What We Do</h2>
      </div>
      <h1 class="main-text">Our Projects</h1>
      <ProjectsCarousel />
    </div>
  </div>
</template>

<style scoped>
#projects {
  scroll-margin-top: 110px;
}

.projects-container {
  font-family: "Rubik";
  height: 725px;
  position: relative;
  background: #303030;
  display: flex;
  justify-content: center;
}

@media only screen and (min-width: 1280px) {
  .projects-container {
    padding: 0 calc((100vw - 1280px) / 2);
  }
}

.parallelogram-right {
  width: 525px;
  height: 387px;
  transform: rotate(90deg) skew(25deg);
  background: linear-gradient(
    231.63deg,
    rgba(69, 1, 231, 0.4) 14.75%,
    rgba(129, 78, 251, 0.4) 224.06%
  );
  position: absolute;
  right: -69px;
  top: 120px;
}

.parallelogram-left {
  width: 525px;
  height: 382px;
  transform: rotate(90deg) skew(25deg);
  background: linear-gradient(
    233.86deg,
    rgba(12, 177, 187, 0.45) -127.3%,
    rgba(23, 210, 188, 0.45) 72.77%
  );
  position: absolute;
  left: -80px;
  bottom: -205px;
}

@media only screen and (max-width: 991px) {
  .parallelogram-right {
    height: 268px;
    right: -125px;
    top: 150px;
  }

  .parallelogram-left {
    height: 265px;
    left: -130px;
    bottom: -30px;
  }
}

@media only screen and (max-width: 794px) {
  .parallelogram-right {
    height: 204px;
    right: -160px;
    top: 180px;
  }

  .parallelogram-left {
    height: 235px;
    left: -160px;
    bottom: 65px;
  }
}

@media only screen and (max-width: 729px) {
  .parallelogram-right {
    height: 76px;
    right: -224px;
    top: 255px;
  }

  .parallelogram-left {
    height: 53px;
    left: -236px;
    bottom: 150px;
  }
}

@media only screen and (max-width: 575px) {
  .parallelogram-right {
    display: none;
  }

  .parallelogram-left {
    display: none;
  }
}

.carousel-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  text-align: left;
  margin-bottom: 30px;
}

.main-text {
  font-weight: 700;
  font-size: 34px;
  line-height: 40px;
  color: #ffffff;
}

@media only screen and (max-width: 479px) {
  #projects {
    scroll-margin-top: 93.28px;
  }

  .projects-container {
    height: 151.36vw;
  }

  .dash {
    width: 5.85vw;
    margin-right: 2.51vw;
  }

  .secondary-text {
    margin-bottom: 6.26vw;
  }
}

@media only screen and (max-width: 449px) {
  .projects-container {
    height: 178.17vw;
  }
}
</style>
