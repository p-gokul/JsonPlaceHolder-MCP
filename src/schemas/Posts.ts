import { z } from "zod";

interface Post {
  userId: number;
  id: number;
  title?: string;
  body?: string;
}

interface Posts extends Array<Post> {}

const IdSchema = z
  .number()
  .int()
  .positive({ message: "ID must be a positive integer." })
  .describe("ID of the post to retrieve");

export type ID = z.infer<typeof IdSchema>;

export { Post, Posts, IdSchema };
