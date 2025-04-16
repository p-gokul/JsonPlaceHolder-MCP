#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// API URL
export const API_URL = "https://jsonplaceholder.typicode.com/";

// Create server instance
const server = new McpServer({
  name: "JsonPlaceHolder",
  version: "1.0.0",
});

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

// Format post data
function formatPost(post: Post): string {
  return [
    `ID: ${post.id}`,
    `Title: ${post.title}`,
    `Body: ${post.body}`,
    "---",
  ].join("\n");
}

// Helper function for making API requests
async function fetchData<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return (await response.json()) as T;
  } catch (error) {
    console.error("Error fetching todo data:", error);
    return null;
  }
}

// Fetch Post by ID Tool
server.tool(
  "get-post-by-id",
  "Get a specific post item by ID",
  {
    id: z
      .number()
      .int()
      .positive({ message: "ID must be a positive integer." })
      .describe("ID of the post to retrieve"),
  },
  async ({ id }: { id: ID }) => {
    const postUrl = `${API_URL}/posts/${id}`;
    const postData = await fetchData<Post>(postUrl);

    if (!postData) {
      return {
        content: [
          {
            type: "text",
            text: `Failed to retrieve post of id ${id}`,
          },
        ],
      };
    }

    const postText = `post Details:\n\n${formatPost(postData)}`;

    return {
      content: [
        {
          type: "text",
          text: postText,
        },
      ],
    };
  }
);

// Fetch Posts
server.tool("get-posts", "Get all post items", {}, async () => {
  const postsUrl = `${API_URL}/posts`;
  const postsData = await fetchData<Posts>(postsUrl);

  if (!postsData) {
    return {
      content: [
        {
          type: "text",
          text: `Failed to retrieve posts`,
        },
      ],
    };
  }
  if (postsData.length === 0) {
    return {
      content: [
        {
          type: "text",
          text: `No posts found`,
        },
      ],
    };
  }

  const formattedposts = postsData.map(formatPost);
  const postsText = `All posts:\n\n${formattedposts.join("\n")}`;

  return {
    content: [
      {
        type: "text",
        text: postsText,
      },
    ],
  };
});

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Todo MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
