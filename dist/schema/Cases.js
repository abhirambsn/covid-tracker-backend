"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.caseMutation = exports.caseQuery = undefined;

var _Cases = require("../models/Cases");

const caseQuery = {
  caseById: _Cases.CaseTC.getResolver('findById'),
  caseByIds: _Cases.CaseTC.getResolver('findByIds'),
  caseOne: _Cases.CaseTC.getResolver('findOne'),
  caseMany: _Cases.CaseTC.getResolver('findMany'),
  caseCount: _Cases.CaseTC.getResolver('count'),
  caseConnection: _Cases.CaseTC.getResolver('connection'),
  casePagination: _Cases.CaseTC.getResolver('pagination')
};
const caseMutation = {
  caseCreateOne: _Cases.CaseTC.getResolver('createOne'),
  caseCreateMany: _Cases.CaseTC.getResolver('createMany'),
  caseUpdateById: _Cases.CaseTC.getResolver('updateById'),
  caseUpdateOne: _Cases.CaseTC.getResolver('updateOne'),
  caseUpdateMany: _Cases.CaseTC.getResolver('updateMany'),
  caseRemoveById: _Cases.CaseTC.getResolver('removeById'),
  caseRemoveOne: _Cases.CaseTC.getResolver('removeOne'),
  caseRemoveMany: _Cases.CaseTC.getResolver('removeMany')
};
exports.caseQuery = caseQuery;
exports.caseMutation = caseMutation;