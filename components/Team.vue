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
    photo: "../../assets/photo.png",
    part: "top",
    name: "Rizal Pramarta",
    title: "CEO / Advisor",
  },
  {
    photo: "../../assets/photo.png",
    part: "top",
    name: "Samuel Mulyono",
    title: "Advisor",
  },
  {
    photo: "../../assets/photo.png",
    part: "top",
    name: "Ditto Widigdo",
    title: "CTO & CPO",
  },
  {
    photo: "../../assets/photo.png",
    part: "bottom",
    name: "Aldino Achmadi",
    title: "VP Delivery & Solutioning",
  },
  {
    photo: "../../assets/photo.png",
    part: "bottom",
    name: "Gamma Satria",
    title: "VP Development & Engineering",
  },
  {
    photo: "../../assets/photo.png",
    part: "bottom",
    name: "M. Syaiful Anam",
    title: "Head of Business Banking",
  },
  {
    photo: "../../assets/photo.png",
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
  height: 1280px;
  background: #303030;
  font-family: "Rubik";
}

.title-text {
  display: flex;
  margin-top: 50px;
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
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #0cb1bb;
  margin-bottom: 30px;
}

.main-text {
  font-weight: 700;
  font-size: 34px;
  line-height: 40px;
  color: #ffffff;
  margin-bottom: 45px;
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
  height: 945px;
  width: 1140px;
}

@media only screen and (max-width: 1279px) {
  .team-container {
    height: 1110px;
  }

  .pictures-container {
    height: 772.5px;
    width: 930px;
  }
}

@media only screen and (max-width: 991px) {
  .team-container {
    height: 900px;
  }

  .pictures-container {
    height: 562.5px;
    width: 690px;
  }
}

@media only screen and (max-width: 794px) {
  .team-container {
    height: 3515px;
    padding-top: 275px;
  }

  .team-description {
    width: 420px;
  }

  .pictures-container {
    flex-direction: column;
  }

  .pictures-container {
    height: 2870px;
    width: 330px;
  }
}

@media only screen and (max-width: 500px) {
  .team-container {
    height: 4375px;
    padding-top: 315px;
  }

  .pictures-container {
    height: 3710px;
    width: 450px;
  }
}
</style>
