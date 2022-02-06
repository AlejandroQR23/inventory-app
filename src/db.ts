import mongoose from 'mongoose';
import config from './config/config';

export const startDB = () => {
  mongoose.connect(config.DB.URI);

  const connection = mongoose.connection;

  connection.once('open', () => {
    console.log('MongoDB connection stablished');
  });

  connection.on('error', (error) => {
    console.log(error);
    process.exit(0);
  });
};
