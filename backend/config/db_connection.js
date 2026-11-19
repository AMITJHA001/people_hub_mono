import mongoose from "mongoose";
import logger from "../logger/logger.js";
import env from "./env.js"
const connectDB = async() => { 
    try{
        const db = await mongoose.connect(env.MONGO);
        if(db.connection.readyState === 1){
            logger.info("MongoDB connection successful!")
            return true 
        }else{
            throw new Error("MongoDB connection failed");
        }
    }catch(e){
          logger.error("MongoDB connection failed", {
            message: error.message
        });
        throw error;
    }
}


export default connectDB;