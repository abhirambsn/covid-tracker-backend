"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserTC = exports.User = exports.userSchema = undefined;

var _graphqlComposeMongoose = require("graphql-compose-mongoose");

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseBcrypt = require("mongoose-bcrypt");

var _mongooseBcrypt2 = _interopRequireDefault(_mongooseBcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userSchema = exports.userSchema = new _mongoose.Schema({
  email: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    bcrypt: true
  }
}, {
  timestamps: true,
  collection: 'users'
});
userSchema.plugin(_mongooseBcrypt2.default);
userSchema.index({
  createdAt: 1,
  updatedAt: 1
});

const User = exports.User = _mongoose2.default.model('User', userSchema);

const UserTC = exports.UserTC = (0, _graphqlComposeMongoose.composeWithMongoose)(User);