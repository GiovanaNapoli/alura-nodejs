import mongoose from 'mongoose';
import { AuthorSchema } from './Author.js';

const BookSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: mongoose.Schema.Types.String, required: true },
    publishingCompany: { type: mongoose.Schema.Types.String },
    price: { type: mongoose.Schema.Types.Number },
    pages: { type: mongoose.Schema.Types.Number },
    author: AuthorSchema,
  },
  { versionKey: false }
);

const book = mongoose.model('livros', BookSchema);

export default book;
