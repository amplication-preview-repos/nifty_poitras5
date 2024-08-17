import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PostList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Posts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="author" source="author" />
        <TextField label="blogAuthor" source="blogAuthor" />
        <TextField label="blogContent" source="blogContent" />
        <TextField label="bodyContent" source="bodyContent" />
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="createdTimestamp" source="createdTimestamp" />
        <TextField label="creationDate" source="creationDate" />
        <TextField label="creationDateTime" source="creationDateTime" />
        <TextField label="creationTimestamp" source="creationTimestamp" />
        <TextField label="headline" source="headline" />
        <TextField label="ID" source="id" />
        <TextField label="modificationDate" source="modificationDate" />
        <TextField label="modificationDateTime" source="modificationDateTime" />
        <TextField
          label="modificationTimestamp"
          source="modificationTimestamp"
        />
        <TextField label="postAuthor" source="postAuthor" />
        <TextField label="postBody" source="postBody" />
        <TextField label="postContent" source="postContent" />
        <TextField label="postCreationDate" source="postCreationDate" />
        <TextField label="postModificationDate" source="postModificationDate" />
        <TextField label="postTitle" source="postTitle" />
        <TextField label="postWriter" source="postWriter" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="updatedTimestamp" source="updatedTimestamp" />
        <TextField label="writer" source="writer" />
      </Datagrid>
    </List>
  );
};
