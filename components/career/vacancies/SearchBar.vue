<template>
  <div class="search-bar-container">
    <select
      @change="changeDepartment"
      v-model="selectedDepartment"
      class="form-select select-button"
    >
      <option selected value="all">All departments</option>
      <option
        v-for="job in jobsData"
        :key="job.department"
        :value="job.department"
      >
        {{ job.department }}
      </option>
    </select>
    <input
      @keydown="searchJob"
      placeholder="Search..."
      type="text"
      class="search-input"
      v-model="searchQuery"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import useAsset from "@/helpers/useAsset";
const props = defineProps(["jobsData"]);
const emit = defineEmits(["filterJobs", "searchJobs"]);
const selectedDepartment = ref("all");
const searchQuery = ref("");

const changeDepartment = () => emit("filterJobs", selectedDepartment.value);

const debounce = (func, delay) => {
  let timeout;

  return () => {
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      func();
    }, delay);
  };
};

const searchJob = debounce(() => {
  emit("searchJobs", searchQuery.value);
}, 300);
</script>

<style scoped>
.search-bar-container {
  display: flex;
  background: #424242;
  font-family: "Rubik";
  width: 920px;
  height: 100px;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.25);
  padding: 29px 28.75px;
  margin-bottom: 14px;
}

.select-button {
  width: 331px;
  height: 42px;
  margin-right: 24px;
  background: #0cb1bb;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.05em;
  color: #ffffff;
  background-image: url("@/assets/dropdown-symbol.png");
  background-repeat: no-repeat;
  background-position: right 24px center;
  background-size: 17.91px 10.87px;
  border: none;
  border-radius: 4px;
  padding-left: 24px;
  padding-right: 24px;
}

.search-input {
  width: 507.5px;
  height: 42px;
  background: #414141;
  border: 1px solid #a0a0a0;
  border-radius: 4px;
  padding-left: 29.25px;
  padding-right: 29.25px;
  color: #d1d1d1;
}

::placeholder {
  font-size: 16px;
  line-height: 19px;
  color: #d1d1d1;
}

@media only screen and (max-width: 1279px) {
  .search-bar-container {
    width: 75vw;
  }

  .select-button {
    width: 24.32vw;
  }

  .search-input {
    width: 43.26vw;
  }
}

@media only screen and (max-width: 991px) {
  .search-bar-container {
    width: 59.4vw;
  }

  .select-button {
    width: 23.75vw;
  }

  .search-input {
    width: 28.13vw;
  }
}

@media only screen and (max-width: 859px) {
  .search-bar-container {
    width: 79.7vw;
  }

  .select-button,
  .search-input {
    width: 35.63vw;
  }
}

@media only screen and (max-width: 655px) {
  .search-bar-container {
    padding: 29px 12px;
    justify-content: space-around;
  }

  .select-button {
    margin-right: 0;
  }
}

@media only screen and (max-width: 575px) {
  .search-bar-container {
    flex-direction: column;
    width: 77.1vw;
    height: auto;
    padding: 16.5px 15px;
    gap: 24px;
  }

  .select-button,
  .search-input {
    width: 100%;
  }
}

@media only screen and (max-width: 360px) {
  .search-bar-container {
    width: 90.63vw;
  }
}

@media only screen and (max-width: 300px) {
  .search-bar-container {
    width: 89.3vw;
  }
}
</style>
