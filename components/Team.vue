<template>
  <div class="team-container">
    <div class="title-text">
      <div class="dash"></div>
      <h2 class="secondary-text">Our Experienced Team</h2>
    </div>
    <h1 class="main-text">Meet The Team</h1>
    <p class="team-description">
      Developers, designers, researcher, and team leaders, we define the spirit
      of our company. Different in what we do but united by the love we put in
      it.
    </p>
    <div class="pictures-container">
      <TeamPhoto
        v-for="(item, index) in teamData"
        :key="index"
        :no="item.no"
        :photo="item.photo"
        :part="item.part"
        :name="item.name"
        :title="item.title"
        :index="index"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const teamData = [
  {
    photo: "jerry-goei.png",
    part: "top",
    name: "Jerry Goei",
    title: "Director",
  },
  {
    photo: "rizal-pramarta.png",
    part: "bottom",
    name: "Rizal Pramarta",
    title: "Advisor",
  },
  {
    photo: "samuel-mulyono.png",
    part: "top",
    name: "Samuel Mulyono",
    title: "Advisor",
  },
  {
    photo: "ditto-widigdo.png",
    part: "bottom",
    name: "Ditto Widigdo",
    title: "CEO",
  },
  {
    photo: "aldino-achmadi.png",
    part: "top",
    name: "Aldino Achmadi",
    title: "VP Delivery & Solutioning",
  },
  {
    photo: "gamma-satria.png",
    part: "bottom",
    name: "Gamma Satria",
    title: "VP Development & Engineering",
  },
  {
    photo: "syaiful-anam.png",
    part: "top",
    name: "M. Syaiful Anam",
    title: "Head of Business Banking",
  },
  {
    photo: "irene-soedarsono.png",
    part: "bottom",
    name: "Irene Soedarsono",
    title: "Head of UI / UX",
  },
];
</script>

<style scoped>
.team-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1173px;
  background: #303030;
  font-family: "Rubik";
}

.title-text {
  display: flex;
  margin-top: 48px;
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
}

.main-text {
  font-weight: 700;
  font-size: 34px;
  line-height: 40px;
  color: #ffffff;
  margin-bottom: 40px;
}

.team-description {
  font-family: "Rubik";
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  width: 576px;
  text-align: center;
  margin-bottom: 64px;
  position: relative;
}

.pictures-container {
  display: flex;
  position: relative;
  flex-wrap: wrap;
  height: 850px;
  width: 1140px;
}

@media only screen and (max-width: 1279px) {
  .team-container {
    height: 1013px;
  }

  .pictures-container {
    height: 690px;
    width: 930px;
  }
}

@media only screen and (max-width: 991px) {
  .team-container {
    height: 829px;
  }

  .pictures-container {
    height: 506px;
    width: 690px;
  }
}

@media only screen and (max-width: 767px) {
  .team-container {
    height: 3897px;
    padding-top: 275px;
  }

  .team-description {
    width: 420px;
  }

  .pictures-container {
    flex-direction: column;
    height: 3280px;
    width: 330px;
  }
}

@media only screen and (max-width: 480px) {
  .team-container {
    height: 1030vw;
    padding-top: 300px;
    padding-bottom: 48px;
  }

  .title-text {
    margin-top: 10vw;
  }

  .dash {
    width: 5.83vw;
    margin-right: 2.5vw;
  }

  .secondary-text {
    margin-bottom: 5vw;
  }

  .team-description {
    width: 85vw;
  }

  .pictures-container {
    height: 883.4vw;
    width: 93.75vw;
  }
}

@media only screen and (max-width: 414px) {
  .team-container {
    height: 1060vw;
    padding-top: 350px;
  }
}

@media only screen and (max-width: 379px) {
  .team-container {
    height: 1090vw;
    padding-top: 385px;
  }
}

@media only screen and (max-width: 349px) {
  .team-container {
    height: 1145vw;
    padding-top: 490px;
  }
}

@media only screen and (max-width: 309px) {
  .team-container {
    height: 1220vw;
    padding-top: 580px;
  }
}
</style>
