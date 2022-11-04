<template>
  <div class="container-fluid">
    <footer class="py-5 px-5 footer-container">
      <div class="row mt-3">
        <div class="col-6 col-md-2 mb-3 me-4 logo-container">
          <ul class="nav flex-column">
            <li class="nav-item mb-4">
              <a href="#">
                <img
                  src="../assets/logo-primary.png"
                  alt="Logo"
                  height="92px"
                  width="156px"
                  class="d-inline-block align-text-top"
                />
              </a>
            </li>
            <li class="nav-item mb-2">
              <a class="nav-link p-0" style="color: white; font-size: 14px"
                >Subsidiary of</a
              >
              <a href="https://multipolar.com/" target="_blank">
                <img
                  src="../assets/logo-multipolar.png"
                  alt="Logo"
                  height="52px"
                  width="156px"
                  class="d-inline-block align-text-top"
                />
              </a>
            </li>
          </ul>
        </div>

        <div class="col-6 col-md-2 mb-3 ms-4 company-section">
          <h6 class="title">Company</h6>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="/#home" class="text-nav nav-link p-0">Home</a>
            </li>
            <li class="nav-item mb-2">
              <a href="/#about" class="text-nav nav-link p-0">About</a>
            </li>
            <li class="nav-item mb-2">
              <a href="/#contact" class="text-nav nav-link p-0">Contact</a>
            </li>
            <li class="nav-item mb-2">
              <a href="/career" class="text-nav nav-link p-0">Career</a>
            </li>
          </ul>
        </div>

        <div class="col-6 col-md-2 mb-3 me-5 legal-section">
          <h6 class="title">Legal</h6>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="text-nav nav-link p-0">Privacy policy</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="text-nav nav-link p-0">Terms of use</a>
            </li>
          </ul>
        </div>

        <div class="col-6 col-md-2 mb-3 ms-5 socmed-section">
          <h6 class="title">Social Media</h6>
          <div class="col-12" style="display: flex">
            <div class="col-3 me-md-5 me-sm-2">
              <a
                href="https://id.linkedin.com/company/digital-daya-teknologi"
                target="_blank"
              >
                <img
                  src="../assets/linkedin-square.png"
                  alt="linkedin"
                  height="48px"
                  width="48px"
                  class="socmed-logo"
                />
              </a>
            </div>
            <div class="col-3 me-md-5 me-sm-2">
              <a href="#">
                <img
                  src="../assets/youtube-square.png"
                  alt="youtube"
                  height="48px"
                  width="48px"
                  class="socmed-logo"
                />
              </a>
            </div>
            <div class="col-3 me-md-5 me-sm-2">
              <a href="#">
                <img
                  src="../assets/instagram-square.png"
                  alt="instagram"
                  height="48px"
                  width="48px"
                  class="socmed-logo"
                />
              </a>
            </div>
            <div class="col-3 me-md-5 me-sm-2">
              <a href="#">
                <img
                  src="../assets/facebook-square.png"
                  alt="facebook"
                  height="48px"
                  width="48px"
                  class="socmed-logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div class="row" style="background: #1c1f23; justify-content: center">
      <p class="text-center text-copyright">
        &copy; 2022 PT Digital Daya Teknologi. All Rights Reserved.
      </p>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  font-family: "Rubik";
  background: #212529;
  color: white;
}

@media only screen and (min-width: 1280px) {
  .footer-container {
    padding: 3rem calc((100vw - 1280px) / 2 + 3rem) !important;
  }
}

.title {
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 27px;
  color: white;
}

.text-nav {
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 8px;
  color: white;
}

.text-copyright {
  font-size: 14px;
  font-weight: 400;
  margin-top: 25px;
  margin-bottom: 25px;
}

@media only screen and (max-width: 991px) {
  .company-section {
    margin-left: 120px !important;
  }

  .legal-section {
    margin-left: 70px !important;
    margin-right: 100px !important;
  }

  .socmed-section {
    width: 20%;
    margin-left: 0 !important;
  }
}

@media only screen and (max-width: 767px) {
  .company-section {
    width: 25%;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .legal-section {
    width: 25%;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .socmed-section {
    width: 50%;
  }

  .logo-container {
    width: 100%;
    text-align: center;
  }

  .logo-container img {
    width: 239px;
    height: auto;
  }

  .socmed-logo {
    height: 32px;
    width: 32px;
  }
}

@media only screen and (max-width: 575px) {
  .company-section {
    width: 35%;
  }

  .legal-section {
    width: 45%;
  }

  .socmed-section {
    width: 65%;
  }
}

@media only screen and (max-width: 480px) {
  .footer-container {
    padding-right: 20px !important;
    padding-left: 20px !important;
  }

  .company-section {
    width: 55%;
  }

  .legal-section {
    width: 45%;
  }

  .logo-container img {
    width: 170px;
    height: auto;
  }

  .socmed-section {
    width: 90%;
  }
}

@media only screen and (max-width: 380px) {
  .text-copyright {
    width: 260px;
  }
}
</style>
