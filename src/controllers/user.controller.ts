import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import config from '../config/config';
import User, { IUser } from '../models/user';

const createToken = (user: IUser) => {
  return jwt.sign({ id: user.id, email: user.email }, config.jwtSecret, { expiresIn: 86400 });
};

export const signUp = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: 'Please, send an email and password' });
  }

  const user = await User.findOne({ email });

  if (user) {
    return res.status(400).json({ msg: 'User already exists' });
  }

  const newUser = new User({ email, password });
  await newUser.save();

  return res.status(201).json({ newUser });
};

export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: 'Please, send an email and password' });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ msg: 'User does not exist' });
  }

  const isMatch = await user.comparePassword(password);
  if (isMatch) {
    return res.status(201).json({ token: createToken(user) });
  }

  return res.status(400).json({ msg: 'Email or password mismatch' });
};
