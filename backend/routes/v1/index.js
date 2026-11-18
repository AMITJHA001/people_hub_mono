import { Router } from "express";

const router = Router();

router.use("/view",(req,res)=>{
    res.status(200).json({message:"Hello v1"})
});


export default router;