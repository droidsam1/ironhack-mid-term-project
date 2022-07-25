import { getRandomPosts, loadCards } from "../src/projects";

global.fetch = jest.fn(() =>
  Promise.resolve({
    status: 200,
    json: () =>
      Promise.resolve({
        data: {
          posts: [
            {
              id: 1,
              body: "Quos ad a velit labore, a dolore dolorum ad corporis eos, a fugiat quia voluptatibus a. Voluptate molestiae odio nisi reprehenderit in, aperiam ea alias veniam repellat. Consequatur reprehenderit reiciendis a, reprehenderit exercitationem, at debitis reprehenderit sunt.\n\nExplicabo illo magnam reprehenderit porro odio, ad doloremque ex a, mollitia possimus qui hic. Reprehenderit a reprehenderit reprehenderit, ullam quod amet non, reprehenderit alias ea vel. A nam est reprehenderit qui ad dicta, recusandae totam esse, accusantium fugit. Soluta quibusdam voluptatibus eius, praesentium amet reprehenderit nostrum, ea odit mollitia. Dolorum repellendus a consequuntur totam nesciunt, facilis laudantium vitae consequatur repellendus ea laboriosam.\n\nReprehenderit at ipsum repellat quod, quos distinctio dolorum assumenda nostrum. Incidunt maxime modi, reprehenderit suscipit temporibus, at quo itaque a quo a illo. Dolorum consequatur magnam laborum eligendi a eos, voluptas a id rem labore ex libero est. Repellendus a ratione, ut labore a quo, excepturi ea nam perspiciatis provident. Minima voluptas aliquid a ipsum a ea, maiores sed perspiciatis odio, a reprehenderit mollitia labore libero illo dolorum beatae ex.\n\nQuibusdam similique ex, praesentium ut hic, id reprehenderit unde quo aut veniam debitis sed. A consequuntur voluptatum a accusantium, quo explicabo fugit ratione ab vitae. Quia a a pariatur, dolores cum blanditiis, inventore consequatur ut illo dolore aspernatur. Repellat reprehenderit reprehenderit at, repudiandae praesentium fugit, reprehenderit dolorem.\n\nAd ipsum nam eum praesentium a voluptatem ex qui, consequatur iste dignissimos ut. Voluptatibus perferendis, ab quo dolore voluptatibus, tempora nesciunt cupiditate consequuntur sed. Maiores inventore ea, reprehenderit asperiores labore, consequatur eum suscipit. Sapiente rem consectetur, a omnis ab suscipit facilis maiores repudiandae, cumque ex consequuntur cum, cumque minima a illo officiis.\n\nRepellendus dolores iste temporibus, cum reprehenderit praesentium, voluptate corrupti. Suscipit fuga a ut minima consequuntur corrupti, consectetur a a ex excepturi perspiciatis. A vel minus temporibus at a sit itaque explicabo, sunt reprehenderit doloribus. Doloribus nihil incidunt, rerum inventore distinctio veniam a, quam illum eos exercitationem, molestias id quaerat, repellendus reprehenderit.\n\nReprehenderit officiis debitis ut reprehenderit, sunt a sapiente voluptates a tenetur a. Accusantium temporibus, consequuntur consequatur iusto optio neque, repudiandae expedita officia quae, molestias deserunt itaque a, reprehenderit maxime.",
              cover: "https://picsum.photos/seed/73735/1920/270",
              title: "ipsam",
              description: "a fugiat quia voluptatibus",
            },
            {
              id: 2,
              body: "Quos ad a velit labore, a dolore dolorum ad corporis eos, a fugiat quia voluptatibus a. Voluptate molestiae odio nisi reprehenderit in, aperiam ea alias veniam repellat. Consequatur reprehenderit reiciendis a, reprehenderit exercitationem, at debitis reprehenderit sunt.\n\nExplicabo illo magnam reprehenderit porro odio, ad doloremque ex a, mollitia possimus qui hic. Reprehenderit a reprehenderit reprehenderit, ullam quod amet non, reprehenderit alias ea vel. A nam est reprehenderit qui ad dicta, recusandae totam esse, accusantium fugit. Soluta quibusdam voluptatibus eius, praesentium amet reprehenderit nostrum, ea odit mollitia. Dolorum repellendus a consequuntur totam nesciunt, facilis laudantium vitae consequatur repellendus ea laboriosam.\n\nReprehenderit at ipsum repellat quod, quos distinctio dolorum assumenda nostrum. Incidunt maxime modi, reprehenderit suscipit temporibus, at quo itaque a quo a illo. Dolorum consequatur magnam laborum eligendi a eos, voluptas a id rem labore ex libero est. Repellendus a ratione, ut labore a quo, excepturi ea nam perspiciatis provident. Minima voluptas aliquid a ipsum a ea, maiores sed perspiciatis odio, a reprehenderit mollitia labore libero illo dolorum beatae ex.\n\nQuibusdam similique ex, praesentium ut hic, id reprehenderit unde quo aut veniam debitis sed. A consequuntur voluptatum a accusantium, quo explicabo fugit ratione ab vitae. Quia a a pariatur, dolores cum blanditiis, inventore consequatur ut illo dolore aspernatur. Repellat reprehenderit reprehenderit at, repudiandae praesentium fugit, reprehenderit dolorem.\n\nAd ipsum nam eum praesentium a voluptatem ex qui, consequatur iste dignissimos ut. Voluptatibus perferendis, ab quo dolore voluptatibus, tempora nesciunt cupiditate consequuntur sed. Maiores inventore ea, reprehenderit asperiores labore, consequatur eum suscipit. Sapiente rem consectetur, a omnis ab suscipit facilis maiores repudiandae, cumque ex consequuntur cum, cumque minima a illo officiis.\n\nRepellendus dolores iste temporibus, cum reprehenderit praesentium, voluptate corrupti. Suscipit fuga a ut minima consequuntur corrupti, consectetur a a ex excepturi perspiciatis. A vel minus temporibus at a sit itaque explicabo, sunt reprehenderit doloribus. Doloribus nihil incidunt, rerum inventore distinctio veniam a, quam illum eos exercitationem, molestias id quaerat, repellendus reprehenderit.\n\nReprehenderit officiis debitis ut reprehenderit, sunt a sapiente voluptates a tenetur a. Accusantium temporibus, consequuntur consequatur iusto optio neque, repudiandae expedita officia quae, molestias deserunt itaque a, reprehenderit maxime.",
              cover: "https://picsum.photos/seed/73735/1920/270",
              title: "ipsam2",
              description: "a fugiat quia voluptatibus",
            },
            {
              id: 3,
              body: "Quos ad a velit labore, a dolore dolorum ad corporis eos, a fugiat quia voluptatibus a. Voluptate molestiae odio nisi reprehenderit in, aperiam ea alias veniam repellat. Consequatur reprehenderit reiciendis a, reprehenderit exercitationem, at debitis reprehenderit sunt.\n\nExplicabo illo magnam reprehenderit porro odio, ad doloremque ex a, mollitia possimus qui hic. Reprehenderit a reprehenderit reprehenderit, ullam quod amet non, reprehenderit alias ea vel. A nam est reprehenderit qui ad dicta, recusandae totam esse, accusantium fugit. Soluta quibusdam voluptatibus eius, praesentium amet reprehenderit nostrum, ea odit mollitia. Dolorum repellendus a consequuntur totam nesciunt, facilis laudantium vitae consequatur repellendus ea laboriosam.\n\nReprehenderit at ipsum repellat quod, quos distinctio dolorum assumenda nostrum. Incidunt maxime modi, reprehenderit suscipit temporibus, at quo itaque a quo a illo. Dolorum consequatur magnam laborum eligendi a eos, voluptas a id rem labore ex libero est. Repellendus a ratione, ut labore a quo, excepturi ea nam perspiciatis provident. Minima voluptas aliquid a ipsum a ea, maiores sed perspiciatis odio, a reprehenderit mollitia labore libero illo dolorum beatae ex.\n\nQuibusdam similique ex, praesentium ut hic, id reprehenderit unde quo aut veniam debitis sed. A consequuntur voluptatum a accusantium, quo explicabo fugit ratione ab vitae. Quia a a pariatur, dolores cum blanditiis, inventore consequatur ut illo dolore aspernatur. Repellat reprehenderit reprehenderit at, repudiandae praesentium fugit, reprehenderit dolorem.\n\nAd ipsum nam eum praesentium a voluptatem ex qui, consequatur iste dignissimos ut. Voluptatibus perferendis, ab quo dolore voluptatibus, tempora nesciunt cupiditate consequuntur sed. Maiores inventore ea, reprehenderit asperiores labore, consequatur eum suscipit. Sapiente rem consectetur, a omnis ab suscipit facilis maiores repudiandae, cumque ex consequuntur cum, cumque minima a illo officiis.\n\nRepellendus dolores iste temporibus, cum reprehenderit praesentium, voluptate corrupti. Suscipit fuga a ut minima consequuntur corrupti, consectetur a a ex excepturi perspiciatis. A vel minus temporibus at a sit itaque explicabo, sunt reprehenderit doloribus. Doloribus nihil incidunt, rerum inventore distinctio veniam a, quam illum eos exercitationem, molestias id quaerat, repellendus reprehenderit.\n\nReprehenderit officiis debitis ut reprehenderit, sunt a sapiente voluptates a tenetur a. Accusantium temporibus, consequuntur consequatur iusto optio neque, repudiandae expedita officia quae, molestias deserunt itaque a, reprehenderit maxime.",
              cover: "https://picsum.photos/seed/73735/1920/270",
              title: "ipsam3",
              description: "a fugiat quia voluptatibus",
            },
            {
              id: 4,
              body: "Quos ad a velit labore, a dolore dolorum ad corporis eos, a fugiat quia voluptatibus a. Voluptate molestiae odio nisi reprehenderit in, aperiam ea alias veniam repellat. Consequatur reprehenderit reiciendis a, reprehenderit exercitationem, at debitis reprehenderit sunt.\n\nExplicabo illo magnam reprehenderit porro odio, ad doloremque ex a, mollitia possimus qui hic. Reprehenderit a reprehenderit reprehenderit, ullam quod amet non, reprehenderit alias ea vel. A nam est reprehenderit qui ad dicta, recusandae totam esse, accusantium fugit. Soluta quibusdam voluptatibus eius, praesentium amet reprehenderit nostrum, ea odit mollitia. Dolorum repellendus a consequuntur totam nesciunt, facilis laudantium vitae consequatur repellendus ea laboriosam.\n\nReprehenderit at ipsum repellat quod, quos distinctio dolorum assumenda nostrum. Incidunt maxime modi, reprehenderit suscipit temporibus, at quo itaque a quo a illo. Dolorum consequatur magnam laborum eligendi a eos, voluptas a id rem labore ex libero est. Repellendus a ratione, ut labore a quo, excepturi ea nam perspiciatis provident. Minima voluptas aliquid a ipsum a ea, maiores sed perspiciatis odio, a reprehenderit mollitia labore libero illo dolorum beatae ex.\n\nQuibusdam similique ex, praesentium ut hic, id reprehenderit unde quo aut veniam debitis sed. A consequuntur voluptatum a accusantium, quo explicabo fugit ratione ab vitae. Quia a a pariatur, dolores cum blanditiis, inventore consequatur ut illo dolore aspernatur. Repellat reprehenderit reprehenderit at, repudiandae praesentium fugit, reprehenderit dolorem.\n\nAd ipsum nam eum praesentium a voluptatem ex qui, consequatur iste dignissimos ut. Voluptatibus perferendis, ab quo dolore voluptatibus, tempora nesciunt cupiditate consequuntur sed. Maiores inventore ea, reprehenderit asperiores labore, consequatur eum suscipit. Sapiente rem consectetur, a omnis ab suscipit facilis maiores repudiandae, cumque ex consequuntur cum, cumque minima a illo officiis.\n\nRepellendus dolores iste temporibus, cum reprehenderit praesentium, voluptate corrupti. Suscipit fuga a ut minima consequuntur corrupti, consectetur a a ex excepturi perspiciatis. A vel minus temporibus at a sit itaque explicabo, sunt reprehenderit doloribus. Doloribus nihil incidunt, rerum inventore distinctio veniam a, quam illum eos exercitationem, molestias id quaerat, repellendus reprehenderit.\n\nReprehenderit officiis debitis ut reprehenderit, sunt a sapiente voluptates a tenetur a. Accusantium temporibus, consequuntur consequatur iusto optio neque, repudiandae expedita officia quae, molestias deserunt itaque a, reprehenderit maxime.",
              cover: "https://picsum.photos/seed/73735/1920/270",
              title: "ipsam4",
              description: "a fugiat quia voluptatibus",
            },
            {
              id: 5,
              body: "Quos ad a velit labore, a dolore dolorum ad corporis eos, a fugiat quia voluptatibus a. Voluptate molestiae odio nisi reprehenderit in, aperiam ea alias veniam repellat. Consequatur reprehenderit reiciendis a, reprehenderit exercitationem, at debitis reprehenderit sunt.\n\nExplicabo illo magnam reprehenderit porro odio, ad doloremque ex a, mollitia possimus qui hic. Reprehenderit a reprehenderit reprehenderit, ullam quod amet non, reprehenderit alias ea vel. A nam est reprehenderit qui ad dicta, recusandae totam esse, accusantium fugit. Soluta quibusdam voluptatibus eius, praesentium amet reprehenderit nostrum, ea odit mollitia. Dolorum repellendus a consequuntur totam nesciunt, facilis laudantium vitae consequatur repellendus ea laboriosam.\n\nReprehenderit at ipsum repellat quod, quos distinctio dolorum assumenda nostrum. Incidunt maxime modi, reprehenderit suscipit temporibus, at quo itaque a quo a illo. Dolorum consequatur magnam laborum eligendi a eos, voluptas a id rem labore ex libero est. Repellendus a ratione, ut labore a quo, excepturi ea nam perspiciatis provident. Minima voluptas aliquid a ipsum a ea, maiores sed perspiciatis odio, a reprehenderit mollitia labore libero illo dolorum beatae ex.\n\nQuibusdam similique ex, praesentium ut hic, id reprehenderit unde quo aut veniam debitis sed. A consequuntur voluptatum a accusantium, quo explicabo fugit ratione ab vitae. Quia a a pariatur, dolores cum blanditiis, inventore consequatur ut illo dolore aspernatur. Repellat reprehenderit reprehenderit at, repudiandae praesentium fugit, reprehenderit dolorem.\n\nAd ipsum nam eum praesentium a voluptatem ex qui, consequatur iste dignissimos ut. Voluptatibus perferendis, ab quo dolore voluptatibus, tempora nesciunt cupiditate consequuntur sed. Maiores inventore ea, reprehenderit asperiores labore, consequatur eum suscipit. Sapiente rem consectetur, a omnis ab suscipit facilis maiores repudiandae, cumque ex consequuntur cum, cumque minima a illo officiis.\n\nRepellendus dolores iste temporibus, cum reprehenderit praesentium, voluptate corrupti. Suscipit fuga a ut minima consequuntur corrupti, consectetur a a ex excepturi perspiciatis. A vel minus temporibus at a sit itaque explicabo, sunt reprehenderit doloribus. Doloribus nihil incidunt, rerum inventore distinctio veniam a, quam illum eos exercitationem, molestias id quaerat, repellendus reprehenderit.\n\nReprehenderit officiis debitis ut reprehenderit, sunt a sapiente voluptates a tenetur a. Accusantium temporibus, consequuntur consequatur iusto optio neque, repudiandae expedita officia quae, molestias deserunt itaque a, reprehenderit maxime.",
              cover: "https://picsum.photos/seed/73735/1920/270",
              title: "ipsam5",
              description: "a fugiat quia voluptatibus",
            },
          ],
        },
      }),
  })
) as jest.Mock;

describe("Calling Posts API", () => {
  it("should call API to get posts", async () => {
    const post = await getRandomPosts();
    expect(post).toBeTruthy();
  });
  it("should return an array of post", async () => {
    const post = await getRandomPosts();
    expect(Array.isArray(post)).toBe(true);
  });
  it("should thrown an error if API request fail", async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(
      new Error("Some unexpected error")
    );
    await expect(getRandomPosts()).rejects.toThrow();
  });

  it("should return at least three posts", async () => {
    const post = await getRandomPosts();
    expect(post.length).toBeGreaterThanOrEqual(3);
  });

  it("a post contains a body", async () => {
    const post = await getRandomPosts();
    const aPost = post[0];
    expect(aPost).toHaveProperty("body");
  });

  it("a post contains a title", async () => {
    const post = await getRandomPosts();
    const aPost = post[0];
    expect(aPost).toHaveProperty("title");
  });

  it("a post contains a description", async () => {
    const post = await getRandomPosts();
    const aPost = post[0];
    expect(aPost).toHaveProperty("description");
  });

  it("a post contains a cover image", async () => {
    const post = await getRandomPosts();
    const aPost = post[0];
    expect(aPost).toHaveProperty("cover");
  });
});

// Base document body
document.body.innerHTML = `<section class="projects-section">
  <h3 class="h3-heading black">Recent Projects</h3>
  <div class="cards">
      <div class="cards__card cards__card-with-image">
          <img class="cards__card__image" src="/assets/projects-section/1.jpg" alt="image placeholder" />
          <h5 class="cards__card__title capitalize">DEFAULT CARD</h5>
          <div class="cards__card__description">DEFAULT DESCRIPTION</div>
          <div class="cards__card_learn-more"><a href="#">Learn more</a></div>
      </div>
      <div class="cards__card cards__card-with-image">
          <img class="cards__card__image" src="/assets/projects-section/1.jpg" alt="image placeholder" />
          <h5 class="cards__card__title capitalize" >DEFAULT CARD</h5>
          <div class="cards__card__description">DEFAULT DESCRIPTION</div>
          <div class="cards__card_learn-more"><a href="#">Learn more</a></div>
      </div>
      <div class="cards__card cards__card-with-image">
          <img class="cards__card__image" src="/assets/projects-section/1.jpg" alt="image placeholder" />
          <h5 class="cards__card__title capitalize">DEFAULT CARD</h5>
          <div class="cards__card__description">DEFAULT DESCRIPTION</div>
          <div class="cards__card_learn-more"><a href="#">Learn more</a></div>
      </div>
  </div>
  <script src="out/projects.js"></script>
</section>`;

describe("Loading Project Cards", () => {
  it("should start loading default cards", async () => {
    expect(
      document.querySelectorAll(".projects-section .cards .cards__card").length
    ).toBe(3);
  });

  it("should not remove default cards when API call fails", async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(
      new Error("Some unexpected error")
    );
    await loadCards();
    expect(
      document.querySelectorAll(".projects-section .cards .cards__card").length
    ).toBe(3);
  });

  it("should load new card title", async () => {
    await loadCards();
    expect(
      document.querySelector(".projects-section .cards__card__title").innerHTML
    ).not.toBe("DEFAULT CARD");
  });

  it("should load new card body", async () => {
    await loadCards();
    expect(
      document.querySelector(".projects-section .cards__card__description")
        .innerHTML
    ).toBe("a fugiat quia voluptatibus");
  });

  it("should load new card cover image", async () => {
    await loadCards();
    expect(
      document.querySelector(".projects-section .cards__card__image")
    ).toHaveProperty("src", "https://picsum.photos/seed/73735/1920/270");
  });

  it("should load new anchor ref to post", async () => {
    await loadCards();
    expect(
      document
        .querySelector(".projects-section .cards__card_learn-more a")
        .getAttribute("href")
    ).toContain("/pages/post.html?id=");
  });

  it("should load a max of three cards when API call succeed", async () => {
    await loadCards();
    expect(
      document.querySelectorAll(".projects-section .cards .cards__card").length
    ).toBe(3);
  });

  it("should load a new card title per every received post", async () => {
    await loadCards();

    const allLoadedCards = document.querySelectorAll(
      ".projects-section .cards__card__title"
    );

    const firstLoadedCard: Element = allLoadedCards[0];
    const secondLoadedCard: Element = allLoadedCards[1];
    const thirdLoadedCard: Element = allLoadedCards[2];

    expect(firstLoadedCard.innerHTML).not.toBe("DEFAULT CARD");
    expect(firstLoadedCard.innerHTML).not.toBe(secondLoadedCard.innerHTML);
    expect(secondLoadedCard.innerHTML).not.toBe(thirdLoadedCard.innerHTML);
  });
});
