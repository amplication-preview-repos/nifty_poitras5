import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";

export type PostCreateInput = {
  author?: string | null;
  blogAuthor?: string | null;
  blogContent?: string | null;
  bodyContent?: string | null;
  comments?: CommentCreateNestedManyWithoutPostsInput;
  content?: string | null;
  createdTimestamp?: Date | null;
  creationDate?: Date | null;
  creationDateTime?: Date | null;
  creationTimestamp?: Date | null;
  headline?: string | null;
  modificationDate?: Date | null;
  modificationDateTime?: Date | null;
  modificationTimestamp?: Date | null;
  postAuthor?: string | null;
  postBody?: string | null;
  postContent?: string | null;
  postCreationDate?: Date | null;
  postModificationDate?: Date | null;
  postTitle?: string | null;
  postWriter?: string | null;
  title?: string | null;
  updatedTimestamp?: Date | null;
  writer?: string | null;
};
