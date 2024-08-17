import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";

export const BlogEventShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="eventPayload" source="eventPayload" />
        <TextField label="eventType" source="eventType" />
        <TextField label="ID" source="id" />
        <BooleanField label="processed" source="processed" />
        <TextField label="processedAt" source="processedAt" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
