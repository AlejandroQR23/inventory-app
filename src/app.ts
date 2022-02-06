import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import dotenv from 'dotenv';
dotenv.config();

import authRoutes from './routes/auth.routes';

// initializations
const app = express();

// settings
app.set('port', process.env.PORT);

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(authRoutes);

// routes
app.get('/', (req, res) => {
  res.send(`The API is at http://localhost:${app.get('port')}`);
});

export default app;
