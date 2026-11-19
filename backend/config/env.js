import dotenv from "dotenv";
dotenv.config();

if(!process.env.PORT){
    throw new Error("App not configured!") 
}

const port = Number(process.env.PORT);

if(Number.isNaN(port)){
    throw new Error("App not configured!");
}

const env = { PORT:port }

export default env;
