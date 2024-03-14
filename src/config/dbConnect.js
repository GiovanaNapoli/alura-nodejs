import mongoose from 'mongoose';

async function connectToDataBase() {
  return await mongoose.connect(process.env.STRING_CONNECTION);
}

export default connectToDataBase;
