import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb = async ()=>
{
    try{
        await mongoose.connect("mongodb+srv://prashantcoder70:prashant123@cluster0.at9wkas.mongodb.net/YOUTUBE VIDEO");
        console.log(`\n mongo db connectd !! DB HOST `)
    }
    catch(error)
    {
        console.log("mongo db connection pppp",error);
        process.exit(1)
    }
}
export default connectDb;