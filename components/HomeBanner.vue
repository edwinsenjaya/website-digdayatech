<template>
  <section id="home">
    <div class="text-container">
      <div class="title-text">
        <div class="dash"></div>
        <h2 class="secondary-text">SUCCESS YOUR BUSINESS</h2>
      </div>
      <h1 class="main-text">
        We provide the best product to support your business
      </h1>
    </div>
  </section>
</template>

<style scoped>
#home {
  scroll-margin-top: 91px;
}

section {
  background-image: url("../assets/office-ddt.png");
  background-size: cover;
  background-position: 0px -78px;
  height: 680px;
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 680px;
  margin-left: 85px;
}

.title-text {
  display: flex;
}

.main-text {
  font-family: "Rubik";
  font-weight: 700;
  font-size: 57px;
  line-height: 68px;
  width: 875px;
  margin-bottom: 40px;
  color: #ffffff;
  letter-spacing: 0.005em;
}

.secondary-text {
  font-family: "Rubik";
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 30px;
  color: #ffffff;
}

.dash {
  background: white;
  height: 3px;
  width: 28px;
  margin-top: 12px;
  margin-right: 12px;
  border-radius: 50px;
}

@media only screen and (max-width: 1045px) {
  section {
    background-position: -100px -78px;
    height: 680px;
  }
}

@media only screen and (max-width: 960px) {
  .main-text {
    width: 675px;
  }
}

@media only screen and (max-width: 910px) {
  section {
    background-position: -525px -78px;
    height: 872px;
  }

  .text-container {
    height: 872px;
  }

  .main-text {
    width: 675px;
  }
}

@media only screen and (max-width: 768px) {
  section {
    background-position: -455px -100px;
    height: 720px;
  }

  .text-container {
    height: 720px;
  }

  .main-text {
    width: 500px;
  }
}

@media only screen and (max-width: 716px) {
  section {
    background-position: -500px -100px;
    height: 720px;
  }

  .text-container {
    height: 720px;
    margin-left: 65px;
  }

  .main-text {
    width: 490px;
  }
}

@media only screen and (max-width: 575px) {
  section {
    background-position: -600px -100px;
    height: 720px;
  }

  .text-container {
    height: 720px;
    margin-left: 15px;
  }

  .main-text {
    width: 450px;
  }
}
</style>
