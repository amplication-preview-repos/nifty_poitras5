import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { POST_TITLE_FIELD } from "./PostTitle";

export const PostShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Comment"
          target="postId"
          label="Comments"
        >
          <Datagrid rowClick="show">
            <TextField label="author" source="author" />
            <TextField label="commentAuthor" source="commentAuthor" />
            <TextField label="commentBody" source="commentBody" />
            <TextField label="commentContent" source="commentContent" />
            <TextField
              label="commentCreationDate"
              source="commentCreationDate"
            />
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
