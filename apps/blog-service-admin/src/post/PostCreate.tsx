import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { CommentTitle } from "../comment/CommentTitle";

export const PostCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <TextInput label="blogAuthor" source="blogAuthor" />
        <TextInput label="blogContent" multiline source="blogContent" />
        <TextInput label="bodyContent" multiline source="bodyContent" />
        <ReferenceArrayInput
          source="comments"
          reference="Comment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommentTitle} />
        </ReferenceArrayInput>
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="createdTimestamp" source="createdTimestamp" />
        <DateTimeInput label="creationDate" source="creationDate" />
        <DateTimeInput label="creationDateTime" source="creationDateTime" />
        <DateTimeInput label="creationTimestamp" source="creationTimestamp" />
        <TextInput label="headline" source="headline" />
        <DateTimeInput label="modificationDate" source="modificationDate" />
        <DateTimeInput
          label="modificationDateTime"
          source="modificationDateTime"
        />
        <DateTimeInput
          label="modificationTimestamp"
          source="modificationTimestamp"
        />
        <TextInput label="postAuthor" source="postAuthor" />
        <TextInput label="postBody" multiline source="postBody" />
        <TextInput label="postContent" multiline source="postContent" />
        <DateTimeInput label="postCreationDate" source="postCreationDate" />
        <DateTimeInput
          label="postModificationDate"
          source="postModificationDate"
        />
        <TextInput label="postTitle" source="postTitle" />
        <TextInput label="postWriter" source="postWriter" />
        <TextInput label="title" source="title" />
        <DateTimeInput label="updatedTimestamp" source="updatedTimestamp" />
        <TextInput label="writer" source="writer" />
      </SimpleForm>
    </Create>
  );
};
