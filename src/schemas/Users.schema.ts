interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Users extends Array<User> {}

interface UserTodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface UserTodos extends Array<UserTodo> {}

interface UserPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface UserPosts extends Array<UserPost> {}

interface UserAlbum {
  userId: number;
  id: number;
  title: string;
}

interface UserAlbums extends Array<UserAlbum> {}

export {
  User,
  Users,
  UserTodo,
  UserTodos,
  UserPost,
  UserPosts,
  UserAlbum,
  UserAlbums,
};
