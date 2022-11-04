<template>
  <div @click="closeModal" class="overlay-success-container">
    <div class="modal-container">
      <h3 class="title">Application Submitted</h3>
      <div class="content-container">
        <img
          :src="useAsset('submit-illustration.png')"
          alt="submit-illustration"
          class="image"
        />
        <p class="text">
          Your application has been submitted<br />We're reviewing your resume
          and will get back to you as soon as possible
        </p>
      </div>
      <div class="button-container">
        <a class="back-button" href="/career">Back to Career Page</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import useAsset from "@/helpers/useAsset";
const closeModal = () => {
  document.querySelector(".overlay-success-container").style.display = "none";
};
</script>

<style scoped>
.overlay-success-container {
  position: fixed;
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 4;
}

.modal-container {
  display: flex;
  flex-direction: column;
  font-family: "Rubik";
  width: 500px;
  height: 496px;
  background: #424242;
  border: 1px solid #a0a0a0;
  border-radius: 4px;
}

.title {
  width: 100%;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  height: 60px;
  padding: 20px 40px 16px;
  border-bottom: 1px solid #879ab1;
  text-align: center;
  margin-bottom: 0;
}

.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 360px;
  border-bottom: 1px solid #879ab1;
  padding: 54px 16px 26px;
}

.image {
  width: 224px;
  height: auto;
  margin-bottom: 35px;
}

.text {
  font-weight: 400;
  width: 75%;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 0;
}

.button-container {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 74px;
  padding: 16px 137px;
}

.back-button {
  width: 226px;
  height: 42px;
  background: #0cb1bb;
  border-radius: 4px;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 1.25px;
  color: #ffffff;
  text-decoration: none;
  padding: 10px 22px;
}

@media only screen and (max-width: 630px) {
  .overlay-success-container {
    padding: 0px 65px;
  }

  .modal-container {
    width: 100%;
    height: auto;
  }

  .text {
    width: 100%;
  }

  .button-container {
    padding: 16px 0;
  }
}

@media only screen and (max-width: 480px) {
  .overlay-success-container {
    padding: 0px 15px;
  }
}

@media only screen and (max-width: 359px) {
  .title {
    padding: 20px 0 16px;
  }

  .content-container {
    padding: 54px 15px 26px;
    height: 375px;
  }

  .image {
    width: 62.4vw;
  }
}
</style>
