import { Router } from "express";
import logger from "../../logger/logger.js";

const router = Router();


router.get("/",(req,res)=>{
    logger.info(`working`)
    res.status(200).json({message:"Hello v1"})
});


export default router;