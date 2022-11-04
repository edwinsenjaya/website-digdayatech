<template>
  <div id="vacancies" class="vacancies-container">
    <div class="vacancies-banner">
      <div class="title-text">
        <div class="dash"></div>
        <h2 class="secondary-text">Join Us</h2>
      </div>
      <h1 class="main-text">Current Vacancies</h1>
    </div>
    <div class="vacancies-list-container">
      <CareerVacanciesSearchBar
        :jobs-data="jobsData"
        @filterJobs="filterJobs"
        @searchJobs="searchJobs"
      />
      <CareerVacanciesList
        v-for="item in jobs"
        :key="item.id"
        :department="item.department"
        :jobs="item.jobs"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const jobsData = [
  {
    department: "Finance Operations",
    id: "asdf123",
    jobs: [
      {
        name: "Accounting Manager",
        id: "1234abcd",
        date: "1 Jan 2022",
        description: `A Scrum Master helps the software development team to deliver the product as scheduled in high-quality with scrum methodology
Manage each project's scope and timeline
Help product owner to make the product backlogs in good shape and make them ready for the next sprint
Coach team how to follow agile scrum, which really works.
Facilitate daily scrum, sprint planning, sprint demo, and retrospective meetings
Remove the impediments for the scrum team
Interacting with other technology teams and clients throughout the software lifecycle.`,
        requirements: `Extensive knowledge of agile methodology and frameworks like scrum, kanban, XP, etc.
Demonstrable experience of Scrum Management
Stakeholder Management, Negotiation & Communication Skills
Familiarity with web-based collaboration tools such as Wrike, Trello, and Confluence`,
        preferred: `3+ years Scrum Master experience in any well-known software environment
Experience in mobile/ web application development`,
      },
    ],
  },
  {
    department: "Operations",
    id: "asdf456",
    jobs: [
      {
        name: "Operation Analyst",
        id: "abcd1234",
        date: "1 Jan 2022",
        description: "abc",
        requirements: "abc",
        preferred: "abc",
      },
    ],
  },
  {
    department: "Sales",
    id: "asdf789",
    jobs: [
      {
        name: "Head of Sales",
        id: "4321bcda",
        date: "1 Jan 2022",
        description: "abc",
        requirements: "abc",
        preferred: "abc",
      },
      {
        name: "Sales Executive",
        id: "5678efgh",
        date: "1 Jan 2022",
        description: "abc",
        requirements: "abc",
        preferred: "abc",
      },
      {
        name: "Sales Manager",
        id: "1a2b3c4d",
        date: "1 Jan 2022",
        description: "abc",
        requirements: "abc",
        preferred: "abc",
      },
    ],
  },
];
const jobs = ref(jobsData);

const filterJobs = (departmentName) => {
  if (departmentName === "all") {
    jobs.value = jobsData;
  } else {
    jobs.value = jobsData.filter((el) => el.department === departmentName);
  }
};

const searchJobs = (searchQuery) => {
  if (!searchQuery) {
    jobs.value = jobsData;
  } else {
    jobs.value = jobsData.reduce((searchResult, el) => {
      if (el.department.toUpperCase().indexOf(searchQuery.toUpperCase()) > -1) {
        searchResult.push(el);
      } else {
        let filterJobs = [...el.jobs];
        filterJobs = filterJobs.filter((job) => {
          return job.name.toUpperCase().indexOf(searchQuery.toUpperCase()) > -1;
        });

        if (filterJobs.length === 0) return searchResult;
        searchResult.push({ ...el, jobs: filterJobs });
      }
      return searchResult;
    }, []);
  }
};
</script>

<style scoped>
#vacancies {
  scroll-margin-top: 91px;
}

.vacancies-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: "Rubik";
  background: #303030;
}

.vacancies-banner {
  background-image: url("@/assets/vacancies-banner.png");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 250px;
  padding: 72px 0 72px;
  margin-bottom: 48px;
}

.title-text {
  display: flex;
  justify-content: center;
}

.dash {
  background: #ffffff;
  height: 3px;
  width: 28px;
  margin-top: 12.5px;
  margin-right: 12px;
  border-radius: 50px;
}

.secondary-text {
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  margin-bottom: 10px;
  text-align: left;
}

.main-text {
  font-weight: 700;
  font-size: 57px;
  line-height: 68px;
  color: #ffffff;
  text-align: center;
}

.vacancies-list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 85px 98px;
}

@media only screen and (min-width: 1280px) {
  .vacancies-list-container {
    padding: 0 calc((100vw - 1280px) / 2 + 85px) 98px;
  }
}

@media only screen and (max-width: 1279px) {
  .vacancies-list-container {
    padding: 0 47px 98px;
  }
}

@media only screen and (max-width: 991px) {
  .vacancies-list-container {
    padding: 0 135px 98px;
  }
}

@media only screen and (max-width: 767px) {
  .vacancies-banner {
    background-position: center;
    padding: 38px 0 38px;
  }

  .main-text {
    margin: auto;
    width: 510px;
  }

  .vacancies-list-container {
    padding: 0 65px 98px;
  }
}

@media only screen and (max-width: 600px) {
  .vacancies-banner {
    background-position: right;
  }
}

@media only screen and (max-width: 575px) {
  .vacancies-banner {
    background-position: center;
    padding: 86px 0 86px;
  }

  .main-text {
    font-size: 36px;
    line-height: 40px;
    width: 100%;
  }

  .vacancies-list-container {
    padding: 0 15px 50px;
  }
}

@media only screen and (max-width: 480px) {
  .vacancies-banner {
    background-position-x: 640px;
  }
}

@media only screen and (max-width: 360px) {
  .vacancies-banner {
    padding: 66px 0 66px;
  }

  .main-text {
    width: 70%;
  }
}
</style>
