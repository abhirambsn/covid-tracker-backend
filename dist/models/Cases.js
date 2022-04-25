"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CaseTC = exports.Case = exports.caseModelSchema = undefined;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _graphqlComposeMongoose = require("graphql-compose-mongoose");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const caseModelSchema = exports.caseModelSchema = new _mongoose.Schema({
  countryName: {
    type: String
  },
  countryCode: {
    type: String
  },
  newConfirmed: Number,
  totalConfirmed: Number,
  newDeaths: Number,
  totalDeath: Number,
  newRecoverd: Number,
  totalRecovered: Number
}, {
  timestamps: true,
  collection: 'cases'
});
caseModelSchema.index({
  createdAt: 1,
  updatedAt: 1
});

const Case = exports.Case = _mongoose2.default.model('Case', caseModelSchema);

const CaseTC = exports.CaseTC = (0, _graphqlComposeMongoose.composeWithMongoose)(Case);