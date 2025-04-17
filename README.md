# JsonPlaceHolder MCP Application

A comprehensive Model Context Protocol (MCP) server that interacts with the [JsonPlaceholder](https://jsonplaceholder.typicode.com/) (```https://jsonplaceholder.typicode.com```)API to provide access to users, posts, albums, and related data.

## 🚀 Features

This MCP Server provides a set of tools to interact with various endpoints of the JSONPlaceholder API:

### 👤 User Tools

- **Get Users**: Retrieve a list of all users
- **Get User by ID**: Fetch details of a specific user
- **Get User Posts**: Retrieve all posts created by a specific user
- **Get User Albums**: Fetch all albums created by a specific user
- **Get User Todos**: Retrieve all todos associated with a specific user

### 📝 Post Tools

- **Get Posts**: Retrieve a list of all posts
- **Get Post by ID**: Fetch details of a specific post
- **Get Post Comments**: Retrieve all comments on a specific post

### 🖼️ Album Tools

- **Get Albums**: Retrieve a list of all albums
- **Get Album by ID**: Fetch details of a specific album
- **Get Album Photos**: Retrieve all photos in a specific album

## 🛠️ Technical Details

This application is built using:

- TypeScript
- Zod for schema validation
- Fetch API for data retrieval

# Usage with Claude Desktop


##### NPX

1. Install the libraries

```bash
npm run install
```

2. Build the server

```bash
npm run build
```

3. Add this to claude_desktop_config.json<br>
   Note: For Windows use path : `absolute_path\\dist\\index.js`

```bash
{
  "mcpServers": {
    "JsonPlaceHolder MCP Server": {
      "command": "node",
      "args": [
        "absolute_path/dist/index.js"
      ]
    }
  }
}
```

Or Inspect Locally

```bash
npm run inspect
```
