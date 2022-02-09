import { model, Schema, Document } from 'mongoose';

export interface IMichi extends Document {
  name: string;
  race: string;
  description: string;
  age: number;
  imgUrl: string;
}

const michiSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  race: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  imgUrl: {
    type: String,
  },
});

export default model<IMichi>('Michi', michiSchema);
