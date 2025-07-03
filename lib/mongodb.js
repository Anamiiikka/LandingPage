import { MongoClient } from 'mongodb';

let client;
let clientPromise;

const uri = process.env.MONGODB_URI;
const options = {};

if (!uri) {
  console.error('MONGODB_URI is not defined in .env.local');
  throw new Error('Please add your MongoDB URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    console.log('Creating new MongoDB client in development mode');
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect().catch((error) => {
      console.error('MongoDB connection error in development:', error);
      throw error;
    });
  }
  clientPromise = global._mongoClientPromise;
} else {
  console.log('Creating new MongoDB client in production mode');
  client = new MongoClient(uri, options);
  clientPromise = client.connect().catch((error) => {
    console.error('MongoDB connection error in production:', error);
    throw error;
  });
}

export default clientPromise;