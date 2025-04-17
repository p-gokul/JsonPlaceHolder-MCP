import { API_URL } from "../index.js";
import { IdSchema, type ID } from "../schemas/Common.schema.js";
import {
  User,
  Users,
  UserAlbums,
  UserTodos,
  UserPosts,
} from "../schemas/Users.schema.js";
import { fetchData } from "../utils/api.js";
import {
  formatUser,
  formatUserAlbum,
  formatUserPost,
  formatUserTodo,
} from "../utils/formatResponse.js";
import { responseContent } from "../utils/responseContent.js";

const GetUsersTool = {
  title: "get-users",
  description: "Get all Users",
  inputSchema: undefined,
  func: async () => {
    const usersUrl = `${API_URL}/users`;
    const usersData = await fetchData<Users>(usersUrl);

    if (!usersData) return responseContent("Failed to retrieve users data.");

    if (usersData.length === 0) return responseContent("No Users found.");

    const formattedUsers = usersData.map(formatUser);
    const usersText = `All Users:\n\n${formattedUsers.join("\n")}`;

    return responseContent(usersText);
  },
};

const GetUserTool = {
  title: "get-user-by-id",
  description: "Get user detail by ID",
  inputSchema: IdSchema,
  func: async ({ id }: { id: ID }) => {
    const userUrl = `${API_URL}/users/${id}`;
    const userData = await fetchData<User>(userUrl);

    if (!userData) return responseContent(`User with Id ${id} not found.`);

    const userText = `User Details:\n\n${formatUser(userData)}`;

    return responseContent(userText);
  },
};

const GetUserAlbumsTool = {
  title: "get-user-albums",
  description: "Get user albums by User ID",
  inputSchema: IdSchema,
  func: async ({ id }: { id: ID }) => {
    const userAlbumsUrl = `${API_URL}/users/${id}/albums`;
    const userAlbumsData = await fetchData<UserAlbums>(userAlbumsUrl);

    if (!userAlbumsData)
      return responseContent(`Failed to retrieve albums with user id ${id}`);

    if (userAlbumsData.length === 0)
      return responseContent(`No albums found for the user id ${id}`);

    const formattedUserAlbums = userAlbumsData.map(formatUserAlbum);

    const userAlbumsText = `All User Albums with user id${id}:\n\n${formattedUserAlbums.join(
      "\n",
    )}`;

    return responseContent(userAlbumsText);
  },
};

const GetUserTodosTool = {
  title: "get-user-todos",
  description: "Get user todos by User ID",
  inputSchema: IdSchema,
  func: async ({ id }: { id: ID }) => {
    const userTodosUrl = `${API_URL}/users/${id}/todos`;
    const userTodosData = await fetchData<UserTodos>(userTodosUrl);

    if (!userTodosData)
      return responseContent(`Failed to retrieve todos with user id ${id} `);

    if (userTodosData.length === 0)
      return responseContent(`No todos found for user id ${id}`);

    const formattedUserTodos = userTodosData.map(formatUserTodo);

    return responseContent(
      `All User Todos with user id ${id}:\n\n${formattedUserTodos.join("\n")}`,
    );
  },
};

const GetUserPostsTool = {
  title: "get-user-posts",
  description: "Get user posts by User ID",
  inputSchema: IdSchema,
  func: async ({ id }: { id: ID }) => {
    const userPostsUrl = `${API_URL}/users/${id}/posts`;
    const userPostsData = await fetchData<UserPosts>(userPostsUrl);

    if (!userPostsData)
      return responseContent(`Failed to retrieve posts with user id ${id}`);

    if (userPostsData.length === 0)
      return responseContent(`No posts found for the user id ${id}`);

    const formattedUserPosts = userPostsData.map(formatUserPost);

    return responseContent(
      `All User Posts with user id ${id}:\n\n${formattedUserPosts.join("\n")}`,
    );
  },
};

export {
  GetUserTool,
  GetUsersTool,
  GetUserAlbumsTool,
  GetUserPostsTool,
  GetUserTodosTool,
};
