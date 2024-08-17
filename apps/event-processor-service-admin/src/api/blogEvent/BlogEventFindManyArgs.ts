import { BlogEventWhereInput } from "./BlogEventWhereInput";
import { BlogEventOrderByInput } from "./BlogEventOrderByInput";

export type BlogEventFindManyArgs = {
  where?: BlogEventWhereInput;
  orderBy?: Array<BlogEventOrderByInput>;
  skip?: number;
  take?: number;
};
