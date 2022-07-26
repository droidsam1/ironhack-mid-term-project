import { sendForm } from "../src/contact-us";

global.fetch = jest.fn(() =>
  Promise.resolve({
    status: 200,
    json: () =>
      Promise.resolve({
        data: {},
      }),
  })
) as jest.Mock;
// Base document body
document.body.innerHTML = `<section id="contat-us-section" class="contat-us-section">
<h1 class="contat-us-section__title h1-heading black capitalize">Contact us</h1>
<form id="contact-us-form" action="#">
    <label for="full-name" class="capitalize">Full name *</label>
    <input type="text" placeholder="Enter your full name" name="full-name" required />
    <div class="contat-us-section__email-phone">
        <div class="contat-us-section__email">
            <label for="email" class="capitalize">Email</label>
            <input type="email" placeholder="Enter your email address" name="email" required />
        </div>
        <div class="contat-us-section__phone">
            <label for="phone" class="capitalize">Phone</label>
            <input type="tel" placeholder="Enter your phone number" name="phone" required pattern="[0-9]{9}" />
        </div>
    </div>
    <label for="message" class="capitalize">Message</label>
    <textarea rows="5" placeholder="Write your message here..." name="message" required></textarea>

    <button class="contat-us-section__submit-button rectangular-main-button" type="submit">Submit</button>
</form>

<div class="submitted-message">
    Thank you! Your submission has been received!
</div>
</section>`;

describe("Contact us form", () => {
  beforeAll(() => {
    const contactUsButton = document.querySelector(
      ".contat-us-section__submit-button"
    ) as HTMLElement;
    contactUsButton.addEventListener("click", sendForm);


    const fullName = document.querySelector(
      "#contact-us-form input[name='full-name']"
    ) as HTMLInputElement;
    fullName.value = "Example name";

    const emailInputField = document.querySelector(
      ".contat-us-section__email input"
    ) as HTMLInputElement;
    emailInputField.value = "something@mail.com";

    const phone = document.querySelector(
      ".contat-us-section__phone input[name='phone']"
    ) as HTMLInputElement;
    phone.value = "999999999";

    const message = document.querySelector(
      "#contact-us-form textarea[name='message']"
    ) as HTMLInputElement;
    message.value = "Text area example";
  });

  it("should restore the button message when post fail", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      status: 400,
    });

    await sendForm();

    const sendFormButton = document.querySelector(
      ".contat-us-section__submit-button"
    ) as HTMLElement;

    expect(sendFormButton.innerHTML).toEqual("Submit");
  });

  it("should hide the form when submission succeed", async () => {

    const form = document.querySelector(
      "#contact-us-form"
    ) as HTMLElement;

    await sendForm();

    expect(form.style).toHaveProperty("visibility", "hidden");
    expect(form.style).toHaveProperty("display", "none");
  });

  it("should show the submittted message when submission succeed", async () => {

    const submissionMessage = document.querySelector(
      ".submitted-message"
    ) as HTMLElement;

    await sendForm();

    expect(submissionMessage.style).toHaveProperty("display", "block");
    expect(submissionMessage.style).toHaveProperty("visibility", "visible");
  });
});
