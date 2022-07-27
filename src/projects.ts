const GRAPHQL_POST_API_BASE_URL =
  "https://mockend.com/droidsam1/ironhack-mid-term-project-mockend/graphql?";

async function getTenPost() {
  const response = await fetch(GRAPHQL_POST_API_BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `{
            posts(limit: 10) {
              id,
              title,
              description,
              cover,
              coverDescription
            }
          }`,
    }),
  });
  const json = await response.json();
  return json.data.posts;
}

export async function getRandomPosts() {
  const posts = await getTenPost();
  if (posts && posts.length > 0) {
    shuffleArray(posts);
    return posts;
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export async function loadCards() {
  const MAX_CARDS_TO_LOAD = 3;
  const newPosts = await getRandomPosts().catch(() => []);
  if (newPosts && newPosts.length > 0) {
    cleanProjectCardsSection();
    newPosts
      .slice(0, MAX_CARDS_TO_LOAD)
      .forEach(
        (element: {
          'id': string;
          'cover': string;
          'coverDescription': string;
          'title': string;
          'description': string;
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
  'id': string;
  'cover': string;
  'coverDescription': string;
  'title': string;
  'description': string;
}) => {
  const card = document.createElement("div");
  card.classList.add("cards__card", "cards__card-with-image");

  const image = document.createElement("img");
  image.classList.add("cards__card__image");
  image.src = post.cover;
  image.alt = post["coverDescription"];

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("cards__card__title", "capitalize");
  cardTitle.innerHTML = post.title;

  const cardDescription = document.createElement("div");
  cardDescription.classList.add("cards__card__description");
  cardDescription.innerHTML = post.description;

  const learnMore = document.createElement("div");
  learnMore.classList.add("cards__card_learn-more");
  const learnMoreAnchor = document.createElement("a");
  learnMoreAnchor.href = `/pages/post.html?id=${post.id}`;
  learnMoreAnchor.innerText = "Learn more";
  learnMore.appendChild(learnMoreAnchor);

  card.appendChild(image);
  card.appendChild(cardTitle);
  card.appendChild(cardDescription);
  card.appendChild(learnMore);

  const projectCards = document.querySelector(".projects-section .cards");
  projectCards.appendChild(card);
};

window.addEventListener("load", loadCards);
