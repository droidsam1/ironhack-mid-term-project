export async function sendForm(event?: { preventDefault: () => void }) {
  event?.preventDefault();

  if (!validateForm()) {
    return;
  }

  showPleaseWaitMessage();

  const fullName = getFullName();
  const email = getEmail();
  const phone = getPhone();
  const message = getMessage();

  await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify({
      fullName, email, phone, message
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(async (response) => {
      if (response.status >= 200 && response.status < 300) {
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
  const form = document.querySelector("#contact-us-form") as HTMLFormElement;
  form.checkValidity();
  form.reportValidity();
  return form.checkValidity();
}

function getFullName(): String {
  return document.querySelector('#contact-us-form')[0].value;
}
function getEmail(): String {
  return document.querySelector('#contact-us-form')[1].value;
}
function getPhone(): String {
  return document.querySelector('#contact-us-form')[2].value;
}
function getMessage(): String {
  return document.querySelector('#contact-us-form')[3].value;
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

  submissionMessage.style.display = "block";
  submissionMessage.style.visibility = "visible";
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
