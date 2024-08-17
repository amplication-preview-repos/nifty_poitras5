import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  author?: SortOrder;
  commentAuthor?: SortOrder;
  commentBody?: SortOrder;
  commentContent?: SortOrder;
  commentCreationDate?: SortOrder;
  commentDate?: SortOrder;
  commentWriter?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  postId?: SortOrder;
  relatedPost?: SortOrder;
  updatedAt?: SortOrder;
};
