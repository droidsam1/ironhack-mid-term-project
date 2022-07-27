import { subscribe } from "../src/subscription";

global.fetch = jest.fn(() =>
  Promise.resolve({
    status: 201,
      json: () =>
      Promise.resolve({
        data: {},
      }),
  })
) as jest.Mock;
// Base document body
document.body.innerHTML = `<section class="cta-section">
<div>
    <h3 class="h3-heading black">Do you have any questions?</h3>
</div>
<div class="text-regular main-grey">Let us help you!</div>
<form class="cta-section__mail">
    <input class="cta-section__mail-input" type="email" placeholder="Enter your email" required />
    <button class="rectangular-main-button cta-section__subscribe-button" type="submit">Subscribe</button>
    <div class="submitted-message">
    Thank you! Your submission has been received!
</div>
</form>
</section>`;

describe("Subscription", () => {
  beforeAll(() => {
    const subscribeButton = document.querySelector(
      ".cta-section__mail button"
    ) as HTMLElement;
    subscribeButton.addEventListener("click", subscribe);

    const subscribeInput = document.querySelector(
      ".cta-section__mail-input"
    ) as HTMLInputElement;
    subscribeInput.value = "something@mail.com";
  });

  it("should restore the button message when post fail", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      status: 400,
    });

    await subscribe();

    const subscribeButton = document.querySelector(
      ".cta-section__subscribe-button"
    ) as HTMLElement;

    expect(subscribeButton.innerHTML).toEqual("Subscribe");
  });

  it("should hide the button when submission succeed", async () => {
    const subscribeButton = document.querySelector(
      ".cta-section__subscribe-button"
    ) as HTMLElement;

    await subscribe();

    expect(subscribeButton.style).toHaveProperty("display", "none");
  });

  it("should hide the input when submission succeed", async () => {
    const subscribeButton = document.querySelector(
      ".cta-section__subscribe-button"
    ) as HTMLElement;

    const subscribeInput = document.querySelector(
      ".cta-section__mail-input"
    ) as HTMLElement;

    await subscribe();

    expect(subscribeInput.style).toHaveProperty("display", "none");
  });

  it("should show the submittted message when submission succeed", async () => {
    const subscribeButton = document.querySelector(
      ".cta-section__subscribe-button"
    ) as HTMLElement;

    const submissionMessage = document.querySelector(
      ".submitted-message"
    ) as HTMLElement;

    await subscribe();

    expect(submissionMessage.classList).toContain('fade');
  });
});
