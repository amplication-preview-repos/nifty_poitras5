import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentCreateInput = {
  author?: string | null;
  commentAuthor?: string | null;
  commentBody?: string | null;
  commentContent?: string | null;
  commentCreationDate?: Date | null;
  commentDate?: Date | null;
  commentWriter?: string | null;
  content?: string | null;
  post?: PostWhereUniqueInput | null;
  relatedPost?: string | null;
};
