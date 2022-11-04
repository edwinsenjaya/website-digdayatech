<template>
  <div @click="closeModal" class="overlay-confirm-container">
    <div class="modal-container">
      <h3 class="title">
        Confirm Application
        <span
          ><img
            @click="closeModal"
            class="modal-close"
            :src="useAsset('modal-close.png')"
            alt="modal-close"
        /></span>
      </h3>
      <p class="question">Are you sure you want to submit this application?</p>
      <div class="button-container">
        <button @click="closeModal" class="cancel-button">Cancel</button>
        <button @click="submitForm" class="submit-button">
          Yes, submit now
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import useAsset from "@/helpers/useAsset";
const emit = defineEmits(["submitForm"]);

const closeModal = () => {
  document.querySelector(".overlay-confirm-container").style.display = "none";
};

const submitForm = () => {
  console.log("?");
  emit("submitForm");
  closeModal();
};
</script>

<style scoped>
.overlay-confirm-container {
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
  padding: 20px 20px 16px;
  border-bottom: 1px solid #879ab1;
  text-align: right;
  margin-bottom: 0;
}

.modal-close {
  width: 16.5px;
  height: auto;
  right: 0;
  margin-left: 110px;
  cursor: pointer;
}

.question {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  height: 79px;
  width: 100%;
  padding: 29px 16px 26px;
  border-bottom: 1px solid #879ab1;
  text-align: center;
  margin-bottom: 0;
}

.button-container {
  display: flex;
  justify-content: flex-end;
  height: 74px;
  width: 100%;
  padding: 16px;
  gap: 16px;
}

.cancel-button,
.submit-button {
  border-radius: 4px;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 1.25px;
}

.cancel-button {
  width: 107px;
  border: 1px solid #0cb1bb;
  color: #0cb1bb;
  background: none;
}

.submit-button {
  width: 191px;
  border: none;
  background: #0cb1bb;
  color: #ffffff;
}

@media only screen and (max-width: 768px) {
  .overlay-confirm-container {
    padding: 0 65px;
  }
}

@media only screen and (max-width: 540px) {
  .modal-close {
    margin-left: calc(110px - (540px - 100vw));
  }

  .question {
    height: auto;
  }
}

@media only screen and (max-width: 480px) {
  .modal-container {
    width: 100%;
  }

  .modal-close {
    margin-left: 110px;
  }

  .overlay-confirm-container {
    padding: 0 15px;
  }
}

@media only screen and (max-width: 400px) {
  .modal-close {
    margin-left: calc(110px - (400px - 100vw));
  }
}

@media only screen and (max-width: 325px) {
  .modal-close {
    margin-left: 15px;
  }

  .title {
    font-size: 18px;
    text-align: center;
    padding: 20px 12px 16px;
  }

  .button-container {
    height: 85px;
  }
}
</style>
