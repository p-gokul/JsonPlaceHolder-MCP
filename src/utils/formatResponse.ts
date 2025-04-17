import { Post, postComment } from "../schemas/Posts.schema.js";
import { Album, AlbumPhoto } from "../schemas/Albums.schema.js";
import { User } from "../schemas/Users.schema.js";
import { UserAlbum, UserTodo, UserPost } from "../schemas/Users.schema.js";

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

// Format User Data
function formatUser(user: User) {
  const { id, name, username, email, address, phone, website, company } = user;

  const formattedCompany = [
    `Name: ${company.name}`,
    `Catch Phrase: ${company.catchPhrase}`,
    `BS: ${company.bs}`,
  ].join("\n  ");

  const formattedAddress = [
    `Street: ${address.street}`,
    `Suite: ${address.suite}`,
    `City: ${address.city}`,
    `Zipcode: ${address.zipcode}`,
    `Geo: [Lat: ${address.geo.lat}, Lng: ${address.geo.lng}]`,
  ].join("\n  ");

  return [
    `ID: ${id}`,
    `Name: ${name}`,
    `Username: ${username}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Website: ${website}`,
    `Address:\n  ${formattedAddress}`,
    `Company:\n  ${formattedCompany}`,
    "---",
  ].join("\n");
}

function formatUserTodo(todo: UserTodo) {
  return [
    `ID: ${todo.id}`,
    `User ID: ${todo.userId}`,
    `Title: ${todo.title}`,
    `Completed: ${todo.completed ? "✅ Yes" : "❌ No"}`,
    "---",
  ].join("\n");
}

function formatUserPost(post: UserPost) {
  return [
    `ID: ${post.id}`,
    `User ID: ${post.userId}`,
    `Title: ${post.title}`,
    `Body: ${post.body}`,
    "---",
  ].join("\n");
}

function formatUserAlbum(album: UserAlbum) {
  return [
    `ID: ${album.id}`,
    `User ID: ${album.userId}`,
    `Title: ${album.title}`,
    "---",
  ].join("\n");
}

export {
  formatPost,
  formatComment,
  formatAlbum,
  formatAlbumPhoto,
  formatUser,
  formatUserAlbum,
  formatUserPost,
  formatUserTodo,
};
