import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

export const BlogEventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="eventType" source="eventType" />
        <BooleanInput label="processed" source="processed" />
        <DateTimeInput label="processedAt" source="processedAt" />
      </SimpleForm>
    </Edit>
  );
};
