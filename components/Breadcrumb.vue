<template>
  <div class="breadcrumb-container">
    <a href="/" class="breadcrumb-text">Home</a>
    <span class="right-arrow">></span>
    <div v-for="(path, index) in currentPath" :key="index">
      <div v-if="index > 0 && index < currentPath.length - 1">
        <a href="/career" class="breadcrumb-text">{{ capitalize(path) }} </a>
        <span class="right-arrow">></span>
      </div>
      <a v-else-if="index > 0" class="breadcrumb-text last">{{
        path === "career" ? capitalize(path) : "Recruitment Details"
      }}</a>
    </div>
  </div>
</template>

<script setup>
const routerBreadcrumb = useRouter();
const currentPath = routerBreadcrumb.currentRoute.value.fullPath.split("/");
const capitalize = (word) => {
  return word[0].toUpperCase() + word.slice(1);
};

if (process.client) {
  const containerStyle = document.querySelector(".breadcrumb-container").style;
  if (currentPath.length === 3) {
    containerStyle.background = "#303030";
  }
}
</script>

<style scoped>
.breadcrumb-container {
  display: flex;
  width: 100%;
  height: 90px;
  padding-left: 85px;
  font-family: "Rubik";
  background: #333333;
  align-items: center;
}

.breadcrumb-text {
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #0cb1bb;
  text-decoration: none;
  margin-right: 10px;
}

.last {
  color: #c4c4c4;
}

.right-arrow {
  color: #ffffff;
  margin-right: 10px;
}

@media only screen and (min-width: 1280px) {
  .breadcrumb-container {
    padding-left: calc((100vw - 1280px) / 2 + 85px);
  }
}

@media only screen and (max-width: 1279px) {
  .breadcrumb-container {
    padding-left: 47px;
  }
}

@media only screen and (max-width: 991px) {
  .breadcrumb-container {
    padding-left: 135px;
  }
}

@media only screen and (max-width: 892px) {
  .breadcrumb-container {
    padding-left: 97px;
  }
}

@media only screen and (max-width: 767px) {
  .breadcrumb-container {
    padding-left: 65px;
  }
}

@media only screen and (max-width: 614px) {
  .breadcrumb-container {
    padding-left: 15px;
  }
}

@media only screen and (max-width: 479px) {
  .breadcrumb-container {
    height: 18.79vw;
    padding-left: 3.13vw;
  }

  .breadcrumb-text {
    margin-right: 2.09vw;
  }

  .right-arrow {
    margin-right: 2.09vw;
  }
}
</style>
