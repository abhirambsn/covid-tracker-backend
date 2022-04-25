"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphqlCompose = require("graphql-compose");

var _User = require("./User");

var _Cases = require("./Cases");

var _db = require("../utils/db");

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const schemaComposer = new _graphqlCompose.SchemaComposer();
schemaComposer.Query.addFields({ ..._User.userQuery,
  ..._Cases.caseQuery
});
schemaComposer.Mutation.addFields({ ..._User.userMutation,
  ..._Cases.caseMutation
});
exports.default = schemaComposer.buildSchema();