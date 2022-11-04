<template>
  <div id="form" class="form-container">
    <form @submit="validateFormOpenModal" action="">
      <h5 class="title">Apply Now</h5>
      <h6 class="input-label">Name <span style="color: #ff7867">*</span></h6>
      <div class="input-field-container">
        <input
          v-model="name"
          placeholder="Your Name"
          type="text"
          class="input-field name"
          @keyup="formFieldChecker('name', nameRegex)"
        />
        <p class="input-error name"></p>
      </div>
      <h6 class="input-label">Email <span style="color: #ff7867">*</span></h6>
      <div class="input-field-container">
        <input
          v-model="email"
          placeholder="example@mail.com"
          type="email"
          class="input-field email"
          @keyup="formFieldChecker('email', emailRegex)"
        />
        <p class="input-error email"></p>
      </div>
      <h6 class="input-label">
        Phone Number <span style="color: #ff7867">*</span>
      </h6>
      <div class="phone-input-container">
        <div class="input-field phone-prefix">+62</div>
        <input
          v-model="phone"
          placeholder="8XXXXXXXXXXXX"
          type="number"
          class="input-field phone"
          @keyup="formFieldChecker('phone', phoneRegex)"
        />
        <p class="input-error phone"></p>
      </div>
      <h6 class="input-label">Describe Yourself</h6>
      <textarea
        v-model="describeYourself"
        placeholder="You can describe about your skills, experience, or anything you would like to share with us"
        class="input-field textarea"
        maxlength="300"
      ></textarea>
      <p class="textarea-counter">{{ describeYourself.length }}/300</p>
      <h6 class="input-label">
        CV / Resume <span style="color: #ff7867">*</span>
      </h6>
      <div class="input-field-container">
        <input
          @change="checkFile"
          type="file"
          accept=".pdf"
          class="input-file"
        />
        <p class="input-error file"></p>
      </div>
      <p class="upload-requirements">
        (1 PDF file only, maximum file size 2MB)
      </p>
      <div
        class="g-recaptcha"
        :data-sitekey="recaptchaSiteKey"
        data-callback="verifyRecaptchaToken"
      ></div>
      <input type="submit" class="submit-button" />
    </form>
  </div>
  <CareerJobDetailsConfirmModal @submitForm="submitForm" />
  <CareerJobDetailsSuccessModal />
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
const config = useRuntimeConfig();
const recaptchaSiteKey = config.recaptchaSiteKey;
const recaptchaSecretKey = config.recaptchaSecretKey;

const name = ref("");
const email = ref("");
const phone = ref("");
const describeYourself = ref("");

const nameValidation = ref(false);
const emailValidation = ref(false);
const phoneValidation = ref(false);
const fileValidation = ref(false);

const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phoneRegex = /^8[1-9][0-9]{7,10}$/;
const formData = new FormData();
let fileSize = 0;
let recaptchaStatus = false;

const capitalize = (word) => {
  return word[0].toUpperCase() + word.slice(1);
};

const formFieldChecker = (fieldName, regex) => {
  const inputError = document.querySelector(`.input-error.${fieldName}`);
  const inputField = document.querySelector(`.input-field.${fieldName}`);
  let value;
  switch (fieldName) {
    case "name":
      value = name.value;
      break;
    case "email":
      value = email.value;
      break;
    default:
      value = phone.value;
  }

  if (!value) {
    inputError.style.display = "block";
    inputError.textContent = `${capitalize(fieldName)} required`;
    inputField.style.border = "1px solid #E35050";
    return false;
  } else if (!regex.test(value)) {
    inputError.style.display = "block";
    inputError.textContent = `${capitalize(fieldName)} not valid`;
    inputField.style.border = "1px solid #E35050";
    return false;
  } else {
    inputError.style.display = "none";
    inputField.style.border = "1px solid #A0A0A0";
    return true;
  }
};

const checkFile = (e) => {
  const inputError = document.querySelector(".input-error.file");
  fileSize = e.target.files[0]?.size;
  if (e.target.files.length === 0) {
    inputError.style.display = "block";
    fileValidation.value = false;
  } else if (fileSize > 2000000) {
    inputError.style.display = "block";
    inputError.textContent = "File size too large";
    fileValidation.value = false;
  } else if (e.target.files.length > 1) {
    inputError.style.display = "block";
    inputError.textContent = "Only 1 file required";
    fileValidation.value = false;
  } else {
    formData.append("file", e.target.files[0]);
    inputError.style.display = "none";
    fileValidation.value = true;
  }
};

const validateFormOpenModal = (e) => {
  e.preventDefault();
  nameValidation.value = formFieldChecker("name", nameRegex);
  emailValidation.value = formFieldChecker("email", emailRegex);
  phoneValidation.value = formFieldChecker("phone", phoneRegex);

  if (!fileValidation.value && fileSize < 2000000) {
    const inputError = document.querySelector(".input-error.file");
    inputError.style.display = "block";
    inputError.textContent = "CV / Resume file required";
    document.querySelector("#form").scrollIntoView();
  } else if (
    nameValidation.value &&
    emailValidation.value &&
    phoneValidation.value &&
    fileValidation.value
  ) {
    formData.append("name", name.value);
    formData.append("email", email.value);
    formData.append("phone", phone.value);
    formData.append("description", describeYourself.value);

    document.querySelector(".overlay-confirm-container").style.display = "flex";
  } else document.querySelector("#form").scrollIntoView();
};

const verifyRecaptchaToken = async (token) => {
  try {
    recaptchaStatus = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      { secret: recaptchaSecretKey, response: token }
    );
  } catch (err) {
    throw err;
  }
};
if (process.client) window.verifyRecaptchaToken = verifyRecaptchaToken;

const submitForm = () => {
  console.log("???");
  // if (recaptchaStatus.success) {
  console.log(name.value);
  console.log(email.value);
  console.log(phone.value);
  console.log(describeYourself.value);
  console.log(formData);
  document.querySelector(".overlay-success-container").style.display = "flex";
  // } else {
  // }
};
</script>

<style scoped>
#form {
  scroll-margin-top: 91px;
}

.form-container {
  display: flex;
  flex-direction: column;
  font-family: "Rubik";
  width: 41%;
  padding-left: 16px;
  border-left: 1px solid #879ab1;
}

.title {
  font-weight: 600;
  font-size: 21px;
  line-height: 25px;
  color: #ffffff;
  margin-bottom: 16px;
}

.input-field-container {
  position: relative;
}

.input-error {
  display: none;
  position: absolute;
  top: 52px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #e35050;
}

.input-error.file {
  top: 67px;
}

.input-label {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #d9d9d9;
  margin-bottom: 8px;
}

.input-field {
  height: 48px;
  width: 100%;
  background: #414141;
  border: 1px solid #a0a0a0;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  margin-bottom: 34px;
}

.phone-input-container {
  position: relative;
  display: flex;
}

.phone-prefix {
  display: flex;
  width: 61px;
  border-width: 1px 0px 1px 1px;
  border-style: solid;
  border-color: #a0a0a0;
  border-radius: 4px 0px 0px 4px;
  justify-content: center;
  align-items: center;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.phone {
  width: calc(100% - 61px);
  border-radius: 0px 4px 4px 0px;
}

.textarea {
  height: 140px;
  background: #414141;
  border: 1px solid #a0a0a0;
  border-radius: 4px;
  margin-bottom: 3px;
  resize: none;
}

.textarea-counter {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #d9d9d9;
  text-align: end;
  margin-bottom: 16px;
}

::placeholder {
  font-size: 16px;
  line-height: 20px;
  color: #c1c1c1;
}

.input-file {
  color: white;
  border-radius: 4px;
  width: 100%;
}

.input-file::-webkit-file-upload-button {
  visibility: hidden;
  margin-right: 55px;
  margin-top: 6px;
}

.input-file::before {
  position: absolute;
  content: "Upload File";
  width: 146px;
  height: 42px;
  background: #0cb1bb;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 1.25px;
  color: #ffffff;
  padding: 10px 24px;
  border-radius: 4px;
  cursor: pointer;
}

.upload-requirements {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #879ab1;
  margin-top: 10px;
  margin-bottom: 42px;
}

.g-recaptcha {
  margin-bottom: 24px;
}

.submit-button {
  width: 100%;
  height: 42px;
  background: #0cb1bb;
  border-radius: 4px;
  margin-bottom: 120px;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 1.25px;
  color: #ffffff;
  border: none;
}

@media only screen and (max-width: 991px) {
  .submit-button {
    margin-bottom: 80px;
  }

  .g-recaptcha {
    transform: scale(0.7);
    transform-origin: 0 0;
  }
}

@media only screen and (max-width: 767px) {
  .form-container {
    width: 100%;
    padding-left: 0;
    padding-top: 32px;
    border-left: none;
    border-top: 1px solid #879ab1;
  }

  .submit-button {
    margin-bottom: 64px;
  }

  .g-recaptcha {
    transform: scale(1);
    transform-origin: 0 0;
  }
}

@media only screen and (max-width: 360px) {
  .submit-button {
    margin-bottom: 48px;
  }

  .g-recaptcha {
    transform: scale(0.82);
    transform-origin: 0 0;
  }

  .upload-requirements {
    font-size: 13.5px;
  }
}
</style>
