const CONTACT_API_BASE_URL = "https://mockend.com/droidsam1/ironhack-mid-term-project-mockend/questions";

export async function sendForm(event?: { preventDefault: () => void }) {
  event?.preventDefault();

  if (!validateForm()) {
    return;
  }

  showPleaseWaitMessage();

  const fullName = getFullName().value;
  const email = getEmail().value;
  const phone = getPhone().value;
  const message = getMessage().value;

  await fetch(CONTACT_API_BASE_URL, {
    method: "POST",
    body: JSON.stringify({
      fullName, email, phone, message
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(async (response) => {
      if (response.status === 201) {
        hideForm();
        showSubmissionMessage();
      } else {
        await showError();
      }
    })
    .catch(async () => {
      await showError();
    })
    .finally(() => {
      restoreSendFormButton();
    });
}

function validateForm() {
  removeInvalidWarnings();
  const form = document.querySelector("#contact-us-form") as HTMLFormElement;
  form.checkValidity();
  form.reportValidity();
  return form.checkValidity() && fieldValidations();
}

function fieldValidations(): boolean {
  let valid: boolean = true;
  if (!validateNotEmpty(getFullName().value)) {
    markAsInvalidField(getFullName())
    valid = false;
  }
  if (!validateEmail(getEmail().value)) {
    markAsInvalidField(getEmail());
    valid = false;
  }
  if (!validatePhone(getPhone().value)) {
    markAsInvalidField(getPhone())
    valid = false;
  }
  if (!validateNotEmpty(getMessage().value)) {
    markAsInvalidField(getMessage())
    valid = false;
  }
  return valid;
}

const validatePhone = (phone: String)=>{
  return String(phone).match(/^(\+34|0034|34)?[6789]\d{8}$/) !==null;
}

const validateEmail = (email: String): boolean => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) !== null;
};

const validateNotEmpty = (name: String): boolean => {
  if (name) return true;
}


function markAsInvalidField(element: HTMLElement) {
  element.classList.add('invalid-input');
}

function removeInvalidWarnings() {
  const formElements = document.querySelectorAll(
    "#contact-us-form input, #contact-us-form area"
  ) as NodeListOf<Element>;
  formElements.forEach((element) => element.classList.remove('invalid-input'));
}


function getFullName(): HTMLFormElement {
  return (document.querySelector('#contact-us-form input[name="full-name"]') as HTMLFormElement);
}
function getEmail(): HTMLFormElement {
  return (document.querySelector('#contact-us-form input[name="email"]') as HTMLFormElement);
}
function getPhone(): HTMLFormElement {
  return (document.querySelector('#contact-us-form input[name="phone"]') as HTMLFormElement);
}
function getMessage(): HTMLFormElement {
  return (document.querySelector('#contact-us-form textarea[name="message"]') as HTMLFormElement);
}


function showPleaseWaitMessage() {
  const subscribeButton = document.querySelector(
    ".contat-us-section__submit-button"
  ) as HTMLInputElement;

  subscribeButton.innerHTML = "Please wait...";
}

function showSubmissionMessage() {
  const submissionMessage = document.querySelector(
    ".contat-us-section .submitted-message"
  ) as HTMLElement;
  submissionMessage.classList.toggle('fade');
}


function hideForm() {
  const form = document.querySelector(
    "#contact-us-form"
  ) as HTMLElement;

  form.style.display = "none";
  form.style.visibility = "hidden";
}

function restoreSendFormButton() {
  const submitButton = document.querySelector(
    ".contat-us-section__submit-button"
  ) as HTMLInputElement;

  submitButton.style.backgroundColor = "var(--main-blue-color)";
  submitButton.innerHTML = "Submit";
}

function showError() {
  const submitButton = document.querySelector(
    ".contat-us-section__submit-button"
  ) as HTMLInputElement;

  submitButton.innerHTML = "Something went wrong!";
  submitButton.style.backgroundColor = "red";
  return new Promise((res) =>
    setTimeout(() => res("Enough time to see the error"), 4000)
  );
}

window.addEventListener("load", () => {
  const sendFormButton = document.querySelector(
    ".contat-us-section__submit-button"
  ) as HTMLInputElement;

  sendFormButton.addEventListener("click", sendForm);
});
