// require('dotenv').config()
import dotenv from 'dotenv';
import connectDb from "./db/index.js";
dotenv.config({
    path:'./env'
})
connectDb(); 














































/*import mongoose from "mongoose";
import express from "express";
const app = express();
(  async ()=>
{
    try{
            await mongoose.connect(`${process.env.MONGODB_URL} / ${DB_NAME}`);
            app.on("error",(error)=>
            {
                console.log("ERROR NOT IS ",error)
            })
            app.listen(process.env.PORT,()=>
            {
                console.log(`your server is start is ready ${process.env.PORT}`);
            })
    }
    catch(error){
        console.log("ERRor :",error);
    }
})()*/