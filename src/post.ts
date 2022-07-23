import { GRAPHQL_POST_API_BASE_URL } from "./constants";

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
  const postContent = await getPostById(postId).catch(() => []);
  if (postContent) {
    document.querySelector(".post-section__post-title").innerHTML =
      postContent.title;
    document.querySelector(
      ".post-section__post-subtitle__description"
    ).innerHTML = postContent.description;
    document.querySelector(".post-section__text").innerHTML = postContent.body;
    (
      document.querySelector(
        ".post-section__image__forefront-image"
      ) as HTMLImageElement
    ).src = postContent.cover;
    (
      document.querySelector(
        ".post-section__image__background-image"
      ) as HTMLImageElement
    ).src = postContent.cover;
    document.querySelector(
      ".post-section__post-subtitle__date__value"
    ).innerHTML = new Date(postContent.createdAt).toDateString();
    return postContent;
  }
}

window.addEventListener("load", loadPost);
