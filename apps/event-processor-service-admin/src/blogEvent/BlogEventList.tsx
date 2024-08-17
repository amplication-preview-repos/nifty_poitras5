import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const BlogEventList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"BlogEvents"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="eventPayload" source="eventPayload" />
        <TextField label="eventType" source="eventType" />
        <TextField label="ID" source="id" />
        <BooleanField label="processed" source="processed" />
        <TextField label="processedAt" source="processedAt" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
