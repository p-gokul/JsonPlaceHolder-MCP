import { z } from "zod";

export const IdSchema = z
  .number()
  .int()
  .positive({ message: "ID must be a positive integer." })
  .describe("ID of the post to retrieve");

export type ID = z.infer<typeof IdSchema>;
