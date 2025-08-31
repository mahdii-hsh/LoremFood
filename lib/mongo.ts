import { MongoClient } from "mongodb";

if (!process.env.MongoURI) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

const uri = process.env.MongoURI;
const options = {};

let client: MongoClient;
let dbMongo: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  dbMongo = globalWithMongo._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  dbMongo = client.connect();
}

export default dbMongo;
