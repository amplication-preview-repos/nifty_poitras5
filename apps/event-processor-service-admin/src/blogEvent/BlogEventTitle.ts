import { BlogEvent as TBlogEvent } from "../api/blogEvent/BlogEvent";

export const BLOGEVENT_TITLE_FIELD = "eventType";

export const BlogEventTitle = (record: TBlogEvent): string => {
  return record.eventType?.toString() || String(record.id);
};
