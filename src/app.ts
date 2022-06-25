import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import passport from 'passport';

import dotenv from 'dotenv';
dotenv.config();

import authRoutes from './routes/auth.routes';
import michisRoutes from './routes/michis.routes';
import passportMiddleware from './middlewares/passport';

// initializations
const app = express();

// settings
app.set('port', process.env.PORT);

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());

passport.use(passportMiddleware);

// routes
app.get('/', (req, res) => {
  res.send(`The API is at http://localhost:${app.get('port')}`);
});

app.use('/api/auth', authRoutes);
app.use('/api/michis', michisRoutes);

export default app;
