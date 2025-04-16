import { Post } from "../schemas/Posts.js";

// Format post data
function formatPost(post: Post): string {
  return [
    `ID: ${post.id}`,
    `Title: ${post.title}`,
    `Body: ${post.body}`,
    "---",
  ].join("\n");
}

export { formatPost };
