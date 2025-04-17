#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  GetPostTool,
  GetPostsTool,
  GetPostCommentsTool,
} from "./tools/Post.tool.js";
import {
  GetAlbumTool,
  GetAlbumsTool,
  GetPhotosOfAlbumTool,
} from "./tools/Album.tool.js";
import { GetUsersTool, GetUserTool } from "./tools/User.tool.js";

// API URL
export const API_URL = "https://jsonplaceholder.typicode.com/";

// Create server instance
const server = new McpServer({
  name: "JsonPlaceHolder",
  version: "1.0.0",
});

// Fetch Posts
server.tool(
  GetPostsTool.title,
  GetPostsTool.description,
  {},
  GetPostsTool.func
);

// Fetch post by ID
server.tool(
  GetPostTool.title,
  GetPostTool.description,
  { id: GetPostTool.inputSchema },
  GetPostTool.func
);

// Fetch comments by Post ID
server.tool(
  GetPostCommentsTool.title,
  GetPostCommentsTool.description,
  { id: GetPostCommentsTool.inputSchema },
  GetPostCommentsTool.func
);

// Fetch Albums
server.tool(
  GetAlbumsTool.title,
  GetAlbumsTool.description,
  {},
  GetAlbumsTool.func
);

// Fetch Album by Id
server.tool(
  GetAlbumTool.title,
  GetAlbumTool.description,
  { id: GetAlbumTool.inputSchema },
  GetAlbumTool.func
);

// Fetch Album Photos
server.tool(
  GetPhotosOfAlbumTool.title,
  GetPhotosOfAlbumTool.description,
  { id: GetPhotosOfAlbumTool.inputSchema },
  GetPhotosOfAlbumTool.func
);

// Fetch Users
server.tool(
  GetUsersTool.title,
  GetUsersTool.description,
  {},
  GetUsersTool.func
);

// Fetch User
server.tool(
  GetUserTool.title,
  GetUserTool.description,
  { id: GetUserTool.inputSchema },
  GetUserTool.func
);

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
