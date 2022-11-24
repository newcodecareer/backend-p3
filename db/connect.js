const mongoose = require('mongoose');
const logger = require('../utils/logger');

const connectDB = () => {
  const connectionString = process.env.MONGO_URI;
  if (!connectionString) {
    logger.info('connection string is undefined');

    process.exit(1);
  }
  const db = mongoose.connection;
  db.on('connected', () => {
    // logger.info
    logger.info(`DB connected, ${connectionString}`);
  });
  db.on('error', (error) => {
    logger.info(error);
    process.exit(2);
  });
  db.on('disconnected', () => {
    logger.info('db disconnected');
  });
  return mongoose.connect(connectionString);
};

module.exports = connectDB;
