import dotenv from "dotenv";
dotenv.config();

if(!process.env.PORT){
    throw new Error("App not configured!") 
}

const port = Number(process.env.PORT);
const mongoDB = process.env.DB;

if(Number.isNaN(port)){
    throw new Error("App not configured!");
}

const env = { PORT:port, MONGO:mongoDB}

export default env;
