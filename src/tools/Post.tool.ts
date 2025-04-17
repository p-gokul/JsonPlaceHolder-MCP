import { API_URL } from "../index.js";
import { Posts, Post, postComments } from "../schemas/Posts.schema.js";
import { fetchData } from "../utils/api.js";
import { responseContent } from "../utils/responseContent.js";
import { formatPost, formatComment } from "../utils/formatResponse.js";
import { IdSchema, type ID } from "../schemas/Common.schema.js";

const GetPostTool = {
  title: "get-post-by-id",
  description: "Get a specific post item by ID",
  inputSchema: IdSchema,
  func: async ({ id }: { id: ID }) => {
    const postUrl = `${API_URL}/posts/${id}`;
    const postData = await fetchData<Post>(postUrl);

    if (!postData) return responseContent(`Post with ID ${id} not found`);

    const postText = `post Details:\n\n${formatPost(postData)}`;

    return responseContent(postText);
  },
};

const GetPostsTool = {
  title: "get-posts",
  description: "Get all post items",
  inputSchema: IdSchema,
  func: async () => {
    const postsUrl = `${API_URL}/posts`;
    const postsData = await fetchData<Posts>(postsUrl);

    if (!postsData) return responseContent("Failed to retrieve posts data.");

    if (postsData.length === 0) return responseContent("No posts found");

    const formattedposts = postsData.map(formatPost);
    const postsText = `All posts:\n\n${formattedposts.join("\n")}`;

    return responseContent(postsText);
  },
};

const GetPostCommentsTool = {
  title: "get-comments-of-postId",
  description: "Get comments by postID",
  inputSchema: IdSchema,
  func: async ({ id }: { id: ID }) => {
    const commentUrl = `${API_URL}/posts/${id}/comments`;
    const commentsData = await fetchData<postComments>(commentUrl);

    if (!commentsData) return responseContent(`Failed to retrieve comments.`);

    if (commentsData.length === 0) return responseContent("No comments found");

    const formattedComments = commentsData.map(formatComment);

    const comments = `post Details:\n\n${formattedComments.join("\n")}`;

    return responseContent(comments);
  },
};

export { GetPostTool, GetPostsTool, GetPostCommentsTool };
