import { InputJsonValue } from "../../types";

export type BlogEventCreateInput = {
  eventPayload?: InputJsonValue;
  eventType?: string | null;
  processed?: boolean | null;
  processedAt?: Date | null;
};
