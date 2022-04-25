"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _apolloServerExpress = require("apollo-server-express");

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

require("./utils/db");

var _schema = require("./schema");

var _schema2 = _interopRequireDefault(_schema);

var _cases = require("./routes/cases");

var _cases2 = _interopRequireDefault(_cases);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();
const server = new _apolloServerExpress.ApolloServer({
  schema: _schema2.default,
  cors: true,
  playground: process.env.NODE_ENV === "development" ? true : false,
  introspection: true,
  tracing: true,
  path: "/"
});

async function startApollo() {
  await server.start();
  server.applyMiddleware({
    app,
    path: "/",
    cors: true,
    onHealthCheck: () => new Promise((resolve, reject) => {
      if (_mongoose2.default.connection.readyState > 0) {
        resolve();
      } else {
        reject();
      }
    })
  });
}

startApollo();
app.use('/cases', _cases2.default);
app.listen({
  port: process.env.PORT
}, () => {
  console.log(`Server listenting on port ${process.env.PORT}`);
});