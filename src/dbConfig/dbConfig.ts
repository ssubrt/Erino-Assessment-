// utils/db.ts
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGO_URI! ;

if (!MONGODB_URI) {
  throw new Error(
    'MongoDb URI is missing. Please provide MONGO_URI in .env file'
  );
}



let cached: any = (globalThis as any).mongoose;


if (!cached) {
  cached = (globalThis as any).mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
