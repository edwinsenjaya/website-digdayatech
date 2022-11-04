<template>
  <div class="carousel-item active">
    <div class="content-container">
      <div class="content-image">
        <img
          src="@/assets/project-nobuneo.png"
          alt="project-image"
          class="project-image"
        />
      </div>
      <div class="content-text">
        <h1>NobuNeo</h1>
        <p>
          Multiple lines of text that form the lede, informing new readers
          quickly and efficiently about what's most interesting in this post's
          contents. Vestibulum faucibus eget erat eget pretium. Donec commodo
          convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
        <button class="button-project-detail">More Detail</button>
        <div class="download-container">
          <a href="#"
            ><img
              src="@/assets/google-play-store.png"
              alt="playstore"
              class="playstore-image"
          /></a>
          <a href="#"
            ><img
              src="@/assets/apple-app-store.png"
              alt="appstore"
              class="appstore-image"
          /></a>
        </div>
      </div>
    </div>
  </div>
  <div class="carousel-item">
    <div class="content-container">
      <div class="content-image">
        <img
          src="@/assets/project-nobuneo.png"
          alt="project-image"
          class="project-image"
        />
      </div>
      <div class="content-text">
        <h1>NobuNeo</h1>
        <p>
          Multiple lines of text that form the lede, informing new readers
          quickly and efficiently about what's most interesting in this post's
          contents. Vestibulum faucibus eget erat eget pretium. Donec commodo
          convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
        <button class="button-project-detail">More Detail</button>
        <div class="download-container">
          <a href="#"
            ><img
              src="@/assets/google-play-store.png"
              alt="playstore"
              class="playstore-image"
          /></a>
          <a href="#"
            ><img
              src="@/assets/apple-app-store.png"
              alt="appstore"
              class="appstore-image"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-container {
  display: flex;
  padding-top: 40px;
  height: 575px;
}

.content-image {
  width: 40%;
  padding-left: 15.6%;
}

.playstore-image {
  width: 165px;
  height: 49px;
  margin-right: 24px;
}

.appstore-image {
  width: 145.84px;
  height: 46.86px;
}

.project-image {
  width: 355px;
  height: 496px;
}

.content-text {
  font-family: "Rubik";
  width: 60%;
  display: flex;
  flex-direction: column;
  padding-left: 5.5%;
  padding-right: 12.1%;
  text-align: left;
  color: #ffffff;
}

.content-text h1 {
  font-weight: 600;
  font-size: 21px;
  line-height: 25px;
  color: #ffffff;
  margin-bottom: 24px;
}

.content-text p {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}

.button-project-detail {
  font-family: "Rubik";
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  width: 148px;
  height: 42px;
  background: #0cb1bb;
  border-radius: 4px;
  color: white;
  border: none;
  margin-top: 50px;
  margin-bottom: 40px;
  letter-spacing: 1.25px;
}

@media only screen and (max-width: 1279px) {
  .content-image {
    padding-left: 12%;
  }
}

@media only screen and (max-width: 991px) {
  .project-image {
    width: 235px;
    height: 364.59px;
  }
}

@media only screen and (max-width: 794px) {
  .content-container {
    flex-direction: column;
    align-items: center;
    height: 850px;
  }

  .content-image {
    padding-left: 0;
    width: 235px;
  }

  .content-text {
    width: 75%;
    padding: 0;
  }
}

@media only screen and (max-width: 575px) {
  .content-container {
    height: 900px;
  }

  .content-text {
    width: 72%;
  }
}

@media only screen and (max-width: 480px) {
  .content-container {
    height: auto;
    padding-top: 8.35vw;
  }

  .content-text {
    width: 95%;
    margin-top: 32px;
  }

  .button-project-detail {
    width: 100%;
    margin-top: 40px;
  }

  .download-container {
    display: flex;
    justify-content: center;
  }

  .playstore-image {
    margin-right: 5.01vw;
  }
}

@media only screen and (max-width: 449px) {
  .download-container {
    flex-direction: column;
    align-items: center;
  }

  .playstore-image {
    margin-right: 0;
    margin-bottom: 17px;
  }
}
</style>
