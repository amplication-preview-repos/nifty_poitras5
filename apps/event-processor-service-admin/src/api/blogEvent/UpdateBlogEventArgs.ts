import { BlogEventWhereUniqueInput } from "./BlogEventWhereUniqueInput";
import { BlogEventUpdateInput } from "./BlogEventUpdateInput";

export type UpdateBlogEventArgs = {
  where: BlogEventWhereUniqueInput;
  data: BlogEventUpdateInput;
};
