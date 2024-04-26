import dotenv from 'dotenv';
dotenv.config();



import express from 'express'
import mongoose from 'mongoose'
// import User from './models/User.js';


const app = express();
app.use(express.json());

 const connectMongoDB = async () =>{
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    if(connection){
        console.log("Connected to MongoDB");
    }

 }
 connectMongoDB();


app.listen(5000, () => console.log('Server running on port 5000'));
