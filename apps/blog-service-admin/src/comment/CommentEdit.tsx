import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PostTitle } from "../post/PostTitle";

export const CommentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <TextInput label="commentAuthor" source="commentAuthor" />
        <TextInput label="commentBody" multiline source="commentBody" />
        <TextInput label="commentContent" multiline source="commentContent" />
        <DateTimeInput
          label="commentCreationDate"
          source="commentCreationDate"
        />
        <DateTimeInput label="commentDate" source="commentDate" />
        <TextInput label="commentWriter" source="commentWriter" />
        <TextInput label="content" multiline source="content" />
        <ReferenceInput source="post.id" reference="Post" label="Post">
          <SelectInput optionText={PostTitle} />
        </ReferenceInput>
        <TextInput label="relatedPost" source="relatedPost" />
      </SimpleForm>
    </Edit>
  );
};
