import { z } from "zod";

interface Post {
  userId: number;
  id: number;
  title?: string;
  body?: string;
}

interface Posts extends Array<Post> {}

interface postComment {
  postId: number;
  id: number;
  name: string;
  email?: string;
  body?: string;
}

interface postComments extends Array<postComment> {}

const IdSchema = z
  .number()
  .int()
  .positive({ message: "ID must be a positive integer." })
  .describe("ID of the post to retrieve");

export type ID = z.infer<typeof IdSchema>;

export { Post, Posts, IdSchema, postComment, postComments };
