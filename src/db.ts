import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const dbUrl = 'mongodb://localhost:27017/ose-db';

export default async () => {
  mongoose.connect(dbUrl);

  const db = mongoose.connection;

  db.on('error', () => {
    console.error(`Could not connect to mongoose on ${dbUrl}`);
  });

  db.once('open', () => {
    console.log('Successfully connected to database');
  });
};
