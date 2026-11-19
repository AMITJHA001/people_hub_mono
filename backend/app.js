import express from "express"
import cors from "cors"
import appRoutes from "./routes/index.js"
const app = express();
app.use(cors())
app.use(express.json())

app.use('/api',appRoutes)



export default app;