"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userQuery = exports.userMutation = undefined;

var _User = require("../models/User");

const userQuery = {
  userById: _User.UserTC.getResolver("findById"),
  userByIds: _User.UserTC.getResolver("findByIds"),
  userOne: _User.UserTC.getResolver("findOne"),
  userMany: _User.UserTC.getResolver("findMany"),
  userCount: _User.UserTC.getResolver("count"),
  userConnection: _User.UserTC.getResolver("connection"),
  userPagination: _User.UserTC.getResolver("pagination")
};
const userMutation = {
  userCreateOne: _User.UserTC.getResolver("createOne"),
  userCreateMany: _User.UserTC.getResolver("createMany"),
  userUpdateById: _User.UserTC.getResolver("updateById"),
  userUpdateOne: _User.UserTC.getResolver("updateOne"),
  userUpdateMany: _User.UserTC.getResolver("updateMany"),
  userRemoveById: _User.UserTC.getResolver("removeById"),
  userRemoveOne: _User.UserTC.getResolver("removeOne"),
  userRemoveMany: _User.UserTC.getResolver("removeMany")
};
exports.userMutation = userMutation;
exports.userQuery = userQuery;