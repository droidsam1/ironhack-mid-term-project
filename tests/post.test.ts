import { getPostById, loadPost } from "../src/post";

global.fetch = jest.fn(() =>
  Promise.resolve({
    status: 200,
    json: () =>
      Promise.resolve({
        data: {
          post: {
            id: 1,
            body: "Quos ad a velit labore, a dolore dolorum ad corporis eos, a fugiat quia voluptatibus a. Voluptate molestiae odio nisi reprehenderit in, aperiam ea alias veniam repellat. Consequatur reprehenderit reiciendis a, reprehenderit exercitationem, at debitis reprehenderit sunt.\n\nExplicabo illo magnam reprehenderit porro odio, ad doloremque ex a, mollitia possimus qui hic. Reprehenderit a reprehenderit reprehenderit, ullam quod amet non, reprehenderit alias ea vel. A nam est reprehenderit qui ad dicta, recusandae totam esse, accusantium fugit. Soluta quibusdam voluptatibus eius, praesentium amet reprehenderit nostrum, ea odit mollitia. Dolorum repellendus a consequuntur totam nesciunt, facilis laudantium vitae consequatur repellendus ea laboriosam.\n\nReprehenderit at ipsum repellat quod, quos distinctio dolorum assumenda nostrum. Incidunt maxime modi, reprehenderit suscipit temporibus, at quo itaque a quo a illo. Dolorum consequatur magnam laborum eligendi a eos, voluptas a id rem labore ex libero est. Repellendus a ratione, ut labore a quo, excepturi ea nam perspiciatis provident. Minima voluptas aliquid a ipsum a ea, maiores sed perspiciatis odio, a reprehenderit mollitia labore libero illo dolorum beatae ex.\n\nQuibusdam similique ex, praesentium ut hic, id reprehenderit unde quo aut veniam debitis sed. A consequuntur voluptatum a accusantium, quo explicabo fugit ratione ab vitae. Quia a a pariatur, dolores cum blanditiis, inventore consequatur ut illo dolore aspernatur. Repellat reprehenderit reprehenderit at, repudiandae praesentium fugit, reprehenderit dolorem.\n\nAd ipsum nam eum praesentium a voluptatem ex qui, consequatur iste dignissimos ut. Voluptatibus perferendis, ab quo dolore voluptatibus, tempora nesciunt cupiditate consequuntur sed. Maiores inventore ea, reprehenderit asperiores labore, consequatur eum suscipit. Sapiente rem consectetur, a omnis ab suscipit facilis maiores repudiandae, cumque ex consequuntur cum, cumque minima a illo officiis.\n\nRepellendus dolores iste temporibus, cum reprehenderit praesentium, voluptate corrupti. Suscipit fuga a ut minima consequuntur corrupti, consectetur a a ex excepturi perspiciatis. A vel minus temporibus at a sit itaque explicabo, sunt reprehenderit doloribus. Doloribus nihil incidunt, rerum inventore distinctio veniam a, quam illum eos exercitationem, molestias id quaerat, repellendus reprehenderit.\n\nReprehenderit officiis debitis ut reprehenderit, sunt a sapiente voluptates a tenetur a. Accusantium temporibus, consequuntur consequatur iusto optio neque, repudiandae expedita officia quae, molestias deserunt itaque a, reprehenderit maxime.",
            cover: "https://picsum.photos/seed/73735/1920/270",
            title: "ipsam",
            description: "a fugiat quia voluptatibus",
          },
        },
      }),
  })
) as jest.Mock;

// Base document body
document.body.innerHTML = `<section class="post-section">
<h1 class="post-section__post-title h1-heading black">Simplify</h1>
<div class="post-section__post-subtitle">
    <div class="post-section__post-subtitle__description text-medium secondary-grey">UI Design & App Development</div>
    <div class="post-section__post-subtitle__date text-regular">Completed on <span class="secondary-grey">June 22, 2021</span></div>
</div>
<div class="post-section__image">
    <img src="/assets/projects-section/1.jpg" alt="image placeholder" />
</div>

<div class="post-section__text text-regular">
Simplify is lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat faucibus sem, id vulputate justo ornare non. Nullam et vehicula sem. Pellentesque bibendum massa non nisl posuere cursus. Aliquam ac eros pretium neque consequat facilisis. Ut sit amet justo varius ex ultrices fringilla. Sed vel turpis fringilla ante gravida vestibulum. Etiam a sollicitudin leo. Nunc metus lectus, lacinia ut arcu quis, pretium congue lacus.

Aliquam blandit varius metus, in mattis orci convallis sit amet. Fusce et sem ac velit placerat ultrices in id dolor. Sed eget auctor metus. Sed suscipit fringilla lectus, a maximus justo bibendum a. Donec et pellentesque nisl, vitae tempus lorem. Sed efficitur cursus rhoncus. Duis placerat nisi quis mi tincidunt, sit amet tincidunt urna convallis. Nam et sagittis felis. Pellentesque placerat orci sodales nisi convallis ultrices. Nunc posuere neque eu mi imperdiet ullamcorper. Praesent tempor convallis rutrum. Vestibulum dignissim pellentesque eros in placerat. Etiam at nisi quis quam sollicitudin vehicula sit amet vel mi
</div>
</section>`;

describe("Load a post", () => {
  it("should start loading default post", async () => {
    expect(document.querySelector(".post-section__post-title").innerHTML).toBe(
      "Simplify"
    );
  });

  it("should load a post", async () => {
    const aPost = await getPostById(1);
    expect(aPost).not.toBeNull();
  });

  it("should load a post with the correct id", async () => {
    const aPost = await getPostById(1);
    expect(aPost.id).toBe(1);
  });

  it("a post contains a body", async () => {
    const aPost = await getPostById(1);
    expect(aPost).toHaveProperty("body");
  });

  it("a post contains a title", async () => {
    const aPost = await getPostById(1);
    expect(aPost).toHaveProperty("title");
  });

  it("a post contains a cover", async () => {
    const aPost = await getPostById(1);
    expect(aPost).toHaveProperty("cover");
  });
});

describe("Load a post", () => {
  beforeAll = () => {
    jest.spyOn(URLSearchParams.prototype, "get").mockReturnValue("1");
  };

  it("should load the post title", async () => {
    const aPost = await loadPost();

    expect(aPost).not.toBeNull();
    expect(document.querySelector(".post-section__post-title").innerHTML).toBe(
      "ipsam"
    );
  });

  it("should load the post description", async () => {
    const aPost = await loadPost();

    expect(aPost).not.toBeNull();
    expect(
      document.querySelector(".post-section__post-subtitle__description")
        .innerHTML
    ).toBe("a fugiat quia voluptatibus");
  });

  it("should load the post body", async () => {
    const aPost = await loadPost();

    expect(aPost).not.toBeNull();
    expect(document.querySelector(".post-section__text").innerHTML).toContain(
      "Quos ad a velit labore"
    );
  });

  it("should load the post cover image", async () => {
    const aPost = await loadPost();

    expect(aPost).not.toBeNull();
    expect(document.querySelector(".post-section__image img")).toHaveProperty(
      "src",
      "https://picsum.photos/seed/73735/1920/270"
    );
  });
});
