<template>
  <div class="contact-us-container" id="contact">
    <div class="title-text">
      <div class="dash"></div>
      <h2 class="secondary-text">Contact Us</h2>
    </div>
    <h1 class="main-text">Get In Touch</h1>
    <div class="content-container">
      <div class="text-container">
        <ContactUsContent
          v-for="item in content"
          :key="item.section"
          :section="item.section"
          :image="item.image"
          :title="item.title"
          :text="item.text"
        />
      </div>
      <div class="map-container">
        <iframe
          class="google-maps"
          style="border: 0; filter: invert(90%)"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          :src="`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJweMrr_fzaS4RsweLo3mTM-g&key=${googleMapsKey}`"
        >
        </iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const googleMapsKey = config.googleMapsKey;

const content = [
  {
    section: "address",
    image: "building.png",
    title: "Address",
    text: "Lippo Kuningan 17th floor , Jl. HR. Rasuna Said Kav. B-12 Setiabudi Jakarta 12940",
  },
  {
    section: "email",
    image: "email.png",
    title: "Email",
    text: "hello@digdayatech.id",
  },
  {
    section: "phone",
    image: "phone.png",
    title: "Phone",
    text: "+621 508 130 84 +621 508 130 85",
  },
];
</script>

<style scoped>
#contact {
  scroll-margin-top: 91px;
}

.contact-us-container {
  font-family: "Rubik";
  height: 745px;
  background: #303030;
  padding: 0 50px;
}

@media only screen and (min-width: 1280px) {
  .contact-us-container {
    padding: 0 calc((100vw - 1280px) / 2 + 50px);
  }
}

.title-text {
  display: flex;
  padding-top: 48px;
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
  margin-bottom: 30px;
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
}

.text-container {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 514px;
}

.map-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 514px;
  width: 50%;
}

.google-maps {
  width: 540px;
  height: 514px;
}

@media only screen and (max-width: 1279px) {
  .map-container {
    height: 518px;
  }

  .google-maps {
    width: 450px;
    height: 518px;
  }
}

@media only screen and (max-width: 1079px) {
  .contact-us-container {
    padding-left: 47px;
    padding-right: 47px;
  }

  .google-maps {
    width: 330px;
    height: 518px;
  }
}

@media only screen and (max-width: 839px) {
  .contact-us-container {
    height: 1220px;
    padding-left: 65px;
    padding-right: 65px;
  }

  .content-container {
    flex-direction: column;
  }

  .text-container,
  .map-container {
    width: 100%;
  }

  .map-container {
    height: 450px;
  }

  .text-container {
    margin-bottom: 30px;
  }

  .google-maps {
    width: 100%;
    height: 450px;
  }
}

@media only screen and (max-width: 615px) {
  .contact-us-container {
    padding-left: 15px;
    padding-right: 15px;
  }
}

@media only screen and (max-width: 480px) {
  #contact {
    scroll-margin-top: 74.28px;
  }

  .contact-us-container {
    height: auto;
    padding-left: 3.13vw;
    padding-right: 3.13vw;
  }

  .title-text {
    padding-top: 10.02vw;
  }

  .dash {
    width: 5.85vw;
    margin-right: 2.51vw;
  }

  .secondary-text {
    margin-bottom: 6.26vw;
  }

  .main-text {
    margin-bottom: 8.35vw;
  }

  .map-container {
    height: 93.95vw;
    margin-bottom: 10vw;
  }

  .text-container {
    margin-bottom: 30px;
    height: 107.31vw;
  }

  .google-maps {
    height: 93.95vw;
  }
}

@media only screen and (max-width: 360px) {
  .text-container {
    height: 515px;
  }

  .map-container,
  .google-maps {
    height: 465px;
  }
}
</style>
