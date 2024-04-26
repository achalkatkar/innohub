import dotenv from 'dotenv';
dotenv.config();



import express from 'express'
import mongoose from 'mongoose'
import User from './models/User.js';


const app = express();
app.use(express.json());

 const connectMongoDB = async () =>{
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    if(connection){
        console.log("Connected to MongoDB");
    }

 }
 connectMongoDB();


 app.post("/signup", async(req, res)=>{

    const {name, email, mobile, password} = req.body;

    const user = new User({
        name: name,
        email: email,
        mobile: mobile,
        password: password

    });

    try{
        const savedUser = await user.save();
        
        return res.json({
            success:true,
            data: savedUser,
            message: "User registered succesfully"
        })

    }
    catch(e){
        res.json({
        success:false,
        message: e.message
        })
    }

})


app.post("/login", async(req, res)=>{
    const {email, password} = req.body;



    const user = await User.findOne({email: email, password: password});

    if(user){
        return res.json({
            success:true,
            data: user,
            message: "User logged in successfully"
        })
    }
    else
    {
        return res.json({
            success: false,
            message: "Ivalid email or password"
        })
    }
    
})



app.listen(5000, () => console.log('Server running on port 5000'));
