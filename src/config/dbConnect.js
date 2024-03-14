import mongoose from 'mongoose';

const connectToDataBase = async () =>{
  return await mongoose.connect(process.env.STRING_CONNECTION);
};

export default connectToDataBase;
