import { Post as TPost } from "../api/post/Post";

export const POST_TITLE_FIELD = "postTitle";

export const PostTitle = (record: TPost): string => {
  return record.postTitle?.toString() || String(record.id);
};
