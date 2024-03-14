import mongoose from 'mongoose';

const AuthorSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: mongoose.Schema.Types.String, required: true },
    nationality: { type: mongoose.Schema.Types.String },
  },
  { versionKey: false }
);

const author = mongoose.model('autores', AuthorSchema);

export { author, AuthorSchema };
