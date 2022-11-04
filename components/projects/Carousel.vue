<template>
  <div id="carouselIndicators" class="carousel slide" data-bs-ride="true">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
    </div>
    <div class="carousel-inner">
      <ProjectsCarouselContent />
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style scoped>
.carousel-control-prev-icon {
  background-image: url(../../assets/prev-icon.png);
  width: 24.85px;
  height: 40.94px;
}

.carousel-control-prev {
  opacity: 1;
}

.carousel-control-next-icon {
  background-image: url(../../assets/next-icon.png);
  width: 24.85px;
  height: 40.94px;
}

.carousel-control-next {
  opacity: 1;
}

.carousel-indicators {
  align-items: center;
}

.carousel-indicators [data-bs-target].active {
  height: 12px;
  width: 28.36px;
  background: #0cb1bb;
  border-radius: 50px;
  border: none;
  margin: 0px 6px;
}

.carousel-indicators [data-bs-target] {
  width: 12px;
  height: 12px;
  background: #d9d9d9;
  border-radius: 50px;
  border: none;
  margin: 0px 6px;
  opacity: 1;
}

@media only screen and (max-width: 480px) {
  .carousel-control-prev,
  .carousel-control-next {
    height: 320px;
  }

  .carousel-indicators {
    bottom: -43px;
  }

  .carousel-indicators [data-bs-target].active {
    height: 2.5vw;
    width: 5.92vw;
    margin: 0px 1.25vw;
  }

  .carousel-indicators [data-bs-target] {
    width: 2.5vw;
    height: 2.5vw;
    margin: 0px 1.25vw;
  }
}
</style>
