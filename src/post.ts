const GRAPHQL_POST_API_BASE_URL =
  "https://mockend.com/droidsam1/ironhack-mid-term-project-mockend/graphql?";

export async function getPostById(postId: number) {
  const response = await fetch(GRAPHQL_POST_API_BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query ($postId: Int!) {
        post(id: $postId) {
          id
          title
          description
          body
          cover,
          coverDescription,
          createdAt
        }
      }`,
      variables: { postId },
    }),
  });
  const json = await response.json();
  return json.data.post;
}

export async function loadPost() {
  const postId = parseInt(
    new URLSearchParams(window.location.search).get("id")
  );
  const postContent = await getPostById(postId);
  if (postContent) {
    setTitle(postContent.title);
    setDescription(postContent.description);
    setBody(postContent.body);
    setCover(postContent.cover, postContent.coverDescription);
    setCreationDate(new Date(postContent.createdAt));
    return postContent;
  }
}

const setTitle = (title: string) => {
  document.querySelector(".post-section__post-title").innerHTML = title;
}
const setDescription = (description: string) => {
  document.querySelector(
    ".post-section__post-subtitle__description"
  ).innerHTML = description;
}
const setBody = (body: string) => {
  document.querySelector(".post-section__text").innerHTML = body;
}
const setCover = (coverImage: string, coverDescription: string) => {
  const foreFrontImage = document.querySelector(
    ".post-section__image__forefront-image"
  ) as HTMLImageElement
  foreFrontImage.src = coverImage;
  foreFrontImage.alt = coverDescription;

  const backgroundImage = document.querySelector(
    ".post-section__image__background-image"
  ) as HTMLImageElement

  backgroundImage.src = coverImage;
  backgroundImage.alt = coverDescription;
}

const setCreationDate = (date: Date) => {
  document.querySelector(
    ".post-section__post-subtitle__date__value"
  ).innerHTML = date.toDateString();
}

window.addEventListener("load", loadPost);
