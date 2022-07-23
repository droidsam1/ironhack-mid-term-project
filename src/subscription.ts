export async function subscribe(event?: { preventDefault: () => void }) {
  event?.preventDefault();

  if (!validateForm()) {
    return;
  }

  showPleaseWaitMessage();

  const userMail = getUserMail();
  await fetch("https://jsonplaceholder.typicode.com/posts", {
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
  const form = document.querySelector(".cta-section__mail") as HTMLFormElement;
  form.checkValidity();
  form.reportValidity();
  return form.checkValidity();
}

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

  submissionMessage.style.display = "block";
  submissionMessage.style.visibility = "visible";
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
