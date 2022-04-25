import express from "express";

import { ApolloServer } from "apollo-server-express";

import mongoose from "mongoose";

import "./utils/db";
import schema from "./schema";


const app = express();
const server = new ApolloServer({
  schema,
  cors: true,
  playground: process.env.NODE_ENV === "development" ? true : false,
  introspection: true,
  tracing: true,
  path: "/",
});

async function startApollo() {
  await server.start();
  server.applyMiddleware({
    app,
    path: "/",
    cors: true,
    onHealthCheck: () =>
      new Promise((resolve, reject) => {
        if (mongoose.connection.readyState > 0) {
          resolve();
        } else {
          reject();
        }
      }),
  });
}

startApollo();

import casesRoutes from "./routes/cases";

app.use('/cases', casesRoutes);
app.listen({ port: process.env.PORT }, () => {
  console.log(`Server listenting on port ${process.env.PORT}`);
});
