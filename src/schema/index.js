import { SchemaComposer } from "graphql-compose";

const schemaComposer = new SchemaComposer();

import { userQuery, userMutation } from "./User";
import { caseQuery, caseMutation } from "./Cases";

import db from "../utils/db";

schemaComposer.Query.addFields({
  ...userQuery,
  ...caseQuery,
});

schemaComposer.Mutation.addFields({
  ...userMutation,
  ...caseMutation,
});

export default schemaComposer.buildSchema();
