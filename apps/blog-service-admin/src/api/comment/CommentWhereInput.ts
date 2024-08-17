import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentWhereInput = {
  author?: StringNullableFilter;
  commentAuthor?: StringNullableFilter;
  commentBody?: StringNullableFilter;
  commentContent?: StringNullableFilter;
  commentCreationDate?: DateTimeNullableFilter;
  commentDate?: DateTimeNullableFilter;
  commentWriter?: StringNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  post?: PostWhereUniqueInput;
  relatedPost?: StringNullableFilter;
};
