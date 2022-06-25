import { Request, Response } from 'express';

import Michis from '../models/michis';

export const getMichis = async (req: Request, res: Response): Promise<Response> => {
  const michis = await Michis.find();
  return res.status(200).json({ michis });
};

export const getMichiById = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const michi = await Michis.findById(id);

  if (!michi) {
    return res.status(404).json({ msg: 'Michi not found' });
  }
  return res.status(200).json({ michi });
};

export const createMichi = async (req: Request, res: Response): Promise<Response> => {
  const newMichi = req.body;
  const michi = new Michis(newMichi);
  await michi.save();
  return res.status(201).json({ michi });
};

export const updateMichi = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const newMichi = req.body;
  const michi = await Michis.findByIdAndUpdate(id, newMichi);

  if (!michi) {
    return res.status(404).json({ msg: 'Michi not found' });
  }
  return res.status(200).json({ msg: 'Michi updated', michi });
};

export const deleteMichi = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const michi = await Michis.findByIdAndDelete(id);

  if (!michi) {
    return res.status(404).json({ msg: 'Michi not found' });
  }
  return res.status(200).json({ msg: 'Michi deleted', michi });
};
