const SUBSCRIBE_API_BASE_URL = "https://mockend.com/droidsam1/ironhack-mid-term-project-mockend/subscriptions";


export async function subscribe(event?: { preventDefault: () => void }) {
  event?.preventDefault();

  if (!validateForm()) {
    return;
  }

  showPleaseWaitMessage();

  const userMail = getUserMail();
  await fetch(SUBSCRIBE_API_BASE_URL, {
    method: "POST",
    body: JSON.stringify({
      mail: userMail,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(async (response) => {
      if (response.status >= 200 && response.status < 300) {
        hideButton();
        hideInput();
        showSubmissionMessage();
      } else {
        await showError();
      }
    })
    .catch(async () => {
      await showError();
    })
    .finally(() => {
      restoreSubscribeButton();
    });
}

function validateForm() {
  removeInvalidWarning();
  const form = document.querySelector(".cta-section__mail") as HTMLFormElement;
  form.checkValidity();
  form.reportValidity();
  let validForm: boolean = form.checkValidity() && validateEmail(getUserMail());
  if (!validForm) {
    markAsInvalidField();
  }
  return validForm;
}

function markAsInvalidField() {
  const mailInput = document.querySelector(
    ".cta-section__mail-input"
  ) as HTMLInputElement;
  mailInput.classList.add('invalid-input');
}

function removeInvalidWarning() {
  const mailInput = document.querySelector(
    ".cta-section__mail-input"
  ) as HTMLInputElement;
  mailInput.classList.remove('invalid-input');
}

const validateEmail = (email): boolean => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) !== null;
};

function getUserMail(): String {
  const subscribeButton = document.querySelector(
    ".cta-section__mail-input"
  ) as HTMLInputElement;
  return subscribeButton.value;
}

function showPleaseWaitMessage() {
  const subscribeButton = document.querySelector(
    ".cta-section__subscribe-button"
  ) as HTMLInputElement;

  subscribeButton.innerHTML = "Please wait...";
}

function showSubmissionMessage() {
  const submissionMessage = document.querySelector(
    ".cta-section .submitted-message"
  ) as HTMLElement;
  submissionMessage.classList.toggle('fade');
}

function hideButton() {
  const subscribeButton = document.querySelector(
    ".cta-section__subscribe-button"
  ) as HTMLInputElement;

  subscribeButton.style.display = "none";
  subscribeButton.style.visibility = "hidden";
}

function hideInput() {
  const subscribeInput = document.querySelector(
    ".cta-section__mail-input"
  ) as HTMLElement;

  subscribeInput.style.display = "none";
  subscribeInput.style.visibility = "hidden";
}

function restoreSubscribeButton() {
  const subscribeButton = document.querySelector(
    ".cta-section__subscribe-button"
  ) as HTMLInputElement;
  subscribeButton.style.backgroundColor = "var(--main-blue-color)";
  subscribeButton.innerHTML = "Subscribe";
}

function showError() {
  const subscribeButton = document.querySelector(
    ".cta-section__subscribe-button"
  ) as HTMLInputElement;

  subscribeButton.innerHTML = "Something went wrong!";
  subscribeButton.style.backgroundColor = "red";
  return new Promise((res) =>
    setTimeout(() => res("Enough time to see the error"), 4000)
  );
}

window.addEventListener("load", () => {
  const subscribeButton = document.querySelector(
    ".cta-section__subscribe-button"
  ) as HTMLInputElement;

  subscribeButton.addEventListener("click", subscribe);
});
