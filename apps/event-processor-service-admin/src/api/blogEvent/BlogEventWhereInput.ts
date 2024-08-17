import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type BlogEventWhereInput = {
  eventPayload?: JsonFilter;
  eventType?: StringNullableFilter;
  id?: StringFilter;
  processed?: BooleanNullableFilter;
  processedAt?: DateTimeNullableFilter;
};
