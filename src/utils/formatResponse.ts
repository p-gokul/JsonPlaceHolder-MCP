import { Post, postComment } from "../schemas/Posts.schema.js";
import { Album, AlbumPhoto } from "../schemas/Albums.schema.js";

// Format post data
function formatPost(post: Post): string {
  return [
    `ID: ${post.id}`,
    `Title: ${post.title}`,
    `Body: ${post.body}`,
    "---",
  ].join("\n");
}

// Format Post Comments
function formatComment(postComment: postComment) {
  return [
    `PostId: ${postComment.postId}`,
    `ID: ${postComment.id}`,
    `Name: ${postComment.name}`,
    `Email: ${postComment.email}`,
    `Body: ${postComment.body}`,
    "---",
  ].join("\n");
}

// Format Albums
function formatAlbum(album: Album) {
  return [
    `UserId: ${album.userId}`,
    `Id: ${album.id}`,
    `Title: ${album.title}`,
    "---",
  ].join("\n");
}

// Format Album Photos
function formatAlbumPhoto(albumPhoto: AlbumPhoto) {
  return [
    `AlbumId: ${albumPhoto.albumId}`,
    `Id: ${albumPhoto.id}`,
    `Title: ${albumPhoto.title}`,
    `Url: ${albumPhoto.url}`,
    `Thumbnail: ${albumPhoto.thumbnailUrl}`,
    "---",
  ].join("\n");
}

export { formatPost, formatComment, formatAlbum, formatAlbumPhoto };
