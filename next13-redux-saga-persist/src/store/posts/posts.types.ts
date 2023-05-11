export interface PostsState {
  posts: Post[] | null;
  post: Post | null;
  error: string | null;
  counter: number;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
