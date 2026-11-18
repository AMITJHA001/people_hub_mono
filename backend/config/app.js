import dotenv from "dotenv";
dotenv.config();

if(!process.env.PORT){
    throw new Error("App not configured!") 
}

const config = { PORT:process.env.PORT }

export default config;
