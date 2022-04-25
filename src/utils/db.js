import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const connection = mongoose.connect(process.env.MONGO_URI, {
  autoIndex: true,
  useNewUrlParser: true,
});

connection.then((db) => db).catch((err) => console.error(err));

export default connection;
