import app from "./app.js"
import env from "./config/env.js";
import connectDB from "./config/db_connection.js";
import logger from "./logger/logger.js"
const port = env.PORT;


const serverConnect = async() =>{
    try{
       const isDbConnect =  await connectDB();
       if(isDbConnect){
         app.listen(port,async ()=>{
            console.log(`server running: ${port}`);
        })
       }else{
        console.error("Application startup failed");
        throw new Error("Unable to connect MongoDb");
       }
       
    }catch(e){
        console.error("Application startup failed");
        process.exit(1);
    }
}

serverConnect()