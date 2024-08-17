import { InputJsonValue } from "../../types";

export type BlogEventUpdateInput = {
  eventPayload?: InputJsonValue;
  eventType?: string | null;
  processed?: boolean | null;
  processedAt?: Date | null;
};
