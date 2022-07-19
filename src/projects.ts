const BASE_URL =
  "https://mockend.com/droidsam1/ironhack-mid-term-project-mockend/posts";

const GRAPHQL_BASE_URL =
  "https://mockend.com/droidsam1/ironhack-mid-term-project-mockend/graphql?";

export default async function getThreePost() {
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
