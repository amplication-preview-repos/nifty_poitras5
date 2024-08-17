import { Post } from "../post/Post";

export type Comment = {
  author: string | null;
  commentAuthor: string | null;
  commentBody: string | null;
  commentContent: string | null;
  commentCreationDate: Date | null;
  commentDate: Date | null;
  commentWriter: string | null;
  content: string | null;
  createdAt: Date;
  id: string;
  post?: Post | null;
  relatedPost: string | null;
  updatedAt: Date;
};
