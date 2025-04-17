import { API_URL } from "../index.js";
import { IdSchema, type ID } from "../schemas/Common.schema.js";
import { User, Users } from "../schemas/Users.schema.js";
import { fetchData } from "../utils/api.js";
import { formatUser } from "../utils/formatResponse.js";
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

export { GetUserTool, GetUsersTool };
