import express from "express"
import cors from "cors"
import appRoutes from "./routes/index.js"
const app = express();
app.use(cors())
app.use(express.json())

app.use('/api',appRoutes)
app.get('/',(req,res)=>{
    res.status(200).json({message:"working"})
})


export default app;