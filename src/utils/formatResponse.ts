import { Post, postComment } from "../schemas/Posts.schema.js";

// Format post data
function formatPost(post: Post): string {
  return [
    `ID: ${post.id}`,
    `Title: ${post.title}`,
    `Body: ${post.body}`,
    "---",
  ].join("\n");
}

// Format Post Comments
function formatComment(postComment: postComment) {
  return [
    `PostId: ${postComment.postId}`,
    `ID: ${postComment.id}`,
    `Name: ${postComment.name}`,
    `Email: ${postComment.email}`,
    `Body: ${postComment.body}`,
    "---",
  ].join("\n");
}

export { formatPost, formatComment };
