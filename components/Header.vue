<template>
  <nav class="navbar navbar-expand-lg header-container">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img
          src="../assets/logo-primary.png"
          alt="Logo"
          height="58px"
          width="98.41px"
          class="d-inline-block align-text-top logo-primary"
        />
      </a>
      <div style="text-align: right">
        <div class="navbar-buttons-container">
          <button
            class="navbar-toggler navbar-button"
            type="button"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            @click="toggleDropdown"
          >
            <img
              src="../assets/dropdown-open.png"
              alt="Logo"
              height="24px"
              width="35px"
              class="d-inline-block align-text-top dropdown-open-img"
            />
          </button>
          <button
            class="navbar-toggler dropdown-close"
            type="button"
            style="display: none"
            @click="toggleDropdown"
          >
            <img
              src="../assets/dropdown-close.png"
              alt="Logo"
              height="25.92px"
              width="25.92px"
              class="d-inline-block align-text-top dropdown-close-img"
            />
          </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar-text">
            <li class="nav-item">
              <a
                @click="scrollToSection"
                id="link-home"
                class="nav-link"
                aria-current="page"
                href="/#home"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                @click="scrollToSection"
                id="link-about"
                class="nav-link"
                href="/#about"
                >About</a
              >
            </li>
            <div @mouseover="showDropdown" @mouseleave="hideDropdown">
              <li class="nav-item dropdown">
                <a
                  @click="scrollToSection"
                  id="link-projects"
                  class="nav-link dropdown-toggle"
                  href="/#projects"
                  role="button"
                  aria-expanded="false"
                >
                  Projects
                </a>
                <ul class="dropdown-menu navbar-text-dropdown">
                  <li><a class="dropdown-item" href="#">Nobu</a></li>
                  <li><a class="dropdown-item" href="#">Nobu Biz</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Nobu Open Banking</a>
                  </li>
                </ul>
              </li>
            </div>
            <li class="nav-item">
              <a
                @click="scrollToSection"
                id="link-contact"
                class="nav-link"
                href="/#contact"
                >Contact</a
              >
            </li>
            <li class="nav-item">
              <a id="link-career" class="nav-link" href="/career">Career</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <div class="dropdown-container">
    <div class="dropdown-content">
      <div class="dropdown-option">
        <a
          @click="scrollToSection"
          id="link-home"
          href="/#home"
          class="option-text"
          >Home</a
        >
      </div>
      <div class="dropdown-option">
        <a
          @click="scrollToSection"
          id="link-about"
          href="/#about"
          class="option-text"
          >About</a
        >
      </div>
      <div class="dropdown-option">
        <a
          href="/#projects"
          class="option-text"
          @click="showProjects"
          id="link-projects"
          >Projects<span style="margin-left: 10px; font-size: 9px"
            >&#9660;</span
          ></a
        >
      </div>
      <div class="dropdown-projects">
        <div class="dropdown-project">
          <a href="#" class="option-text project-text">Nobu</a>
        </div>
        <div class="dropdown-project">
          <a href="#" class="option-text project-text">Nobu Biz</a>
        </div>
        <div class="dropdown-project">
          <a href="#" class="option-text project-text">Nobu Open Banking</a>
        </div>
      </div>
      <div class="dropdown-option">
        <a
          @click="scrollToSection"
          id="link-contact"
          href="/#contact"
          class="option-text"
          >Contact</a
        >
      </div>
      <div class="dropdown-option">
        <a id="link-career" href="/career" class="option-text">Career</a>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const currentRoute = router.currentRoute.value.fullPath.split("/")[1];

const scrollToSection = (e) => {
  if (!currentRoute || currentRoute[0] === "#") {
    e.preventDefault();
    document.querySelector(e.target.id)?.focus();
    document.querySelector(`#${e.target.id.split("-")[1]}`).scrollIntoView();
  }
};

const toggleDropdown = () => {
  const dropdownContent = document.querySelector(".dropdown-content").style;
  const closeButton = document.querySelector(".dropdown-close").style;
  const optionsButton = document.querySelector(".navbar-button").style;

  dropdownContent.display === "block"
    ? (dropdownContent.display = "none")
    : (dropdownContent.display = "block");
  dropdownContent.position = "fixed";
  dropdownContent["z-index"] = 10;
  closeButton.display === "block"
    ? (closeButton.display = "none")
    : (closeButton.display = "block");
  optionsButton.display === "none"
    ? (optionsButton.display = "inline-block")
    : (optionsButton.display = "none");
};

const showProjects = (e) => {
  if (!currentRoute || currentRoute[0] === "#") {
    e.preventDefault();
    document.querySelector(e.target.id)?.focus();
    document.querySelector(`#${e.target.id.split("-")[1]}`).scrollIntoView();
  }

  const dropdownProjects = document.querySelector(".dropdown-projects")?.style;
  dropdownProjects.display === "block"
    ? (dropdownProjects.display = "none")
    : (dropdownProjects.display = "block");
};

const showDropdown = (e) => {
  if (e.target.querySelector("ul")) {
    e.target.querySelector("ul").classList.add("show");
  }
};

const hideDropdown = (e) => {
  e.target.querySelector("ul").classList.remove("show");
};
</script>

<style scoped>
.navbar {
  --bs-navbar-toggler-border-color: #303030;
}

.header-container {
  padding: 10px 85px;
  background: #303030;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  font-family: "Rubik";
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 3;
}

@media only screen and (min-width: 1280px) {
  .header-container {
    padding: 10px calc((100vw - 1280px) / 2 + 85px);
  }
}

@media only screen and (max-width: 576px) {
  .header-container {
    padding: 10px 40px;
  }
}

@media only screen and (max-width: 480px) {
  .header-container {
    padding: 10px 5%;
  }
}

@media only screen and (max-width: 320px) {
  .header-container {
    padding: 10px 2%;
  }
}

.header-buttons {
  color: #ffffff;
}

.nav-item {
  margin: 10px 30px;
  text-align: center;
}

.nav-link {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  width: 86.65px;
  height: 28px;
  border-radius: 4px;
}

.nav-link:hover {
  color: white;
}

.nav-link:focus {
  color: white;
  background: #0cb1bb;
}

.navbar-text {
  font-size: 16px;
  font-weight: 600;
}

.navbar-text-dropdown a {
  color: white;
}

.navbar-text-dropdown a:hover {
  color: #0cb1bb;
}

.navbar-text-dropdown a:focus {
  background: #424242;
}

.dropdown-toggle {
  width: 100px;
}

.dropdown-item {
  border-bottom: #879ab1 solid 1px;
}

.dropdown-menu {
  --bs-dropdown-min-width: 100px;
  --bs-dropdown-bg: #424242;
  --bs-dropdown-link-hover-bg: #424242;
  border-radius: 0;
  padding: 0 0;
}

.dropdown-content {
  display: none;
  left: 135px;
  right: 135px;
}

.dropdown-option {
  display: flex;
  background: #303030;
  justify-content: right;
  border-bottom: #879ab1 solid 1px;
}

.dropdown-option a:focus {
  background: #0cb1bb;
}

.dropdown-project {
  display: flex;
  background: #424242;
  justify-content: right;
  border-bottom: #879ab1 solid 1px;
}

.option-text {
  color: white;
  border-radius: 4px;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  padding: 4px 12px;
  margin: 10px 10px 10px auto;
  cursor: pointer;
  text-decoration: none;
}

.dropdown-projects {
  display: none;
}

.project-text:hover {
  color: #0cb1bb;
}

@media only screen and (min-width: 992px) {
  .navbar-buttons-container {
    display: none;
  }

  .dropdown-container {
    display: none;
  }
}

@media only screen and (max-width: 768px) {
  .dropdown-content {
    right: 65px;
    left: 65px;
  }
}

@media only screen and (max-width: 576px) {
  .dropdown-content {
    width: 100vw;
    right: 0;
    left: 0;
  }
}

@media only screen and (max-width: 479px) {
  .logo-primary {
    height: auto;
    width: 70px;
  }

  .dropdown-open-img {
    height: auto;
    width: 30px;
  }

  .dropdown-close-img {
    height: auto;
    width: 20px;
  }
}
</style>
