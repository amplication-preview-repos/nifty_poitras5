import { SortOrder } from "../../util/SortOrder";

export type BlogEventOrderByInput = {
  createdAt?: SortOrder;
  eventPayload?: SortOrder;
  eventType?: SortOrder;
  id?: SortOrder;
  processed?: SortOrder;
  processedAt?: SortOrder;
  updatedAt?: SortOrder;
};
