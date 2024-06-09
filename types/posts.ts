export interface Post {
  id: string;
  title: string;
  body: string;
  author: string;
  date: string;
  comments: Postcomment[];
}

export interface Postcomment {
  id: string;
  text: string;
  username: string;
}
