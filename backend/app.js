import express from "express"
import cors from "cors"
import appRoutes from "./routes/index.js"
import errorHandler from "./middlewares/error.middleware.js";
import notFound from "./middlewares/notFound.middleware.js"
const app = express();
app.use(cors())
app.use(express.json())

app.use('/api',appRoutes)



app.use(notFound)
app.use(errorHandler)



export default app;