import { fetchData } from "../utils/api.js";
import { responseContent } from "../utils/responseContent.js";
import { Album, AlbumPhotos, Albums } from "../schemas/Albums.schema.js";
import { formatAlbum, formatAlbumPhoto } from "../utils/formatResponse.js";
import { API_URL } from "../index.js";
import { IdSchema, type ID } from "../schemas/Common.schema.js";

const GetAlbumsTool = {
  title: "get-albums",
  description: "Get all albums",
  inputSchema: undefined,
  func: async () => {
    const albumsUrl = `${API_URL}/albums`;
    const albumsData = await fetchData<Albums>(albumsUrl);

    if (!albumsData) return responseContent("Failed to retrieve albums data.");

    if (albumsData.length === 0) return responseContent("No Albums found");

    const formattedAlbums = albumsData.map(formatAlbum);
    const albumsText = `All Albums:\n\n${formattedAlbums.join("\n")}`;

    return responseContent(albumsText);
  },
};

const GetAlbumTool = {
  title: "get-album-by-id",
  description: "Get Album by ID",
  inputSchema: IdSchema,
  func: async ({ id }: { id: ID }) => {
    const albumUrl = `${API_URL}/albums/${id}`;
    const albumData = await fetchData<Album>(albumUrl);

    if (!albumData) return responseContent(`Album with ID ${id} not found`);

    const albumText = `Album Details:\n\n${formatAlbum(albumData)}`;

    return responseContent(albumText);
  },
};

const GetPhotosOfAlbumTool = {
  title: "get-url-of-photos-of-album",
  description: "Get url of photos by album Id",
  inputSchema: IdSchema,
  func: async ({ id }: { id: ID }) => {
    const albumPhotosUrl = `${API_URL}/albums/${id}/photos`;
    const albumPhotosData = await fetchData<AlbumPhotos>(albumPhotosUrl);

    if (!albumPhotosData)
      return responseContent(`Album photos with ID ${id} not found`);

    if (albumPhotosData.length === 0)
      return responseContent("No photos found in the album.");

    const formattedAlbumPhotos = albumPhotosData.map(formatAlbumPhoto);

    const albumPhotosText = `Album Photo Details:\n\n${formattedAlbumPhotos.join(
      "\n"
    )}`;

    return responseContent(albumPhotosText);
  },
};

export { GetAlbumsTool, GetAlbumTool, GetPhotosOfAlbumTool };
