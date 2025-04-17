interface Post {
  userId: number;
  id: number;
  title?: string;
  body?: string;
}

interface Posts extends Array<Post> {}

interface postComment {
  postId: number;
  id: number;
  name: string;
  email?: string;
  body?: string;
}

interface postComments extends Array<postComment> {}

export { Post, Posts, postComment, postComments };
