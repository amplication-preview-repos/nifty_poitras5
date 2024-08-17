import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

export const BlogEventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="eventType" source="eventType" />
        <BooleanInput label="processed" source="processed" />
        <DateTimeInput label="processedAt" source="processedAt" />
      </SimpleForm>
    </Create>
  );
};
