import { JsonValue } from "type-fest";

export type BlogEvent = {
  createdAt: Date;
  eventPayload: JsonValue;
  eventType: string | null;
  id: string;
  processed: boolean | null;
  processedAt: Date | null;
  updatedAt: Date;
};
