import mongoose from 'mongoose';
import { AuthorSchema } from './Author.js';

const BookSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    title: {
      type: mongoose.Schema.Types.String,
      required: [true, 'The titles book is required'],
    },
    publishingCompany: {
      type: mongoose.Schema.Types.String,
      required: [true, 'The publish company is required'],
    },
    price: { type: mongoose.Schema.Types.Number },
    pages: { type: mongoose.Schema.Types.Number },
    author: AuthorSchema,
  },
  { versionKey: false }
);

const book = mongoose.model('livros', BookSchema);

export default book;
