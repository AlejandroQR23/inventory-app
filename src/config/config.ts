export default {
  jwtSecret: process.env.JWT_SECRET || '',
  DB: {
    URI: process.env.MONGODB_CNN || '',
    USER: process.env.MONGODB_USER,
    PASSWORD: process.env.MONGODB_PASSWORD,
  },
};
