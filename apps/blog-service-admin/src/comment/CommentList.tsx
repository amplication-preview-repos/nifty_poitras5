import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { POST_TITLE_FIELD } from "../post/PostTitle";

export const CommentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Comments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="author" source="author" />
        <TextField label="commentAuthor" source="commentAuthor" />
        <TextField label="commentBody" source="commentBody" />
        <TextField label="commentContent" source="commentContent" />
        <TextField label="commentCreationDate" source="commentCreationDate" />
        <TextField label="commentDate" source="commentDate" />
        <TextField label="commentWriter" source="commentWriter" />
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Post" source="post.id" reference="Post">
          <TextField source={POST_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="relatedPost" source="relatedPost" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
