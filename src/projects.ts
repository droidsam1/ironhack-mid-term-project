const BASE_URL =
  "https://mockend.com/droidsam1/ironhack-mid-term-project-mockend/posts";

const GRAPHQL_BASE_URL =
  "https://mockend.com/droidsam1/ironhack-mid-term-project-mockend/graphql?";

export async function getThreePost() {
  const response = await fetch(GRAPHQL_BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `{
            posts(limit: 3) {
              id,
              title,
              body,
              cover
            }
          }`,
    }),
  });
  const json = await response.json();
  return json.data.posts;
}

export async function loadCards() {
  const MAX_CARDS_TO_LOAD = 3;
  const newPosts = await getThreePost().catch(() => []);
  if (newPosts && newPosts.length > 0) {
    cleanProjectCardsSection();
    newPosts
      .slice(0, MAX_CARDS_TO_LOAD)
      .forEach(
        (element: {
          id: string;
          cover: string;
          title: string;
          body: string;
        }) => {
          createNewProjectCard(element);
        }
      );
  }
}

const cleanProjectCardsSection = () => {
  const projectCards = document.querySelector(".projects-section .cards");
  projectCards.innerHTML = "";
};

const createNewProjectCard = (post: {
  id: string;
  cover: string;
  title: string;
  body: string;
}) => {
  const card = document.createElement("div");
  card.classList.add("cards__card", "cards__card-with-image");

  const image = document.createElement("img");
  image.classList.add("cards__card__image");
  image.src = post.cover;

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("cards__card__title", "capitalize");
  cardTitle.innerHTML = post.title;

  const cardDescription = document.createElement("div");
  cardDescription.classList.add("cards__card__description");
  cardDescription.innerHTML = post.body.slice(0, 10) + "...";

  const learnMore = document.createElement("div");
  learnMore.classList.add("cards__card_learn-more");
  const learnMoreAnchor = document.createElement("a");
  learnMoreAnchor.href = `/post/${post.id}`;
  learnMoreAnchor.innerText = "Learn more";
  learnMore.appendChild(learnMoreAnchor);

  card.appendChild(image);
  card.appendChild(cardTitle);
  card.appendChild(cardDescription);
  card.appendChild(learnMore);

  const projectCards = document.querySelector(".projects-section .cards");
  projectCards.appendChild(card);
};
