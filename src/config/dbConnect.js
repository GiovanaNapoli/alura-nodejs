import mongoose, { mongo } from "mongoose";

async function connectToDataBase() {
  const uri =
    "mongodb+srv://admin:1234@cluster0.zpxx1nz.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0";

  return await mongoose.connect(uri);
}

export default connectToDataBase;
