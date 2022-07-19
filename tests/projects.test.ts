// const getThreePost = require('../src/projects');
import getThreePost from "../src/projects";

global.fetch = jest.fn(() =>
  Promise.resolve({
    status: 200,
    json: () =>
      Promise.resolve({
        data: {
          posts: [
            {
              body: "Quos ad a velit labore, a dolore dolorum ad corporis eos, a fugiat quia voluptatibus a. Voluptate molestiae odio nisi reprehenderit in, aperiam ea alias veniam repellat. Consequatur reprehenderit reiciendis a, reprehenderit exercitationem, at debitis reprehenderit sunt.\n\nExplicabo illo magnam reprehenderit porro odio, ad doloremque ex a, mollitia possimus qui hic. Reprehenderit a reprehenderit reprehenderit, ullam quod amet non, reprehenderit alias ea vel. A nam est reprehenderit qui ad dicta, recusandae totam esse, accusantium fugit. Soluta quibusdam voluptatibus eius, praesentium amet reprehenderit nostrum, ea odit mollitia. Dolorum repellendus a consequuntur totam nesciunt, facilis laudantium vitae consequatur repellendus ea laboriosam.\n\nReprehenderit at ipsum repellat quod, quos distinctio dolorum assumenda nostrum. Incidunt maxime modi, reprehenderit suscipit temporibus, at quo itaque a quo a illo. Dolorum consequatur magnam laborum eligendi a eos, voluptas a id rem labore ex libero est. Repellendus a ratione, ut labore a quo, excepturi ea nam perspiciatis provident. Minima voluptas aliquid a ipsum a ea, maiores sed perspiciatis odio, a reprehenderit mollitia labore libero illo dolorum beatae ex.\n\nQuibusdam similique ex, praesentium ut hic, id reprehenderit unde quo aut veniam debitis sed. A consequuntur voluptatum a accusantium, quo explicabo fugit ratione ab vitae. Quia a a pariatur, dolores cum blanditiis, inventore consequatur ut illo dolore aspernatur. Repellat reprehenderit reprehenderit at, repudiandae praesentium fugit, reprehenderit dolorem.\n\nAd ipsum nam eum praesentium a voluptatem ex qui, consequatur iste dignissimos ut. Voluptatibus perferendis, ab quo dolore voluptatibus, tempora nesciunt cupiditate consequuntur sed. Maiores inventore ea, reprehenderit asperiores labore, consequatur eum suscipit. Sapiente rem consectetur, a omnis ab suscipit facilis maiores repudiandae, cumque ex consequuntur cum, cumque minima a illo officiis.\n\nRepellendus dolores iste temporibus, cum reprehenderit praesentium, voluptate corrupti. Suscipit fuga a ut minima consequuntur corrupti, consectetur a a ex excepturi perspiciatis. A vel minus temporibus at a sit itaque explicabo, sunt reprehenderit doloribus. Doloribus nihil incidunt, rerum inventore distinctio veniam a, quam illum eos exercitationem, molestias id quaerat, repellendus reprehenderit.\n\nReprehenderit officiis debitis ut reprehenderit, sunt a sapiente voluptates a tenetur a. Accusantium temporibus, consequuntur consequatur iusto optio neque, repudiandae expedita officia quae, molestias deserunt itaque a, reprehenderit maxime.",
              cover: "https://picsum.photos/seed/73735/1920/270",
              title: "ipsam",
            },
            {
              body: "Quos ad a velit labore, a dolore dolorum ad corporis eos, a fugiat quia voluptatibus a. Voluptate molestiae odio nisi reprehenderit in, aperiam ea alias veniam repellat. Consequatur reprehenderit reiciendis a, reprehenderit exercitationem, at debitis reprehenderit sunt.\n\nExplicabo illo magnam reprehenderit porro odio, ad doloremque ex a, mollitia possimus qui hic. Reprehenderit a reprehenderit reprehenderit, ullam quod amet non, reprehenderit alias ea vel. A nam est reprehenderit qui ad dicta, recusandae totam esse, accusantium fugit. Soluta quibusdam voluptatibus eius, praesentium amet reprehenderit nostrum, ea odit mollitia. Dolorum repellendus a consequuntur totam nesciunt, facilis laudantium vitae consequatur repellendus ea laboriosam.\n\nReprehenderit at ipsum repellat quod, quos distinctio dolorum assumenda nostrum. Incidunt maxime modi, reprehenderit suscipit temporibus, at quo itaque a quo a illo. Dolorum consequatur magnam laborum eligendi a eos, voluptas a id rem labore ex libero est. Repellendus a ratione, ut labore a quo, excepturi ea nam perspiciatis provident. Minima voluptas aliquid a ipsum a ea, maiores sed perspiciatis odio, a reprehenderit mollitia labore libero illo dolorum beatae ex.\n\nQuibusdam similique ex, praesentium ut hic, id reprehenderit unde quo aut veniam debitis sed. A consequuntur voluptatum a accusantium, quo explicabo fugit ratione ab vitae. Quia a a pariatur, dolores cum blanditiis, inventore consequatur ut illo dolore aspernatur. Repellat reprehenderit reprehenderit at, repudiandae praesentium fugit, reprehenderit dolorem.\n\nAd ipsum nam eum praesentium a voluptatem ex qui, consequatur iste dignissimos ut. Voluptatibus perferendis, ab quo dolore voluptatibus, tempora nesciunt cupiditate consequuntur sed. Maiores inventore ea, reprehenderit asperiores labore, consequatur eum suscipit. Sapiente rem consectetur, a omnis ab suscipit facilis maiores repudiandae, cumque ex consequuntur cum, cumque minima a illo officiis.\n\nRepellendus dolores iste temporibus, cum reprehenderit praesentium, voluptate corrupti. Suscipit fuga a ut minima consequuntur corrupti, consectetur a a ex excepturi perspiciatis. A vel minus temporibus at a sit itaque explicabo, sunt reprehenderit doloribus. Doloribus nihil incidunt, rerum inventore distinctio veniam a, quam illum eos exercitationem, molestias id quaerat, repellendus reprehenderit.\n\nReprehenderit officiis debitis ut reprehenderit, sunt a sapiente voluptates a tenetur a. Accusantium temporibus, consequuntur consequatur iusto optio neque, repudiandae expedita officia quae, molestias deserunt itaque a, reprehenderit maxime.",
              cover: "https://picsum.photos/seed/73735/1920/270",
              title: "ipsam",
            },
            {
              body: "Quos ad a velit labore, a dolore dolorum ad corporis eos, a fugiat quia voluptatibus a. Voluptate molestiae odio nisi reprehenderit in, aperiam ea alias veniam repellat. Consequatur reprehenderit reiciendis a, reprehenderit exercitationem, at debitis reprehenderit sunt.\n\nExplicabo illo magnam reprehenderit porro odio, ad doloremque ex a, mollitia possimus qui hic. Reprehenderit a reprehenderit reprehenderit, ullam quod amet non, reprehenderit alias ea vel. A nam est reprehenderit qui ad dicta, recusandae totam esse, accusantium fugit. Soluta quibusdam voluptatibus eius, praesentium amet reprehenderit nostrum, ea odit mollitia. Dolorum repellendus a consequuntur totam nesciunt, facilis laudantium vitae consequatur repellendus ea laboriosam.\n\nReprehenderit at ipsum repellat quod, quos distinctio dolorum assumenda nostrum. Incidunt maxime modi, reprehenderit suscipit temporibus, at quo itaque a quo a illo. Dolorum consequatur magnam laborum eligendi a eos, voluptas a id rem labore ex libero est. Repellendus a ratione, ut labore a quo, excepturi ea nam perspiciatis provident. Minima voluptas aliquid a ipsum a ea, maiores sed perspiciatis odio, a reprehenderit mollitia labore libero illo dolorum beatae ex.\n\nQuibusdam similique ex, praesentium ut hic, id reprehenderit unde quo aut veniam debitis sed. A consequuntur voluptatum a accusantium, quo explicabo fugit ratione ab vitae. Quia a a pariatur, dolores cum blanditiis, inventore consequatur ut illo dolore aspernatur. Repellat reprehenderit reprehenderit at, repudiandae praesentium fugit, reprehenderit dolorem.\n\nAd ipsum nam eum praesentium a voluptatem ex qui, consequatur iste dignissimos ut. Voluptatibus perferendis, ab quo dolore voluptatibus, tempora nesciunt cupiditate consequuntur sed. Maiores inventore ea, reprehenderit asperiores labore, consequatur eum suscipit. Sapiente rem consectetur, a omnis ab suscipit facilis maiores repudiandae, cumque ex consequuntur cum, cumque minima a illo officiis.\n\nRepellendus dolores iste temporibus, cum reprehenderit praesentium, voluptate corrupti. Suscipit fuga a ut minima consequuntur corrupti, consectetur a a ex excepturi perspiciatis. A vel minus temporibus at a sit itaque explicabo, sunt reprehenderit doloribus. Doloribus nihil incidunt, rerum inventore distinctio veniam a, quam illum eos exercitationem, molestias id quaerat, repellendus reprehenderit.\n\nReprehenderit officiis debitis ut reprehenderit, sunt a sapiente voluptates a tenetur a. Accusantium temporibus, consequuntur consequatur iusto optio neque, repudiandae expedita officia quae, molestias deserunt itaque a, reprehenderit maxime.",
              cover: "https://picsum.photos/seed/73735/1920/270",
              title: "ipsam",
            },
            {
              body: "Quos ad a velit labore, a dolore dolorum ad corporis eos, a fugiat quia voluptatibus a. Voluptate molestiae odio nisi reprehenderit in, aperiam ea alias veniam repellat. Consequatur reprehenderit reiciendis a, reprehenderit exercitationem, at debitis reprehenderit sunt.\n\nExplicabo illo magnam reprehenderit porro odio, ad doloremque ex a, mollitia possimus qui hic. Reprehenderit a reprehenderit reprehenderit, ullam quod amet non, reprehenderit alias ea vel. A nam est reprehenderit qui ad dicta, recusandae totam esse, accusantium fugit. Soluta quibusdam voluptatibus eius, praesentium amet reprehenderit nostrum, ea odit mollitia. Dolorum repellendus a consequuntur totam nesciunt, facilis laudantium vitae consequatur repellendus ea laboriosam.\n\nReprehenderit at ipsum repellat quod, quos distinctio dolorum assumenda nostrum. Incidunt maxime modi, reprehenderit suscipit temporibus, at quo itaque a quo a illo. Dolorum consequatur magnam laborum eligendi a eos, voluptas a id rem labore ex libero est. Repellendus a ratione, ut labore a quo, excepturi ea nam perspiciatis provident. Minima voluptas aliquid a ipsum a ea, maiores sed perspiciatis odio, a reprehenderit mollitia labore libero illo dolorum beatae ex.\n\nQuibusdam similique ex, praesentium ut hic, id reprehenderit unde quo aut veniam debitis sed. A consequuntur voluptatum a accusantium, quo explicabo fugit ratione ab vitae. Quia a a pariatur, dolores cum blanditiis, inventore consequatur ut illo dolore aspernatur. Repellat reprehenderit reprehenderit at, repudiandae praesentium fugit, reprehenderit dolorem.\n\nAd ipsum nam eum praesentium a voluptatem ex qui, consequatur iste dignissimos ut. Voluptatibus perferendis, ab quo dolore voluptatibus, tempora nesciunt cupiditate consequuntur sed. Maiores inventore ea, reprehenderit asperiores labore, consequatur eum suscipit. Sapiente rem consectetur, a omnis ab suscipit facilis maiores repudiandae, cumque ex consequuntur cum, cumque minima a illo officiis.\n\nRepellendus dolores iste temporibus, cum reprehenderit praesentium, voluptate corrupti. Suscipit fuga a ut minima consequuntur corrupti, consectetur a a ex excepturi perspiciatis. A vel minus temporibus at a sit itaque explicabo, sunt reprehenderit doloribus. Doloribus nihil incidunt, rerum inventore distinctio veniam a, quam illum eos exercitationem, molestias id quaerat, repellendus reprehenderit.\n\nReprehenderit officiis debitis ut reprehenderit, sunt a sapiente voluptates a tenetur a. Accusantium temporibus, consequuntur consequatur iusto optio neque, repudiandae expedita officia quae, molestias deserunt itaque a, reprehenderit maxime.",
              cover: "https://picsum.photos/seed/73735/1920/270",
              title: "ipsam",
            },
            {
              body: "Quos ad a velit labore, a dolore dolorum ad corporis eos, a fugiat quia voluptatibus a. Voluptate molestiae odio nisi reprehenderit in, aperiam ea alias veniam repellat. Consequatur reprehenderit reiciendis a, reprehenderit exercitationem, at debitis reprehenderit sunt.\n\nExplicabo illo magnam reprehenderit porro odio, ad doloremque ex a, mollitia possimus qui hic. Reprehenderit a reprehenderit reprehenderit, ullam quod amet non, reprehenderit alias ea vel. A nam est reprehenderit qui ad dicta, recusandae totam esse, accusantium fugit. Soluta quibusdam voluptatibus eius, praesentium amet reprehenderit nostrum, ea odit mollitia. Dolorum repellendus a consequuntur totam nesciunt, facilis laudantium vitae consequatur repellendus ea laboriosam.\n\nReprehenderit at ipsum repellat quod, quos distinctio dolorum assumenda nostrum. Incidunt maxime modi, reprehenderit suscipit temporibus, at quo itaque a quo a illo. Dolorum consequatur magnam laborum eligendi a eos, voluptas a id rem labore ex libero est. Repellendus a ratione, ut labore a quo, excepturi ea nam perspiciatis provident. Minima voluptas aliquid a ipsum a ea, maiores sed perspiciatis odio, a reprehenderit mollitia labore libero illo dolorum beatae ex.\n\nQuibusdam similique ex, praesentium ut hic, id reprehenderit unde quo aut veniam debitis sed. A consequuntur voluptatum a accusantium, quo explicabo fugit ratione ab vitae. Quia a a pariatur, dolores cum blanditiis, inventore consequatur ut illo dolore aspernatur. Repellat reprehenderit reprehenderit at, repudiandae praesentium fugit, reprehenderit dolorem.\n\nAd ipsum nam eum praesentium a voluptatem ex qui, consequatur iste dignissimos ut. Voluptatibus perferendis, ab quo dolore voluptatibus, tempora nesciunt cupiditate consequuntur sed. Maiores inventore ea, reprehenderit asperiores labore, consequatur eum suscipit. Sapiente rem consectetur, a omnis ab suscipit facilis maiores repudiandae, cumque ex consequuntur cum, cumque minima a illo officiis.\n\nRepellendus dolores iste temporibus, cum reprehenderit praesentium, voluptate corrupti. Suscipit fuga a ut minima consequuntur corrupti, consectetur a a ex excepturi perspiciatis. A vel minus temporibus at a sit itaque explicabo, sunt reprehenderit doloribus. Doloribus nihil incidunt, rerum inventore distinctio veniam a, quam illum eos exercitationem, molestias id quaerat, repellendus reprehenderit.\n\nReprehenderit officiis debitis ut reprehenderit, sunt a sapiente voluptates a tenetur a. Accusantium temporibus, consequuntur consequatur iusto optio neque, repudiandae expedita officia quae, molestias deserunt itaque a, reprehenderit maxime.",
              cover: "https://picsum.photos/seed/73735/1920/270",
              title: "ipsam",
            },
          ],
        },
      }),
  })
) as jest.Mock;

describe("Loading Project Cards", () => {
  it("should call API to get posts", async () => {
    const post = await getThreePost();
    expect(post).toBeTruthy();
  });
  it("should return an array of post", async () => {
    const post = await getThreePost();
    expect(Array.isArray(post)).toBe(true);
  });
  it("should thrown an error if API request fail", async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(
      new Error("Some unexpected error")
    );
    await expect(getThreePost()).rejects.toThrow();
  });

  it("should return at least three posts", async () => {
    const post = await getThreePost();
    expect(post.length).toBeGreaterThanOrEqual(3);
  });

  it("a post contains a body", async () => {
    const post = await getThreePost();
    const aPost = post[0];
    expect(aPost).toHaveProperty("body");
  });

  it("a post contains a title", async () => {
    const post = await getThreePost();
    const aPost = post[0];
    expect(aPost).toHaveProperty("title");
  });

  it("a post contains a cover image", async () => {
    const post = await getThreePost();
    const aPost = post[0];
    expect(aPost).toHaveProperty("cover");
  });
});
